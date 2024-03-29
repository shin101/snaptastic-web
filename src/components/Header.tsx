import styled from "styled-components";
import {
  faCameraRetro,
  faHome,
  faCompass,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar, logUserOut } from "../apollo";
import { NavLink } from "react-router-dom";
import routes from "../screens/routes";
import { useUser } from "../hooks/useUser";
import Avatar from "./Avatar";
import React from "react";

const SHeader = styled.header`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const Wrapper = styled.div`
  max-width: 930px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div``;

const Icon = styled.span`
  margin-left: 15px;
`;

const Button = styled.span`
  background-color: ${(props) => props.theme.accent};
  border-radius: 4px;
  padding: 4px 15px;
  color: white;
  font-weight: 600;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Header = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useUser();
  return (
    <SHeader>
      <Wrapper>
        <Column>
          <FontAwesomeIcon icon={faCameraRetro} size="2x" />
        </Column>
        <Column>
          {isLoggedIn ? (
            <IconsContainer>
              <Icon>
                <NavLink to={routes.home}>
                  <FontAwesomeIcon icon={faHome} size="lg" />
                </NavLink>
              </Icon>
              <Icon>
              <NavLink to={routes.recs}>
                <FontAwesomeIcon icon={faCompass} size="lg" />
                </NavLink>
              </Icon>
              <Icon>
                
                <NavLink to={`/users/${data?.me?.username}`}>
                  <Avatar
                    url={
                      data?.me?.avatar ||
                      "https://icon-library.com/images/default-profile-icon/default-profile-icon-6.jpg"
                    }
                  />
                </NavLink>
              </Icon>
              <NavLink to={routes.home}>
                <Icon>
                  <FontAwesomeIcon
                    icon={faSignOut}
                    size="lg"
                    onClick={logUserOut}
                    cursor={"pointer"}
                  />
                </Icon>
              </NavLink>
            </IconsContainer>
          ) : (
            <NavLink to={routes.home}>
              <Button>Login</Button>
            </NavLink>
          )}
        </Column>
      </Wrapper>
    </SHeader>
  );
};
