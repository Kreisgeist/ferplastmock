import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  minWidth: 340,
  maxWidth: '90vw',
};

const FloatingLogin = ({ open, onClose, onRegister }) => {
  const [remember, setRemember] = useState(false);

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="login-modal-title">
      <Box sx={style}>
        <Typography id="login-modal-title" variant="h5" fontWeight={700} mb={1}>
          Inicia Sesión
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          ¡Al iniciar sesión, obten acceso a beneficios exclusivos!
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Correo electrónico"
            type="email"
            fullWidth
            autoFocus
            variant="outlined"
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            variant="outlined"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                color="primary"
              />
            }
            label="Recuérdame"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              backgroundColor: 'var(--primary-color)',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#2a1e5c',
              },
            }}
          >
            Inicia Sesión
          </Button>
        </Stack>
        <Divider sx={{ my: 3 }}>o</Divider>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              borderColor: '#DB4437',
              color: '#DB4437',
              textTransform: 'none', // <-- Evita mayúsculas automáticas
              '&:hover': {
                backgroundColor: '#DB4437',
                color: '#fff',
                borderColor: '#DB4437',
              },
            }}
            fullWidth
          >
            Acceder con Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{
              borderColor: '#1877F3',
              color: '#1877F3',
              textTransform: 'none', // <-- Evita mayúsculas automáticas
              '&:hover': {
                backgroundColor: '#1877F3',
                color: '#fff',
                borderColor: '#1877F3',
              },
            }}
            fullWidth
          >
            Acceder con Facebook
          </Button>
        </Stack>
        <Box mt={3} textAlign="center">
          <MuiLink
            component="button"
            underline="hover"
            sx={{
              color: 'var(--primary-color)', // Cambiado a color primario
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'color 0.2s',
              textTransform: 'none', // Evita mayúsculas automáticas
              '&:hover': {
                color: '#2a1e5c', // Tonalidad más oscura del color primario al hacer hover
                textDecoration: 'underline',
              },
            }}
            onClick={onRegister}
          >
            ¿Aún no tienes una cuenta? ¡Regístrate aquí!
          </MuiLink>
        </Box>
      </Box>
    </Modal>
  );
};

export default FloatingLogin;