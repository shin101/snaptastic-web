import { gql, useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { PHOTO_FRAGMENT, COMMENT_FRAGMENT } from "../fragments";

const FeedText = styled.div`
  margin-top: 140px;
  text-align: center;
  font-size: 30px;
`;

const SmallText = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
`;

const Grid = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`;

const DISCOVER_PAGE_QUERY = gql`
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

const Recs = () => {
  const { data: discoverData, loading } = useQuery(DISCOVER_PAGE_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <FeedText>Discover</FeedText>
      <SmallText>See what's trending in your area</SmallText>
      <Grid>
        image
        {/* {data?.seeProfile?.photos.map((photo) => (
          <Photo key={photo.id} bg={photo.file}>
          </Photo> */}
        {/* ))} */}
        {/* { feedData?.seeFeed?.map((photo) => <Photo key={photo.id} {...photo} />} */}
      </Grid>
    </>
  );
};

export default Recs;
