import PageContainer from "../components/templates/PageContainer.template";
import styled from "styled-components";
import Hero from '../components/organisms/Hero/Hero.organism';
import Section from '../components/molecules/Section/Section.molecule';
import About from '../components/organisms/About/About.organism';
import Background from '../components/organisms/Background/Background.organism';

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;


const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <ContentWrapper>
        <Section title="About Me">
          <About />
        </Section>
        <Section title="Background">
          <Background />
        </Section>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Home;
