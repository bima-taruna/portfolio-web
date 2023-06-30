import React from "react";
import About from "../About/About";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
export interface MyRef {
  resultRef: any;
}

const Main: React.FC = () => {
  const goToAbout = React.useRef<HTMLDivElement>(null);
  const goToProject = React.useRef<HTMLDivElement>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <main>
      <Header resultRef={goToAbout} />
      <About ref={goToAbout} resultRef={goToProject} />
      <Project ref={goToProject} resultRef={goToProject} />
      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
