import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul style={{ margin: 0, padding: 0 }}>{dots}</ul>
      </div>
    ),
    dotsClass: 'slick-dots slick-thumb',
  };

  const images = [
    { src: `${import.meta.env.BASE_URL}assets/promo1.jpg`, alt: 'Promo 1' },
    { src: `${import.meta.env.BASE_URL}assets/promo2.jpg`, alt: 'Promo 2' },
    { src: `${import.meta.env.BASE_URL}assets/promo3.jpg`, alt: 'Promo 3' },
  ];

  return (
    <Container
      style={{
        width: '100%',
        padding: 0,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: '100%',
                height: 'auto',
                transition: 'transform 0.3s ease, opacity 0.3s ease', // Smooth transition for hover effect
                cursor: 'pointer', // Pointer cursor to indicate clickability
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'; // Slight zoom on hover
                e.currentTarget.style.opacity = '0.9'; // Slight opacity change
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; // Reset zoom
                e.currentTarget.style.opacity = '1'; // Reset opacity
              }}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default HeroSection;