import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const productLines = [
  {
    id: 1,
    name: 'Línea de Juguetes',
    description: 'Descubre nuestra línea de juguetes diseñados para estimular la creatividad y diversión de los más pequeños.',
    image: '/assets/productlines/toys.jpg',
  },
  {
    id: 2,
    name: 'Línea de Jardín',
    description: 'Productos ideales para embellecer y mantener tu jardín en perfectas condiciones.',
    image: '/assets/productlines/gardening.jpg',
  },
  {
    id: 3,
    name: 'Línea de Limpieza',
    description: 'Soluciones de limpieza eficientes para mantener tus espacios impecables.',
    image: '/assets/productlines/clean.jpg',
  },
  {
    id: 4,
    name: 'Línea de Industria Agrícola',
    description: 'Equipos y herramientas para apoyar las actividades agrícolas con la mejor calidad.',
    image: '/assets/productlines/industrial.jpg',
  },
];

const ProductLines = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // Track the selected card

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? productLines.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === productLines.length - 1 ? 0 : prevIndex + 1));
  };

  const handleCardTap = (id) => {
    setSelectedCard((prevSelected) => (prevSelected === id ? null : id)); // Toggle selection
  };

  const visibleProduct = productLines[currentIndex];

  return (
    <Box sx={{ textAlign: 'center', padding: '40px 20px' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          color: 'var(--heading-color)',
          marginBottom: '30px',
        }}
      >
        Nuestras Líneas de Productos
      </Typography>
      {/* Horizontal navigation for small screens */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' }, // Show only on small screens
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <ArrowBackIosIcon onClick={handlePrevious} sx={{ cursor: 'pointer', marginRight: '10px' }} />
        <Card
          onClick={() => handleCardTap(visibleProduct.id)} // Handle tap
          sx={{
            maxWidth: 300,
            margin: '0 auto',
            boxShadow: selectedCard === visibleProduct.id
              ? '0 6px 20px var(--primary-color)' // Highlight selected card
              : '0 6px 15px rgba(0, 0, 0, 0.15)',
            borderRadius: '15px',
            transition: 'transform 0.3s, box-shadow 0.3s',
            transform: selectedCard === visibleProduct.id ? 'scale(1.05)' : 'scale(1)',
            position: 'relative',
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={visibleProduct.image}
            alt={visibleProduct.name}
          />
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 'bold',
                color: 'var(--primary-color)',
                marginBottom: '10px',
              }}
            >
              {visibleProduct.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'var(--text-color)',
                lineHeight: 1.6,
              }}
            >
              {visibleProduct.description}
            </Typography>
          </CardContent>
          {selectedCard === visibleProduct.id && (
            <Button
              variant="contained"
              onClick={(e) => e.stopPropagation()} // Prevent deselection on button click
              sx={{
                marginTop: '10px',
                marginBottom: '20px',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 'bold',
                textTransform: 'none',
                alignSelf: 'center',
                '&:hover': {
                  backgroundColor: 'var(--secondary-color)',
                },
              }}
            >
              Ver Productos
            </Button>
          )}
        </Card>
        <ArrowForwardIosIcon onClick={handleNext} sx={{ cursor: 'pointer', marginLeft: '10px' }} />
      </Box>
      {/* Original layout for larger screens */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="stretch"
        sx={{ display: { xs: 'none', md: 'flex' } }} // Show only on larger screens
      >
        {productLines.map((line) => (
          <Grid item xs={12} sm={6} md={3} key={line.id} sx={{ display: 'flex' }}>
            <Card
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left',
                minHeight: '300px',
                maxWidth: '280px',
                margin: '0 auto',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
                transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effect
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly enlarge the card on hover
                  boxShadow: '0 6px 20px var(--primary-color)', // Add a glow effect with the primary color
                },
              }}
            >
              <CardMedia
                component="img"
                height="150"
                image={line.image}
                alt={line.name}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '20px',
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    color: 'var(--heading-color)',
                    textAlign: 'center',
                  }}
                >
                  {line.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'DM Sans, sans-serif',
                    color: 'var(--text-color)',
                    textAlign: 'left',
                    marginBottom: '20px',
                  }}
                >
                  {line.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    alignSelf: 'flex-end',
                    '&:hover': {
                      backgroundColor: 'var(--secondary-color)',
                    },
                  }}
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductLines;