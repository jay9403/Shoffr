import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import StarIcon from '@mui/icons-material/Star';
import SecurityIcon from '@mui/icons-material/Security';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.grey[50],
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  padding: theme.spacing(4),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const features = [
  {
    icon: <ElectricCarIcon fontSize="inherit" />,
    title: 'Luxury Electric Vehicles',
    description: 'Experience premium comfort in our fleet of high-end electric SUVs',
  },
  {
    icon: <StarIcon fontSize="inherit" />,
    title: 'Professional Service',
    description: 'Courteous, well-trained chauffeurs providing exceptional service',
  },
  {
    icon: <SecurityIcon fontSize="inherit" />,
    title: 'Reliable & Safe',
    description: 'Zero cancellations and priority on your safety and comfort',
  },
  {
    icon: <AttachMoneyIcon fontSize="inherit" />,
    title: 'Competitive Pricing',
    description: 'Premium service at prices comparable to regular cab services',
  },
];

function Features() {
  return (
    <FeatureSection>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Why Choose Shoffr
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Experience the difference of premium cab service
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard elevation={2}>
                <CardContent>
                  <IconWrapper>{feature.icon}</IconWrapper>
                  <Typography variant="h5" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </FeatureSection>
  );
}

export default Features;