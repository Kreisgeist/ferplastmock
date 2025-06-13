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
  const [menuIconRotated, setMenuIconRotated] = useState(false); // State for animation

  const handleOpenLogin = () => setLoginOpen(true);
  const handleCloseLogin = () => setLoginOpen(false);
  const handleRegister = () => {
    alert('Navegar a registro');
  };

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenuIconRotated(open); // Trigger animation
    setTimeout(() => setDrawerOpen(open), 150); // Delay drawer appearance to sync with animation
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
          <IconButton
            color="inherit"
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: 'white', // Match the color of other icons
              transition: 'transform 0.15s ease', // Faster rotation animation
              transform: menuIconRotated ? 'rotate(90deg)' : 'rotate(0deg)', // Rotate on click
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
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
              justifyContent: 'center', // Center the logo
              flexGrow: { xs: 1, md: 0 }, // Allow centering on small screens
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
                display: { xs: 'none', sm: 'block' }, // Hide name on small screens
              }}
            >
              Ferplast
            </Typography>
          </Box>
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
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            width: '250px', // Set the width of the menu
            height: '100%', // Full height of the screen
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { toggleDrawer(false)(); scrollToSection('home'); }}>
              <ListItemText 
                primary="Inicio" 
                sx={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 500 }} 
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { toggleDrawer(false)(); scrollToSection('product-display'); }}>
              <ListItemText 
                primary="Catálogo" 
                sx={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 500 }} 
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { toggleDrawer(false)(); scrollToSection('branch-locations'); }}>
              <ListItemText 
                primary="Sucursales" 
                sx={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 500 }} 
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { toggleDrawer(false)(); scrollToSection('contact-methods'); }}>
              <ListItemText 
                primary="Contacto" 
                sx={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 500 }} 
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <FloatingLogin open={loginOpen} onClose={handleCloseLogin} onRegister={handleRegister} />
    </>
  );
};

export default Header;