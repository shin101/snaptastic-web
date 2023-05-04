import {faFacebook,faFacebookF,faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";


const Container = styled.div`
  display:flex;
  height: 100vh;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

// setting the width of the WhiteBox to 100% ensures that the TopBox and BottomBox components will also have a width of 100% of their parent element's width
const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    input {
      width: 100%;
      border-radius: 3px;
      padding: 7px;
      background-color: #fafafa;
      border: 0.5px solid rgb(219, 219, 219);
      margin-top: 5px;
      box-sizing: border-box;
  
    &:last-child {
      border: none;
      margin-top: 12px;
      background-color: #0095f6;
      color: white;
      text-align: center;
      padding: 8px 0px;
      font-weight: 600;
      }
    }
  }
`;
// box-sizing : ensures elements are sized and positioned precisely without calculating extra space for padding + borders

const BottomBox = styled(WhiteBox)`
  padding: 35px 40px 25px 40px;
  text-align: center;
  a {
    font-weight: 600;
    color: #0095f6;
  }
`;

// max-width makes sure that any content inside wrapper is limited to 350px max
const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const Separator = styled.div`
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
    color: #8e8e8e;
  }

`;

const FacebookLogin = styled.div`
  color: #385285; 
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;



function Login(){

  return (
    <Container>  
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faCameraRetro} size="3x" />
          </div>
          <h1>Snaptastic</h1>
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <input type="submit" value="Log in" />
          </form>
          <Separator>
            <div></div>
            <span>OR</span>
            <div></div>
          </Separator>
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Log in with Facebook</span>
          </FacebookLogin>
        </TopBox>
        <BottomBox>
          <span>Not a member?</span> <a href="#">Sign up</a>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}

export default Login;