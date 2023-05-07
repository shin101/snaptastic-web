import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import routes from "./routes";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { FatLink } from "../components/shared";
import PageTitle from "../components/PageTitle";

const FacebookLogin = styled.div`
  color: #385285; 
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const SnaptasticText = styled(FatLink)`
  font-size: 16px;
  text-align;: center;
  margin-top: 10px;
`

function Login(){

  return (
    <AuthLayout> 
      <PageTitle title="Login" />
        <FormBox>
          <div>
            <FontAwesomeIcon icon={faCameraRetro} size="3x" />
          </div>
          <SnaptasticText>Snaptastic</SnaptasticText>
          <form>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button type="submit" value="Log in" />
          </form>
          <Separator /> 
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Log in with Facebook</span>
          </FacebookLogin>
        </FormBox>
        <BottomBox cta="Not a member?" linkText="Sign up" link={routes.signUp} />
       
    </AuthLayout>
  );
}

export default Login;