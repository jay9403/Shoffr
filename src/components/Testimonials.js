import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: '#fff',
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  position: 'relative',
  overflow: 'visible',
}));

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  position: 'absolute',
  top: -20,
  left: 20,
  fontSize: '4rem',
  color: theme.palette.primary.main,
  opacity: 0.1,
}));

const testimonials = [
  {
    name: 'Rajesh Sawhney',
    avatar: '/images/avatar1.jpg',
    role: 'Business Traveler',
    comment: 'Loved the experience! Clean, on time, luxury Electric Car driven by well-mannered driver. Priced at the same level as Uber Premium.',
  },
  {
    name: 'Chitra Singh',
    avatar: '/images/avatar2.jpg',
    role: 'Regular Customer',
    comment: 'The cab experience to the airport has been the best I\'ve had in years! Spacious SUV, working AC, courteous driver. Excellent driving, affordable cabs.',
  },
  {
    name: 'Piyu Dutta',
    avatar: '/images/avatar3.jpg',
    role: 'First-time User',
    comment: 'So pleased to have found Shoffr. Always missed a premium service like this in Bangalore. Makes a huge difference when you have had a long distance travel.',
  },
];

function Testimonials() {
  return (
    <TestimonialSection>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          What Our Customers Say
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
          Don't just take our word for it
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <TestimonialCard elevation={2}>
                <QuoteIcon />
                <CardContent>
                  <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    {testimonial.comment}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={testimonial.avatar}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </TestimonialSection>
  );
}

export default Testimonials;