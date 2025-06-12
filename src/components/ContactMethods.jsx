import { Button, Typography, Grid } from '@mui/material';
import { Email, Phone, Facebook, Twitter, Instagram } from '@mui/icons-material';

const ContactMethods = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Email</Typography>
          <Typography variant="body1">info@mexicanplastics.com</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Phone</Typography>
          <Typography variant="body1">+52 123 456 7890</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Follow Us</Typography>
          <div>
            <Button startIcon={<Facebook />} href="https://facebook.com/mexicanplastics" target="_blank">
              Facebook
            </Button>
            <Button startIcon={<Twitter />} href="https://twitter.com/mexicanplastics" target="_blank">
              Twitter
            </Button>
            <Button startIcon={<Instagram />} href="https://instagram.com/mexicanplastics" target="_blank">
              Instagram
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactMethods;