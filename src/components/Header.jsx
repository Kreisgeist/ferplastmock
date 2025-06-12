import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';
import React, { useState } from 'react';
import FloatingLogin from './FloatingLogin';

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenLogin = () => setLoginOpen(true);
  const handleCloseLogin = () => setLoginOpen(false);
  const handleRegister = () => {
    alert('Navegar a registro');
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'var(--primary-color)',
          top: 0,
          zIndex: 1100,
          color: 'var(--text-color)',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            flexWrap: 'wrap', // Permite que los elementos se ajusten en pantallas pequeñas
          }}
        >
          {/* Logo y nombre de la empresa */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              padding: '10px',
              borderRadius: '5px',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                backgroundColor: '#2a1e5c',
                color: '#FFD700',
              },
            }}
          >
            <img src={logo} alt="Company Logo" style={{ height: '50px', marginRight: '10px' }} />
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif', // Aplicar fuente Poppins
                display: { xs: 'none', sm: 'block' }, // Oculta el texto en pantallas muy pequeñas
              }}
            >
              Ferplast
            </Typography>
          </Box>
          {/* Botones de navegación */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                color: 'white',
                fontWeight: 500,
                fontFamily: 'DM Sans, sans-serif', // Aplicar fuente DM Sans
                transition: 'background 0.2s, color 0.2s',
                '&:hover': {
                  backgroundColor: '#2a1e5c',
                  color: '#FFD700',
                },
              }}
            >
              Inicio
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/catalog"
              sx={{
                color: 'white',
                fontWeight: 500,
                fontFamily: 'DM Sans, sans-serif', // Aplicar fuente DM Sans
                transition: 'background 0.2s, color 0.2s',
                '&:hover': {
                  backgroundColor: '#2a1e5c',
                  color: '#FFD700',
                },
              }}
            >
              Catálogo
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/locations"
              sx={{
                color: 'white',
                fontWeight: 500,
                fontFamily: 'DM Sans, sans-serif', // Aplicar fuente DM Sans
                transition: 'background 0.2s, color 0.2s',
                '&:hover': {
                  backgroundColor: '#2a1e5c',
                  color: '#FFD700',
                },
              }}
            >
              Sucursales
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              sx={{
                color: 'white',
                fontWeight: 500,
                fontFamily: 'DM Sans, sans-serif', // Aplicar fuente DM Sans
                transition: 'background 0.2s, color 0.2s',
                '&:hover': {
                  backgroundColor: '#2a1e5c',
                  color: '#FFD700',
                },
              }}
            >
              Contacto
            </Button>
          </Box>
          {/* Menú hamburguesa para pantallas pequeñas */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': {
                backgroundColor: 'var(--primary-color)',
                color: 'white',
              },
            }}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Inicio" sx={{ fontFamily: 'DM Sans, sans-serif' }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/catalog" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Catálogo" sx={{ fontFamily: 'DM Sans, sans-serif' }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/locations" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Sucursales" sx={{ fontFamily: 'DM Sans, sans-serif' }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/contact" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Contacto" sx={{ fontFamily: 'DM Sans, sans-serif' }} />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
          {/* Icono de usuario */}
          <IconButton
            color="inherit"
            sx={{
              color: 'white',
              ml: { xs: 0, md: 2 }, // Ajusta el margen en pantallas pequeñas
              mt: { xs: 1, md: 0 }, // Añade margen superior en pantallas pequeñas
            }}
            aria-label="Iniciar sesión"
            onClick={handleOpenLogin}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <FloatingLogin open={loginOpen} onClose={handleCloseLogin} onRegister={handleRegister} />
    </>
  );
};

export default Header;