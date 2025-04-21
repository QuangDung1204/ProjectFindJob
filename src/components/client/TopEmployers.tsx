import React from 'react';
import styled from 'styled-components';
import awsLogo from '../../assets/images/company-logos/aws-logo.svg';

const Container = styled.div`
  padding: 40px 20px;
  background-color: #fff6e5;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #c41e3a 0%, #ffd700 100%);
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #c41e3a;
  font-size: 28px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
`;

const ViewAllLink = styled.a`
  color: #c41e3a;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    text-decoration: underline;
  }
  
  &::after {
    content: '→';
    font-size: 20px;
  }
`;

const EmployerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const EmployerCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    border-color: #c41e3a;
  }

  img {
    max-width: 120px;
    height: 60px;
    object-fit: contain;
    margin-bottom: 15px;
  }

  h3 {
    margin: 0;
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }
`;

const employers = [
  { id: 1, name: 'Amazon Web Services', logo: awsLogo },
  { id: 2, name: 'Apple Inc.', logo: awsLogo }, // Temporarily using AWS logo as placeholder
  { id: 3, name: 'Google LLC', logo: awsLogo }, // Temporarily using AWS logo as placeholder
  { id: 4, name: 'Lazada Việt Nam', logo: awsLogo }, // Temporarily using AWS logo as placeholder
];

const TopEmployers: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>
          NHÀ TUYỂN DỤNG HÀNG ĐẦU
          <ViewAllLink href="/employers">Xem Tất Cả</ViewAllLink>
        </Title>
        <EmployerGrid>
          {employers.map(employer => (
            <EmployerCard key={employer.id}>
              <img src={employer.logo} alt={employer.name} />
              <h3>{employer.name}</h3>
            </EmployerCard>
          ))}
        </EmployerGrid>
      </ContentWrapper>
    </Container>
  );
};

export default TopEmployers; 