import React, { useState } from 'react';
import { Box, Typography, Avatar, Grid, Paper, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  {
    id: 1,
    name: 'Juan Pérez',
    photo: '/my-demo/assets/customers/customer1.jpg',
    summary: '"Excelente calidad y servicio"',
    description: 'Ferplast siempre me ha ofrecido productos de excelente calidad y un servicio al cliente inigualable. ¡Recomiendo ampliamente esta empresa! Además, su atención personalizada y rapidez en las entregas me han dejado completamente satisfecho. Es un lugar donde siempre encuentro lo que necesito.'
  },
  {
    id: 2,
    name: 'María López',
    photo: '/my-demo/assets/customers/customer2.jpg',
    summary: '"Confianza y profesionalismo"',
    description: 'Desde que descubrí Ferplast, no he vuelto a buscar en otro lugar. Su profesionalismo y atención al detalle son incomparables. Siempre me siento segura comprando aquí, sabiendo que recibiré productos de alta calidad y un servicio excepcional.'
  },
  {
    id: 3,
    name: 'Carlos García',
    photo: '/my-demo/assets/customers/customer3.jpg',
    summary: '"Variedad y precios justos"',
    description: 'Me encanta la variedad de productos que ofrecen y los precios son muy competitivos. Ferplast es mi tienda de confianza. Además, su equipo siempre está dispuesto a ayudarme a encontrar exactamente lo que necesito, lo que hace que mi experiencia de compra sea aún mejor.'
  }
];

const CustomerTestimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const selectedTestimonial = testimonials[selectedIndex];

  return (
    <Box sx={{ textAlign: 'center', padding: '60px 30px' }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          color: 'var(--heading-color)',
          marginBottom: '40px',
        }}
      >
        Nuestros clientes
      </Typography>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' }, // Show column design on small screens
          flexDirection: 'row', // Align arrows and photo in a row
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        <IconButton onClick={handlePrevious} sx={{ marginRight: '10px' }}>
          <ArrowBackIosIcon />
        </IconButton>
        <Avatar
          src={selectedTestimonial.photo}
          alt={selectedTestimonial.name}
          sx={{
            width: 150,
            height: 150,
            border: '4px solid #EB9F32',
          }}
        />
        <IconButton onClick={handleNext} sx={{ marginLeft: '10px' }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        sx={{ display: { xs: 'none', md: 'flex' }, marginBottom: '50px' }} // Hide grid on small screens
      >
        {testimonials.map((testimonial, index) => (
          <Grid item key={testimonial.id}>
            <Avatar
              src={testimonial.photo}
              alt={testimonial.name}
              sx={{
                width: 150,
                height: 150,
                cursor: 'pointer',
                border: selectedIndex === index ? '4px solid #EB9F32' : '4px solid transparent',
                transition: 'border 0.3s',
              }}
              onClick={() => setSelectedIndex(index)}
            />
          </Grid>
        ))}
      </Grid>
      <Paper
        elevation={3}
        sx={{
          padding: '30px',
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            color: 'var(--heading-color)',
          }}
        >
          {selectedTestimonial.name}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            color: 'var(--primary-color)',
          }}
        >
          {selectedTestimonial.summary}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'var(--text-color)',
            lineHeight: 1.8,
          }}
        >
          {selectedTestimonial.description}
        </Typography>
      </Paper>
    </Box>
  );
};

export default CustomerTestimonials;
