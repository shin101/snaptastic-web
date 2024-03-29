import styled from "styled-components";
import { Link } from "react-router-dom";
import { BaseBox } from "../shared";
import React from "react";

interface BottomBoxProps {
  cta: string;
  link: string;
  linkText: string;
}

const StyledBottomBox = styled(BaseBox)`
  padding: 35px 40px 25px 40px;
  text-align: center;
  a {
    font-weight: 600;
    color: #0095f6;
    text-decoration: none;
    margin-left: 4px;
  }
`;

// cta - call to action
function BottomBox({ cta, link, linkText }: BottomBoxProps) {
  return (
    <StyledBottomBox>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </StyledBottomBox>
  );
}

export default BottomBox;
