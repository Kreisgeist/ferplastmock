import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const productLines = [
  {
    id: 1,
    name: 'Línea de Juguetes',
    description: 'Descubre nuestra línea de juguetes diseñados para estimular la creatividad y diversión de los más pequeños.',
    image: '/my-demo/assets/productlines/toys.jpg',
  },
  {
    id: 2,
    name: 'Línea de Jardín',
    description: 'Productos ideales para embellecer y mantener tu jardín en perfectas condiciones.',
    image: '/my-demo/assets/productlines/gardening.jpg',
  },
  {
    id: 3,
    name: 'Línea de Limpieza',
    description: 'Soluciones de limpieza eficientes para mantener tus espacios impecables.',
    image: '/my-demo/assets/productlines/clean.jpg',
  },
  {
    id: 4,
    name: 'Línea de Industria Agrícola',
    description: 'Equipos y herramientas para apoyar las actividades agrícolas con la mejor calidad.',
    image: '/my-demo/assets/productlines/industrial.jpg',
  },
];

const ProductLines = () => {
  return (
    <div style={{ padding: '40px 20px' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          color: 'var(--heading-color)',
          textAlign: 'center',
          marginBottom: '30px',
        }}
      >
        Nuestras Líneas de Productos
      </Typography>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="stretch" wrap="nowrap" sx={{ overflowX: 'auto' }}>
        {productLines.map((line) => (
          <Grid item xs={12} sm={6} md={3} key={line.id} sx={{ flex: '0 0 auto', display: 'flex' }}>
            <Card
              sx={{
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                width: '250px',
                height: '100%',
              }}
            >
              <img
                src={line.image}
                alt={line.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
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
                  endIcon={<ArrowForwardIcon />}
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
    </div>
  );
};

export default ProductLines;