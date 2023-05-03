import styled from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo"; 

const Title = styled.h1`
color:  ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
background-color: ${(props) => props.theme.bgColor};
`;


function Login(){

  return (
    <Container>  
      <Title>Login</Title>
      <button onClick={() => isLoggedInVar(true)}>Login</button>   
      <button onClick={() => darkModeVar(true)}>Enable Dark Mode</button>
      <button onClick={() => darkModeVar(false)}>Disable Dark Mode</button>
    </Container>
  );
}

export default Login;