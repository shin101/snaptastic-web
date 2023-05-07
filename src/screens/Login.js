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
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm(); 
  const onSubmitValid = (data) => {
    console.log(data);
  }
  const onSubmitInvalid = (data) => {
    console.log(data);
  }

  return (
    <AuthLayout> 
      <PageTitle title="Login" />
        <FormBox>
          <div>
            <FontAwesomeIcon icon={faCameraRetro} size="3x" />
          </div>
          <SnaptasticText>Snaptastic</SnaptasticText>
          {/* no need to do prevent default when you use react form handle submit */}
          <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
            {/* ref is equivalent to creating onChange, creating a state, etc */}
            <Input 
              {...register('username', { 
                required: "username is required",
                minLength: {value: 5, message: "username should be at least 5 characters long"},
              })}
              placeholder="Username"
              type="text" 
            />
            <Input 
              {...register('password', { 
                required: "password is required",
                minLength: {value: 5, message: "password should be at least 5 characters long"},
              })}
              type="password" 
              placeholder="Password" 
            />
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