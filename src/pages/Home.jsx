import React, { useReducer, useRef, useEffect } from "react";
import PageContainer from "../components/templates/PageContainer.template";
import GlobalContext from "../utils/state/GlobalContext";
import GlobalReducer, { initialState } from "../utils/state/GlobalReducer";
import Hero from "../components/organisms/Hero.organism";
import Section from "../components/molecules/Section.molecule";
import About from "../components/organisms/About.organism";
import Background from "../components/organisms/Background.organism";
import Projects from "../components/organisms/Projects.organism";
import Diplomas from "../components/organisms/Diplomas.organism";
import Skills from "../components/organisms/Skills.organism";

const Home = () => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const aboutRef = useRef(null);
  const backgroundRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    dispatch({
      type: "SET_REFS",
      aboutRef: aboutRef,
      backgroundRef: backgroundRef,
      projectsRef: projectsRef,
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <PageContainer>
        <Hero />
        <div className="max-w-[1600px] mx-auto">
          <Section ref={state.aboutRef} title="About Me">
            <About />
          </Section>
          <Section title="Skills">
            <Skills />
          </Section>
          <Section ref={state.backgroundRef} title="Experience">
            <Background />
          </Section>
          <Section ref={state.projectsRef} title="Projects">
            <Projects />
          </Section>
          <Section title="Certificates">
            <Diplomas />
          </Section>
        </div>
      </PageContainer>
    </GlobalContext.Provider>
  );
};

export default Home;
