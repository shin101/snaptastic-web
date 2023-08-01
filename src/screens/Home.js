import { gql, useQuery } from "@apollo/client";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import InitialFeed from "./InitialFeed";
import { useNavigate } from "react-router-dom";
import routes from "./routes";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

function Home() {
  const { data, loading } = useQuery(FEED_QUERY);
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    navigate(routes.home);
  }

  return (
    <div>
      <PageTitle title="Home" />

      {data.seeFeed.length === 0 ? (
        <InitialFeed />
      ) : (
        data?.seeFeed?.map((photo) => <Photo key={photo.id} {...photo} />)
      )}
    </div>
  );
}
export default Home;
