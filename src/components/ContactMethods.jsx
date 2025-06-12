import { Button, Typography, Grid, TextField } from '@mui/material';
import { Email, Phone, Facebook, Twitter, Instagram } from '@mui/icons-material';

const ContactMethods = () => {
  return (
    <div
      style={{
        padding: '2rem',
        background: 'linear-gradient(to bottom, rgba(77, 61, 138, 0.1), rgba(77, 61, 138, 0.3))',
        textAlign: 'center', // Centrar contenido
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          color: 'var(--heading-color)',
          marginBottom: '20px',
        }}
      >
        Contáctanos
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 'bold',
              color: 'var(--secondary-color)',
              marginBottom: '10px',
            }}
          >
            Correo Electrónico
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'DM Sans, sans-serif',
              color: 'var(--text-color)',
            }}
          >
            contacto@ferplast.com.mx
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 'bold',
              color: 'var(--secondary-color)',
              marginBottom: '10px',
            }}
          >
            Teléfono
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'DM Sans, sans-serif',
              color: 'var(--text-color)',
            }}
          >
            +52 123 456 7890
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 'bold',
              color: 'var(--secondary-color)',
              marginBottom: '10px',
            }}
          >
            Síguenos
          </Typography>
          <div>
            <Button
              startIcon={<Facebook />}
              href="https://facebook.com/mexicanplastics"
              target="_blank"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                color: 'var(--primary-color)',
                textTransform: 'none',
                margin: '0 10px',
              }}
            >
              Facebook
            </Button>
            <Button
              startIcon={<Twitter />}
              href="https://twitter.com/mexicanplastics"
              target="_blank"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                color: 'var(--primary-color)',
                textTransform: 'none',
                margin: '0 10px',
              }}
            >
              Twitter
            </Button>
            <Button
              startIcon={<Instagram />}
              href="https://instagram.com/mexicanplastics"
              target="_blank"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                color: 'var(--primary-color)',
                textTransform: 'none',
                margin: '0 10px',
              }}
            >
              Instagram
            </Button>
          </div>
        </Grid>
      </Grid>
      <div style={{ marginTop: '40px' }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            color: 'var(--heading-color)',
            marginBottom: '20px',
          }}
        >
          ¿Quieres que nosotros te contactemos?
        </Typography>
        <TextField
          placeholder="Tu correo aquí"
          variant="outlined"
          sx={{
            width: '100%',
            maxWidth: '400px',
            backgroundColor: '#fff',
            borderRadius: '5px',
            marginBottom: '10px',
            boxShadow: '0 0 10px var(--primary-color)', // Add a glowing effect
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: 'var(--primary-color)', // Highlight border on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'var(--primary-color)', // Highlight border when focused
                boxShadow: '0 0 15px var(--primary-color)', // Add stronger glow when focused
              },
            },
          }}
        />
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'var(--text-color)',
          }}
        >
          Déjanos tu correo y un asesor de ventas se comunicará a la brevedad para atenderte.
        </Typography>
      </div>
    </div>
  );
};

export default ContactMethods;