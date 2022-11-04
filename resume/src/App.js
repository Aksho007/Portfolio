import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
function App() {
  return (
    <div >
      <NavBar/>
      <Home/>
      <About/>
      <Project/>
      <Skill/>
      <Contact/>

      <SocialLink/>

    </div>
  );
}

export default App;
