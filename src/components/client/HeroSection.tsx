import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Input, Button, Select } from 'antd';
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const wave = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const HeroContainer = styled.div`
  background: linear-gradient(135deg, #d4202c 0%, #8b0000 100%);
  min-height: 600px;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 10% 20%, rgba(255,215,0,0.1) 0%, transparent 20%),
      radial-gradient(circle at 90% 80%, rgba(255,215,0,0.1) 0%, transparent 20%),
      linear-gradient(45deg, transparent 45%, rgba(255,215,0,0.1) 50%, transparent 55%),
      linear-gradient(-45deg, transparent 45%, rgba(255,215,0,0.1) 50%, transparent 55%);
    background-size: 100% 100%, 100% 100%, 60px 60px, 60px 60px;
    opacity: 0.6;
    animation: ${shine} 20s linear infinite;
  }

  &::after {
    content: '★';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 40px;
    color: #ffd700;
    text-shadow: 0 0 10px rgba(255,215,0,0.5);
    animation: ${wave} 3s ease-in-out infinite;
  }
`;

const PatternOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(45deg, rgba(255,215,0,0.1) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255,215,0,0.1) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(255,215,0,0.1) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(255,215,0,0.1) 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  opacity: 0.3;
`;

const GradientBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, 
    #ffd700 0%, 
    rgba(255,215,0,0.5) 25%, 
    #ffd700 50%, 
    rgba(255,215,0,0.5) 75%, 
    #ffd700 100%
  );
  background-size: 200% auto;
  animation: ${shine} 3s linear infinite;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease-out;
`;

const RightSection = styled.div`
  flex: 1;
  animation: ${float} 6s ease-in-out infinite;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

  span {
    color: #ffd700;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  color: rgba(255,255,255,0.9);
  font-size: 18px;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const SearchBox = styled.div`
  background: rgba(255,255,255,0.95);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 0 auto;
`;

const SearchForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SearchRow = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const StyledInput = styled(Input)`
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
`;

const StyledSelect = styled(Select)`
  .ant-select-selector {
    height: 50px !important;
    padding: 8px 16px !important;
    border-radius: 8px !important;
  }

  .ant-select-selection-item {
    line-height: 34px !important;
  }
`;

const SearchButton = styled(Button)`
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  border-radius: 8px;
  background: #c41e3a;
  border-color: #c41e3a;

  &:hover {
    background: #a01830;
    border-color: #a01830;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 40px;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
  
  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const StatItem = styled.div`
  color: white;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
  animation-delay: 0.5s;
  animation-fill-mode: both;
`;

const StatNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  opacity: 0.9;
`;

const jobTypes = [
  { value: 'fulltime', label: 'Toàn thời gian' },
  { value: 'parttime', label: 'Bán thời gian' },
  { value: 'remote', label: 'Từ xa' },
  { value: 'contract', label: 'Hợp đồng' }
];

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <PatternOverlay />
      <Content>
        <LeftSection>
          <Title>
            VIỆC LÀM IT <br />
            <span>CHÀO MỪNG ĐẠI LỄ</span>
          </Title>
          <Subtitle>
            Khám phá hàng ngàn cơ hội việc làm IT hấp dẫn từ các công ty hàng đầu
          </Subtitle>
          <SearchBox>
            <SearchForm>
              <SearchRow>
                <StyledInput 
                  placeholder="Nhập kỹ năng, chức danh..." 
                  prefix={<SearchOutlined />} 
                  size="large"
                />
                <StyledInput 
                  placeholder="Địa điểm" 
                  prefix={<EnvironmentOutlined />}
                  size="large" 
                />
              </SearchRow>
              <SearchRow>
                <StyledSelect
                  mode="multiple"
                  placeholder="Chọn loại công việc"
                  style={{ width: '100%' }}
                  options={jobTypes}
                  size="large"
                />
              </SearchRow>
              <SearchButton type="primary" icon={<SearchOutlined />}>
                Tìm Kiếm
              </SearchButton>
            </SearchForm>
          </SearchBox>
          <Stats>
            <StatItem>
              <StatNumber>1,234+</StatNumber>
              <StatLabel>Việc làm đang tuyển</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>890+</StatNumber>
              <StatLabel>Công ty IT</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>10K+</StatNumber>
              <StatLabel>Ứng viên thành công</StatLabel>
            </StatItem>
          </Stats>
        </LeftSection>
        <RightSection>
          {/* Placeholder for illustration */}
        </RightSection>
      </Content>
      <GradientBorder />
    </HeroContainer>
  );
};

export default HeroSection; 