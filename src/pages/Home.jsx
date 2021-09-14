import React, { useReducer, useRef, useEffect } from "react";
import PageContainer from "../components/templates/PageContainer.template";
import styled from "styled-components";
import GlobalContext from "../utils/state/GlobalContext";
import GlobalReducer, { initialState } from "../utils/state/GlobalReducer";
import Hero from "../components/organisms/Hero/Hero.organism";
import Section from "../components/molecules/Section/Section.molecule";
import About from "../components/organisms/About/About.organism";
import Background from "../components/organisms/Background/Background.organism";
import Projects from "../components/organisms/Projects/Projects.organism";
import Diplomas from "../components/organisms/Diplomas/Diplomas.organism";

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

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
        <ContentWrapper>
          <Section ref={state.aboutRef} title="About Me">
            <About />
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
        </ContentWrapper>
      </PageContainer>
    </GlobalContext.Provider>
  );
};

export default Home;
