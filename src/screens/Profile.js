import { gql, useQuery } from "@apollo/client";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { PHOTO_FRAGMENT } from "../fragments";
import styled from "styled-components";
import { FatText } from "../components/shared";
import Button from "../components/auth/Button";
import PageTitle from "../components/PageTitle";

const FOLLOW_USER_MUTATION = gql`
  mutation followUser($username: String!) {
    followUser(username: $username) {
      ok
    }
  }
`;
const UNFOLLOW_USER_MUTATION = gql`
  mutation unfollowUser($username: String!) {
    unfollowUser(username: $username) {
      ok
    }
  }
`;

const SEE_PROFILE_QUERY = gql`
  query seeProfile($username: String!) {
    seeProfile(username: $username) {
      firstName
      lastName
      username
      bio
      avatar
      photos {
        ...PhotoFragment
      }
      totalFollowing
      totalFollowers
      isMe
      isFollowing
    }
  }
  ${PHOTO_FRAGMENT}
`;

const Header = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  margin-left: 50px;
  margin-top: 30px;
  max-height: 200px;
  max-width: 200px;
  border-radius: 50%;
  border: none;
  background-color: #2c2c2c;
`;

const Username = styled.div`
  font-size: 28px;
`;
const Name = styled(FatText)`
  font-size: 20px;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  margin-right: 20px;
`;

const Value = styled(FatText)`
  font-size: 18px;
`;

const Grid = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`;

const Column = styled.div`
  margin-left: 100px;
`;
const Row = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  display: flex;
`;

const Photo = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: relative;
`;

const Icons = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 0px 5px;
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`;

const defaultImage =
  "https://icon-library.com/images/default-profile-icon/default-profile-icon-6.jpg";

const ProfileButton = styled(Button).attrs({ as: "span" })`
  margin-left: 10px;
  margin-top: 0px;
`;

function Profile() {
  const { username } = useParams();
  const { data, loading, error } = useQuery(SEE_PROFILE_QUERY, {
    variables: { username },
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const getButton = (seeProfile) => {
    const { isMe, isFollowing } = seeProfile;
    if (isMe) {
      return <ProfileButton>Edit Profile</ProfileButton>;
    }
    if (isFollowing) {
      return <ProfileButton>Unfollow</ProfileButton>;
    } else {
      return <ProfileButton>Follow</ProfileButton>;
    }
  };

  return (
    <div>
      <PageTitle
        title={
          loading ? "Loading..." : `${data?.seeProfile?.username}'s profile`
        }
      />
      <Header>
        <Avatar
          src={data?.seeProfile?.avatar || defaultImage}
          alt="User Avatar"
        />
        <Column>
          <Row>
            <Username>{data?.seeProfile?.username}</Username>
            {data?.seeProfile ? getButton(data.seeProfile) : null}
          </Row>
          <Row>
            <List>
              <Item>
                <Value>{data?.seeProfile?.totalFollowers}</Value> followers
              </Item>
              <Item>
                <Value>{data?.seeProfile?.totalFollowing}</Value> following
              </Item>
            </List>
          </Row>
          <Row>
            <Name>
              {data?.seeProfile?.firstName}
              {"  "}
              {data?.seeProfile?.lastName}
            </Name>
          </Row>
          <Row>{data?.seeProfile?.bio}</Row>
        </Column>
      </Header>

      <Grid>
        {data?.seeProfile?.photos.map((photo) => (
          <Photo key={photo.id} bg={photo.file}>
            <Icons>
              <Icon>
                <FontAwesomeIcon icon={faHeart} />
                {photo.likes}
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faComment} />
                {photo.commentNumber}
              </Icon>
            </Icons>
          </Photo>
        ))}
      </Grid>
    </div>
  );
}

export default Profile;
