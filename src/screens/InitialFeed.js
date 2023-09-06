import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
      (Content not loading below? Might be because my DB has reached its limit
      for this month..)
    </>
  );
}

export default InitialFeed;
