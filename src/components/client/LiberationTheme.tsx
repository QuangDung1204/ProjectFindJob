import React from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import tankImage from '../../assets/images/tank-silhouette.svg';

const ThemeContainer = styled.div`
  background-color: #c41e3a;
  min-height: 500px;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
  background-image: radial-gradient(circle at center, transparent 0%, #a01830 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  color: #ffd700;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  text-transform: uppercase;
  line-height: 1.2;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  max-width: 800px;
  
  .ant-input {
    background: rgba(255,255,255,0.95);
    border: none;
    height: 50px;
    border-radius: 8px;
    font-size: 16px;
    padding: 0 20px;
    
    &::placeholder {
      color: rgba(0,0,0,0.45);
    }
    
    &:focus {
      box-shadow: 0 0 0 2px rgba(255,215,0,0.2);
    }
  }
  
  .ant-btn {
    height: 50px;
    min-width: 120px;
    font-size: 16px;
    background: #ffd700;
    border: none;
    color: #c41e3a;
    font-weight: bold;
    border-radius: 8px;
    
    &:hover {
      background: #ffed4a;
      color: #c41e3a;
    }
  }
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  background-image: url(${tankImage});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
  opacity: 0.15;
  mix-blend-mode: soft-light;
`;

const StarIcon = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  color: #ffd700;
  
  &:before {
    content: '★';
    font-size: 40px;
    line-height: 1;
  }
`;

const LiberationTheme: React.FC = () => {
  return (
    <ThemeContainer>
      <StarIcon />
      <ContentWrapper>
        <Title>VIỆC LÀM CHO NGÀY THỐNG NHẤT 30/4</Title>
        <SearchContainer>
          <Input placeholder="Tìm kiếm việc làm..." style={{ flex: 2 }} />
          <Input placeholder="Địa điểm..." style={{ flex: 1 }} />
          <Button type="primary">Tìm kiếm</Button>
        </SearchContainer>
      </ContentWrapper>
      <BackgroundDecoration />
    </ThemeContainer>
  );
};

export default LiberationTheme; 