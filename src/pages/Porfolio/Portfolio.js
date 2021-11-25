import Home from "../../components/Home/Home"
import About from "../../components/About/About";
import Slogan from "../../components/Slogan/Slogan";
import Services from "../../components/Services/Services"
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";

function Portfolio() {
  return (
    <div className="Portfolio">
      <Home></Home>
      <About></About>
      <Slogan></Slogan>
      <Services></Services>
      <Experience></Experience>
      <Projects></Projects>

    </div>
  );
}

export default Portfolio;