import styled from "styled-components";
import React from "react";

const FeedText = styled.div`
  text-align: center;
  font-size: 20px;
`;
const SuggestedText = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
`;

function InitialFeed() {
  return (
    <>
      <FeedText>Your feed is empty!</FeedText>
      <SuggestedText>
        Check out some of our most followed influencers :{" "}
      </SuggestedText>
    </>
  );
}

export default InitialFeed;
