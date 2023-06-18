import { logUserOut } from "../apollo";

function Home() {
  return (
    <div>
      this is home page
      <button onClick={() => logUserOut}>Log Out</button>
    </div>
  );
}
export default Home;
