import Header from "../components/common/Header";
import Works from "../components/works/Works.tsx";
import Hero from "../components/hero/Hero.tsx";
import About from "../components/about/About.tsx";
import Skills from "../components/skills/Skills.tsx";
import Contact from "../components/contact/Contact.tsx";
import Footer from '../components/common/Footer.tsx';
import styles from "./Home.module.css";


export default function Home() {
  return (
    <section className={styles.page}>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />
    </section>
  );
};
