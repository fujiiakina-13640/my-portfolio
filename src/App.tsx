import Header from "./components/common/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills.tsx";
import Works from "./components/works/Works.tsx";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";

function App() {
  return (
    <>
      <Header />
      
      <Hero />
      <About />
      <Skills />
      <Works />  
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
