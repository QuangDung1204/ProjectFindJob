import React from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import awsLogo from '../../assets/images/company-logos/aws-logo.svg';

const Container = styled.div`
  padding: 40px 20px;
  background-color: white;
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

const JobGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JobCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border-color: #c41e3a;
  }
`;

const CompanyLogo = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const JobInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const JobTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CompanyName = styled.div`
  color: #666;
  margin-bottom: 12px;
  font-size: 14px;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;
  align-items: center;
`;

const Salary = styled.span`
  color: #c41e3a;
  font-weight: bold;
  font-size: 15px;
  background: rgba(196, 30, 58, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
`;

const Location = styled.span`
  color: #666;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '📍';
  }
`;

const PostTime = styled.span`
  color: #999;
  font-size: 13px;
  margin-left: auto;
`;

const StyledTag = styled(Tag)`
  border-radius: 4px;
  padding: 4px 8px;
  margin: 0;
  border: none;
  background: rgba(196, 30, 58, 0.1);
  color: #c41e3a;
`;

const jobs = [
  {
    id: 1,
    title: 'Manual Tester - Kỹ Sư CNTT',
    company: 'TEST1 Inc',
    logo: awsLogo,
    salary: 'Up To từ $1,000',
    location: 'Hà Nội',
    timeAgo: '11 giờ',
    tags: ['Testing', 'QA']
  },
  {
    id: 2,
    title: 'eCommerce Project Manager',
    company: 'Tiki Corp.',
    logo: awsLogo,
    salary: 'Up To từ $20-250',
    location: 'TP.HCM',
    timeAgo: '4 days',
    tags: ['Management', 'E-commerce']
  },
  {
    id: 3,
    title: 'Technical Project Manager',
    company: 'FPT Ltd.',
    logo: awsLogo,
    salary: 'Up To từ $1,500-$2,000',
    location: 'Hồ Chí Minh',
    timeAgo: '2 days',
    tags: ['Technical', 'Management']
  },
  {
    id: 4,
    title: 'PyBridge - Bridge Engineer',
    company: 'Bridge Human',
    logo: awsLogo,
    salary: 'Up To từ $3,000',
    location: 'Đà Nẵng',
    timeAgo: '3 days',
    tags: ['Python', 'Engineering']
  }
];

const LatestJobs: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>
          CÔNG VIỆC MỚI NHẤT
          <ViewAllLink href="/jobs">Xem Tất Cả</ViewAllLink>
        </Title>
        <JobGrid>
          {jobs.map(job => (
            <JobCard key={job.id}>
              <CompanyLogo>
                <img src={job.logo} alt={job.company} />
              </CompanyLogo>
              <JobInfo>
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>{job.company}</CompanyName>
                <JobMeta>
                  <Salary>{job.salary}</Salary>
                  <Location>{job.location}</Location>
                </JobMeta>
                <JobMeta>
                  {job.tags.map((tag, index) => (
                    <StyledTag key={index}>{tag}</StyledTag>
                  ))}
                  <PostTime>{job.timeAgo}</PostTime>
                </JobMeta>
              </JobInfo>
            </JobCard>
          ))}
        </JobGrid>
      </ContentWrapper>
    </Container>
  );
};

export default LatestJobs; 