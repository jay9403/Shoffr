import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  marginLeft: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Logo = styled(Typography)({
  fontWeight: 700,
  letterSpacing: 1,
  cursor: 'pointer',
});

function Navbar() {
  return (
    <AppBar position="fixed" color="primary">
      <Container maxWidth="lg">
        <StyledToolbar>
          <Logo variant="h5">SHOFFR</Logo>
          <Box>
            <NavButton>Home</NavButton>
            <NavButton>Services</NavButton>
            <NavButton>About</NavButton>
            <NavButton variant="contained" color="secondary">
              Book Now
            </NavButton>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;