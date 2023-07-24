import { Header } from "./Header";
import styled from "styled-components";

const Content = styled.main`
  margin: 0 auto;
  margin-top: 100px;
  max-width: 930px;
  width: 100%;
`;

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};
