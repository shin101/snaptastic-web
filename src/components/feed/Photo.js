import { gql, useMutation } from "@apollo/client";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "../Avatar";
import { FatText } from "../shared";
import Comments from "./Comments";
import { NavLink } from "react-router-dom";

const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      ok
      error
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhotoContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
  max-width: 615px;
`;

const PhotoHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const Username = styled(FatText)`
  margin-left: 15px;
`;

const PhotoFile = styled.img`
  min-width: 100%;
  max-width: 615px;
`;

const PhotoData = styled.div`
  padding: 15px;
`;

const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;

const PhotoAction = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const Likes = styled(FatText)`
  margin-top: 15px;
  display: block;
`;

function Photo({
  id,
  user,
  file,
  isLiked,
  likes,
  caption,
  commentNumber,
  comments,
}) {
  const updateToggleLike = (cache, result) => {
    const {
      data: {
        toggleLike: { ok },
      },
    } = result;

    if (ok) {
      const photoId = `Photo:${id}`;
      cache.modify({
        id: photoId,
        fields: {
          isLiked(prev) {
            return !prev;
          },
          likes(prev) {
            if (isLiked) {
              return prev - 1;
            }
            return prev + 1;
          },
        },
      });
    }
  };

  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE_MUTATION, {
    variables: { id },
    update: updateToggleLike,
  });

  return (
    <Container>
      <PhotoContainer key={id}>
        <PhotoHeader>
          <NavLink to={`/users/${user.username}`}>
            <Avatar
              lg
              url={
                user.avatar ||
                "https://icon-library.com/images/default-profile-icon/default-profile-icon-6.jpg"
              }
            />
          </NavLink>
          <NavLink to={`/users/${user.username}`}>
            <Username>{user.username}</Username>
          </NavLink>
        </PhotoHeader>
        <PhotoFile src={file} alt="pic" />
        <PhotoData>
          <PhotoActions>
            <div>
              <PhotoAction onClick={toggleLikeMutation}>
                <FontAwesomeIcon
                  size={"2x"}
                  style={{ color: isLiked ? "tomato" : "inherit" }}
                  icon={isLiked ? SolidHeart : faHeart}
                />
              </PhotoAction>
              <PhotoAction>
                <FontAwesomeIcon size={"2x"} icon={faComment} />
              </PhotoAction>
              <PhotoAction>
                <FontAwesomeIcon size={"2x"} icon={faPaperPlane} />
              </PhotoAction>
            </div>
            <div>
              <FontAwesomeIcon size={"2x"} icon={faBookmark} />
            </div>
          </PhotoActions>
          <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
          <Comments
            author={user.username}
            caption={caption}
            commentNumber={commentNumber}
            comments={comments}
            photoId={id}
          />
        </PhotoData>
      </PhotoContainer>
    </Container>
  );
}

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }),
  caption: PropTypes.string,
  file: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  commentNumber: PropTypes.number.isRequired,
};

export default Photo;
