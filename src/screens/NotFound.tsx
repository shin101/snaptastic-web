import React from "react";
import routes from "./routes";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  const NormalText = styled.text``;
  const NameButton = styled.button`
    background-color: rgb(201, 96, 93);
    border-radius: 10%;
    border: none;
    color: white;
    width: 60px;
    height: 40px;
    font-weight: 600;
  `;

  return (
    <>
      <img
        src="https://github.com/shin101/snaptastic-web/blob/main/public/images/404.png"
        alt="404 warning"
      ></img>
      <NameButton>Luke</NameButton>
      <NameButton>James</NameButton>
      <NameButton>Martin</NameButton>
      <NameButton>Chris</NameButton>
      <NormalText>
        In a forgiving mood? Let them all keep their jobs.
      </NormalText>
      <p>
        <NavLink to={routes.home}>Return to the homepage</NavLink>
        Photo credit : Tumblr
      </p>
    </>
  );
}

export default NotFound;
