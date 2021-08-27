import { logUserOut } from "../apollo";

const Home = () => (
  <div>
    <h1>Home</h1>
    <button onClick={() => logUserOut()}>Log Out</button>
  </div>
);

export default Home;
