import { useNavigate } from "react-router-dom";
import { logUserOut } from "../../src/apollo";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import { FatText } from "../components/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      user {
        username
        avatar
      }
      caption
      comments
      createdAt
      isMine
    }
  }
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
`;

function Home() {
  const { data } = useQuery(FEED_QUERY);

  const navigate = useNavigate();

  const Likes = styled(FatText)`
    margin-top: 15px;
    display: block;
  `;

  return (
    <div>
      {data?.seeFeed?.map((photo) => (
        <PhotoContainer key={photo.id}>
          <PhotoHeader>
            <Avatar lg url={photo.user.avatar} />
            <Username>{photo.user.username}</Username>
          </PhotoHeader>
          <PhotoFile src={photo.file} alt="pic" />
          <PhotoData>
            <PhotoActions>
              <div>
                <PhotoAction>
                  <FontAwesomeIcon size={"2x"} icon={faHeart} />
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
            <Likes>
              {photo.likes === 1 ? "1 like" : `${photo.likes} likes`}
            </Likes>
          </PhotoData>
        </PhotoContainer>
      ))}
    </div>
  );
}
export default Home;
