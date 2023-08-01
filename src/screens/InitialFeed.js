import styled from "styled-components";
import { NavLink } from "react-router-dom";

function InitialFeed() {
  const FeedText = styled.div`
    text-align: center;
    font-size: 20px;
  `;
  const SuggestedText = styled.div`
    margin-top: 20px;
    text-align: center;
  `;

  return (
    <>
      <FeedText>Your feed is empty!</FeedText>
      <SuggestedText>
        Check out some of our most followed influencers :{" "}
      </SuggestedText>
      Thank you for your patience, this page will be UPDATED SOON!
    </>
  );
}

export default InitialFeed;
