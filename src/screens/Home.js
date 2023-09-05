import { gql, useQuery } from "@apollo/client";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import InitialFeed from "./InitialFeed";


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

const SUGGESTED_FEED_QUERY = gql`
  query seeSuggested {
    seeSuggested {
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
  const { data:feedData, loading } = useQuery(FEED_QUERY);
  const { data:suggestedData } = useQuery(SUGGESTED_FEED_QUERY);


  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PageTitle title="Home" />
      {feedData?.seeFeed?.length === 0 ? (
        <>
        <InitialFeed />
          {suggestedData?.seeSuggested?.map((photo) => <Photo key={photo.id} {...photo} />)}
        </>
      ) : (
        feedData?.seeFeed?.map((photo) => <Photo key={photo.id} {...photo} />)
      )}
    </div>
  );
}
export default Home;
