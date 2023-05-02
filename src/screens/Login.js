import { isLoggedInVar } from "../apollo";

function Login(){


  return (
    <>
      <h1>Login</h1>
      <button onClick={() => isLoggedInVar(true)}>Login</button>
    </>
  );
}

export default Login;