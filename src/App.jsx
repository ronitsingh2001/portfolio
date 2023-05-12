import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import "./index.css";
import "../src/components/prefix_style.css";
// import "./components/Style.css";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
