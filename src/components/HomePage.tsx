import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Card, CardContent, CardMedia, AppBar, Toolbar } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

// Styled components
const HeroSection = styled(Box)(({ theme }: { theme: Theme }) => ({
  background: '#C41E3A',
  color: '#FFE5B4',
  padding: theme.spacing(4, 0),
  backgroundImage: 'radial-gradient(circle at 100%, #B31B34 0%, #C41E3A 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '5%',
    bottom: 0,
    width: '30%',
    height: '100%',
    backgroundImage: 'url(/tank.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right bottom',
    zIndex: 1
  }
}));

const SearchBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  background: 'rgba(255, 229, 180, 0.1)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  position: 'relative',
  zIndex: 2
}));

const TopEmployer = styled(Card)(({ theme }: { theme: Theme }) => ({
  background: '#FFF',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const JobCard = styled(Card)(({ theme }: { theme: Theme }) => ({
  marginBottom: theme.spacing(2),
  transition: 'transform 0.2s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateX(5px)',
  }
}));

const NavButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  color: '#FFE5B4',
  '&:hover': {
    backgroundColor: 'rgba(255, 229, 180, 0.1)',
  }
}));

// Mock data
const topEmployers = [
  { id: 1, name: 'Amazon Inc.', logo: '/aws-logo.png' },
  { id: 2, name: 'Apple Inc.', logo: '/apple-logo.png' },
  { id: 3, name: 'Google LLC', logo: '/google-logo.png' },
  { id: 4, name: 'Lazada Việt Nam', logo: '/lazada-logo.png' },
];

const latestJobs = [
  {
    id: 1,
    title: 'Manual Tester - Kỹ Sư CNTT',
    company: 'TEST1 Inc',
    salary: 'Up To từ $1,000',
    logo: '/test1-logo.png',
    timeAgo: '11h trước',
    location: 'Hồ Chí Minh'
  },
  {
    id: 2,
    title: 'eCommerce Project Manager',
    company: 'TiKi Corp',
    salary: 'Up To từ $20-2500',
    logo: '/tiki-logo.png',
    timeAgo: '4 days',
    location: 'Hà Nội'
  },
  {
    id: 3,
    title: 'Technical Project Manager',
    company: 'FPT Ltd.',
    salary: 'Up To từ $1,500-$2,000',
    logo: '/fpt-logo.png',
    timeAgo: '3 days',
    location: 'Hồ Chí Minh'
  },
  {
    id: 4,
    title: 'PyBridge - Bridge Engineer (English)',
    company: 'Bridge Human',
    salary: 'Up To từ $3,000',
    logo: '/bridge-logo.png',
    timeAgo: '3 days',
    location: 'Đà Nẵng'
  },
  {
    id: 5,
    title: 'PyBridge - Bridge Engineer',
    company: 'Bridge Human',
    salary: 'Up To từ $3,000',
    logo: '/bridge-logo.png',
    timeAgo: '7 days',
    location: 'Đà Nẵng'
  },
  {
    id: 6,
    title: 'IT communicator/Bridge Engineer (Japanese)',
    company: 'Bridge Human',
    salary: 'Up To từ $2,000',
    logo: '/bridge-logo.png',
    timeAgo: '7 days',
    location: 'Hồ Chí Minh'
  }
];

const HomePage: React.FC = () => {
  return (
    <Box>
      {/* Navigation */}
      <AppBar position="static" sx={{ backgroundColor: '#C41E3A' }}>
        <Container>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="/star-logo.png" alt="Logo" style={{ width: 40, marginRight: 16 }} />
              <Typography variant="h6" sx={{ color: '#FFE5B4' }}>
                VIỆC LÀM TỰ DO
              </Typography>
            </Box>
            <Box>
              <NavButton>TRANG CHỦ</NavButton>
              <NavButton>VIỆC LÀM IT</NavButton>
              <NavButton>TOP CÔNG TY IT</NavButton>
              <NavButton variant="outlined" sx={{ borderColor: '#FFE5B4' }}>
                ĐĂNG NHẬP
              </NavButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <HeroSection>
        <Container>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold',
              color: '#FFE5B4',
              position: 'relative',
              zIndex: 2
            }}
          >
            VIỆC LÀM CHO NGÀY THỐNG NHẤT 30/4
          </Typography>
          
          <SearchBox>
            <Grid container spacing={2}>
              {/* @ts-ignore */}
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  placeholder="Tìm kiếm việc làm..."
                  variant="outlined"
                  sx={{ 
                    bgcolor: '#FFE5B4',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                      },
                    },
                  }}
                />
              </Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  placeholder="Địa điểm..."
                  variant="outlined"
                  sx={{ 
                    bgcolor: '#FFE5B4',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                      },
                    },
                  }}
                />
              </Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={2}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    height: '56px',
                    bgcolor: '#FFE5B4',
                    color: '#C41E3A',
                    '&:hover': {
                      bgcolor: '#FFD700',
                    }
                  }}
                >
                  Tìm kiếm
                </Button>
              </Grid>
            </Grid>
          </SearchBox>
        </Container>
      </HeroSection>

      <Container sx={{ mt: 4 }}>
        {/* Top Employers */}
        <Box mb={4}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5" color="error">
              NHÀ TUYỂN DỤNG HÀNG ĐẦU
            </Typography>
            <Button color="error">Xem Tất Cả</Button>
          </Box>
          <Grid container spacing={3}>
            {topEmployers.map((employer) => (
              /* @ts-ignore */
              <Grid item xs={12} sm={6} md={3} key={employer.id}>
                <TopEmployer>
                  <CardMedia
                    component="img"
                    height="140"
                    image={employer.logo}
                    alt={employer.name}
                    sx={{ objectFit: 'contain', p: 2 }}
                  />
                  <Typography variant="subtitle1" align="center">
                    {employer.name}
                  </Typography>
                </TopEmployer>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Latest Jobs */}
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5" color="error">
              CÔNG VIỆC MỚI NHẤT
            </Typography>
            <Button color="error">Xem Tất Cả</Button>
          </Box>
          <Grid container spacing={2}>
            {latestJobs.map((job) => (
              /* @ts-ignore */
              <Grid item xs={12} sm={6} key={job.id}>
                <JobCard>
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 60, height: 60, objectFit: 'contain', mr: 2 }}
                      image={job.logo}
                      alt={job.company}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                        {job.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {job.company}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                        <Typography variant="body2" color="error">
                          {job.salary}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {job.location}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{ ml: 2 }}
                      color="text.secondary"
                    >
                      {job.timeAgo}
                    </Typography>
                  </CardContent>
                </JobCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage; 