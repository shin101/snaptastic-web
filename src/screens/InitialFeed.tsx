import styled from "styled-components";
import React from "react";

const FeedText = styled.div`
  margin-top: 160px;
  text-align: center;
  font-size: 30px;
`;
const SuggestedText = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 17px;
  margin-bottom: 70px;
`;

function InitialFeed() {
  return (
    <>
      <FeedText>Your feed is empty!</FeedText>
      <SuggestedText>
        Start following users or check out some of our trending posts :{" "}
      </SuggestedText>

    </>
  );
}

export default InitialFeed;
