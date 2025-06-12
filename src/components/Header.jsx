import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuClick = (sectionId) => {
    setDrawerOpen(false); // Cierra el menú
    scrollToSection(sectionId); // Navega a la sección
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - 100; // Ajustar el desplazamiento para visibilidad
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
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
            flexWrap: 'wrap',
          }}
        >
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
                fontFamily: 'Poppins, sans-serif',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Ferplast
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
            }}
          >
            <Button
              color="inherit"
              onClick={() => scrollToSection('home')}
              sx={{
                color: 'white',
                fontWeight: 500,
                fontFamily: 'DM Sans, sans-serif',
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
              onClick={() => scrollToSection('product-display')}
              sx={{
                color: 'white',
                fontWeight: 500,
                fontFamily: 'DM Sans, sans-serif',
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
              onClick={() => scrollToSection('branch-locations')}
              sx={{
                color: 'white',
                fontWeight: 500,
                fontFamily: 'DM Sans, sans-serif',
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
              onClick={() => scrollToSection('contact-methods')}
              sx={{
                color: 'white',
                fontWeight: 500,
                fontFamily: 'DM Sans, sans-serif',
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
                <ListItemButton onClick={() => handleMenuClick('home')}>
                  <ListItemText 
                    primary="Inicio" 
                    sx={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 500 }} 
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleMenuClick('product-display')}>
                  <ListItemText 
                    primary="Catálogo" 
                    sx={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 500 }} 
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleMenuClick('branch-locations')}>
                  <ListItemText 
                    primary="Sucursales" 
                    sx={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 500 }} 
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleMenuClick('contact-methods')}>
                  <ListItemText 
                    primary="Contacto" 
                    sx={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 500 }} 
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <IconButton
              color="inherit"
              sx={{
                color: 'white',
                mt: { xs: 1, md: 0 },
              }}
              aria-label="Iniciar sesión"
              onClick={handleOpenLogin}
            >
              <AccountCircleIcon />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                color: 'white',
                mt: { xs: 1, md: 0 },
              }}
              aria-label="Carrito de compras"
            >
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <FloatingLogin open={loginOpen} onClose={handleCloseLogin} onRegister={handleRegister} />
    </>
  );
};

export default Header;