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

      <NavLink to="https://snaptastic-kendra.netlify.app/users/aapplee">
        <img src="https://static.tvtropes.org/pmwiki/pub/images/99b8ccdd_d8c4_4933_a830_3c60c818c398.png" />
      </NavLink>
    </>
  );
}

export default InitialFeed;
