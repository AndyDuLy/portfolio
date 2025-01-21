import "./App.css";
import About from "./components/organisms/about";
import Landing from "./components/organisms/landing";
import Navbar from "./components/organisms/navbar";
import Projects from "./components/organisms/projects";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Landing />
      <Projects />
    </>
  );
}

export default App;
