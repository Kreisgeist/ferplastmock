import { Button, Typography, Container } from '@mui/material';
import logo from '../assets/logo.png';

const HeroSection = () => {
  return (
    <Container 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        textAlign: 'center' 
      }}
    >
      <img src={logo} alt="Company Logo" style={{ width: '150px', marginBottom: '20px' }} />
      <Typography variant="h2" component="h1" gutterBottom>
        ¡Bienvenido a Ferplast!
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Your trusted partner in high-quality plastic solutions.
      </Typography>
      <Button variant="contained" color="primary" href="#product-catalog">
        Explore Our Products
      </Button>
    </Container>
  );
};

export default HeroSection;