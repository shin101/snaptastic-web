import styled from "styled-components";

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
    </>
  );
}

export default InitialFeed;
