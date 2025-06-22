import React, { useState } from 'react';
import { Box, Container, Typography, Paper, TextField, Button, Grid, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const BookingContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.grey[100],
}));

const BookingPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

const tripTypes = [
  {
    value: 'airport',
    label: 'Airport Transfer',
  },
  {
    value: 'city',
    label: 'City Ride',
  },
  {
    value: 'rental',
    label: 'Hourly Rental',
  },
];

const carTypes = [
  {
    value: 'luxury_suv',
    label: 'Luxury SUV',
  },
  {
    value: 'premium_sedan',
    label: 'Premium Sedan',
  },
];

function BookingSection() {
  const [bookingData, setBookingData] = useState({
    tripType: '',
    carType: '',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle booking submission
    console.log('Booking Data:', bookingData);
  };

  return (
    <BookingContainer>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Book Your Ride
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
          Experience luxury travel at competitive prices
        </Typography>
        
        <BookingPaper elevation={3}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Trip Type"
                  name="tripType"
                  value={bookingData.tripType}
                  onChange={handleChange}
                  required
                >
                  {tripTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value === 'airport' ? <AirportShuttleIcon sx={{ mr: 1 }} /> : <DirectionsCarIcon sx={{ mr: 1 }} />}
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Car Type"
                  name="carType"
                  value={bookingData.carType}
                  onChange={handleChange}
                  required
                >
                  {carTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <DirectionsCarIcon sx={{ mr: 1 }} />
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Pickup Location"
                  name="pickup"
                  value={bookingData.pickup}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Drop-off Location"
                  name="dropoff"
                  value={bookingData.dropoff}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="time"
                  label="Time"
                  name="time"
                  value={bookingData.time}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </form>
        </BookingPaper>
      </Container>
    </BookingContainer>
  );
}

export default BookingSection;