import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/images/luxury-car.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  paddingTop: theme.spacing(8),
}));

const HeroContent = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.2rem',
}));

function Hero() {
  return (
    <HeroSection>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <HeroContent>
              <Typography variant="h1" gutterBottom>
                The Gold Standard of Rides
              </Typography>
              <Typography variant="h5" paragraph>
                Experience luxury electric vehicles with professional chauffeurs at competitive prices.
              </Typography>
              <CTAButton
                variant="contained"
                color="secondary"
                size="large"
              >
                Book Your Luxury Ride
              </CTAButton>
            </HeroContent>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
}

export default Hero;