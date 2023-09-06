import styled from "styled-components";
import React from "react";

const StyledSeparator = styled.div`
margin: 20px 0px 30px 0px;
display: flex;
justify-content: center;
align-items: center; 
width: 100%;
div {
  width: 100%;
  height: 1px;
  background-color: rgb(219, 219, 219);
}
span {
  margin: 0px 10px;
  font-weight: 600;
  font-size: 12px;
  color: #8e8e8e;
}
`;

function Separator(){
  return (
    <StyledSeparator>
      <div></div>
      <span>OR</span>
      <div></div>
    </StyledSeparator>
  )
}

export default Separator