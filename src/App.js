import "./App.scss";
import Header from "./Header";
import Banner from "./Banner";
import Projects from "./Projects";
import Contato from "./Contato";
import profilePic from "../src/assets/me-modified.png";
function App() {
  return (
    <div className="App">
      <Header className="" />
      <Banner img={profilePic} />
      <Projects  />
      <Contato />
    </div>
  );
}

export default App;
