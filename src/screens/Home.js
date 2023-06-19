import { useNavigate } from "react-router-dom";
import { LogUserOut } from "../apollo";


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      this is home page
      <button onClick={() => LogUserOut(navigate)}>Log Out</button>
    </div>
  );
}
export default Home;
