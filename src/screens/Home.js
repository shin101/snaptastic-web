import { useNavigate } from "react-router-dom";
import { logUserOut } from "../../src/apollo";
import { gql, useQuery } from "@apollo/client";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      commentNumber
      comments {
        id
        user {
          username
          avatar
        }
        payload
        isMine
        createdAt
      }
      createdAt
      isMine
      isLiked
    }
  }
`;

function Home() {
  const { data } = useQuery(FEED_QUERY);
  const navigate = useNavigate();

  return (
    <div>
      <PageTitle title="Home" />
      <button onClick={logUserOut}>Log Out</button>
      {data?.seeFeed?.map((photo) => (
        <Photo key={photo.id} {...photo} />
      ))}
    </div>
  );
}
export default Home;
