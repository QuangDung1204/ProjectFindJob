import React from 'react';
import HeroSection from '../../components/client/HeroSection';
import TopEmployers from '../../components/client/TopEmployers';
import LatestJobs from '../../components/client/LatestJobs';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: #fff;
`;

const Section = styled.section`
  position: relative;
  
  &:nth-child(odd) {
    background-color: var(--background-light);
  }
`;

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Section>
        <HeroSection />
      </Section>
      <Section>
        <TopEmployers />
      </Section>
      <Section>
        <LatestJobs />
      </Section>
    </HomeContainer>
  );
};

export default HomePage;