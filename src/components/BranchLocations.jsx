import { Card, CardContent, Typography, Grid } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const branchLocations = [
  {
    name: 'Sucursal Texcoco',
    address:
      'Carretera Los Reyes, Texcoco Km. 31.15 Texcoco, Edo. de Mex. C.P. 56250',
    phones: [
      '(595) 921 0057',
      '(595) 921 0281',
      '(595) 921 0293',
      '(595) 921 1384',
      '(595) 921 1796',
    ],
    fax: '(595) 921 1209',
    coordinates: { lat: 19.430893902400378, lng: -98.90889138188561 },
    mapUrl: 'https://maps.app.goo.gl/P54hCQeQ8bhbwnhPA',
  },
  {
    name: 'Sucursal Monterrey',
    address:
      'Av. Lic. Adolfo López Mateos # Num.6259 Colonia Lagrange, San Nicolas de los Garza, N.L. C.P. 66490',
    phones: ['(81) 8191 1393'],
    fax: '(81) 8191 1393',
    coordinates: { lat: 25.702642728138827, lng: -100.28020711867929 },
    mapUrl: 'https://maps.app.goo.gl/KXZGgTXz5Mu6zNz87',
  },
  {
    name: 'Sucursal Guadalajara',
    address:
      'Prisciliano Sánchez No. 257 Cruza con Contreras Medellin y Niños Heroes Col. Centro Tlaquepaque Jalisco C.P. 45500',
    phones: ['(33) 3838 4544'],
    fax: '(33) 3639 9611',
    coordinates: { lat: 20.937568970206268, lng: -103.31432588514663 },
    mapUrl: 'https://maps.app.goo.gl/Lsc256ySqbnXyUrb9',
  },
  {
    name: 'Sucursal Merida',
    address:
      'Av. 86 A Num. 535 A Colonia Centro Merida, Yucatan C.P. 97000',
    phones: ['01 (999) 176-7789'],
    coordinates: { lat: 21.280417032992982, lng: -89.58439696355697 },
    mapUrl: 'https://maps.app.goo.gl/xk6V9vqQtMpajk5s9',
  },
];

const BranchLocations = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '200px', // Set height for the map
    borderRadius: '15px', // Match card border radius
    marginTop: '10px',
  };

  return (
    <div
      style={{
        padding: '20px',
        background:
          'linear-gradient(to bottom, var(--background-color), rgba(77, 61, 138, 0.1))',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          color: 'var(--heading-color)',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        Nuestras Sucursales
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {branchLocations.map((branch, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} style={{ display: 'flex' }}>
            <Card
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Space out elements vertically
                textAlign: 'left',
                minHeight: '300px',
                maxWidth: '280px',
                margin: '0 auto',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 20px var(--primary-color)',
                },
              }}
            >
              <CardContent sx={{ paddingBottom: '0' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    color: 'var(--primary-color)',
                    marginBottom: '10px',
                    wordWrap: 'break-word',
                    textAlign: 'center',
                  }}
                >
                  {branch.name}
                </Typography>
              </CardContent>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center', // Center text content vertically
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'DM Sans, sans-serif',
                    color: 'var(--text-color)',
                    marginBottom: '10px',
                    wordWrap: 'break-word',
                    textAlign: 'center',
                  }}
                >
                  {branch.address}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    color: 'var(--secondary-color)',
                    marginBottom: '5px',
                  }}
                >
                  Teléfonos:
                </Typography>
                <ul
                  style={{
                    paddingLeft: '0',
                    marginBottom: '10px',
                    textAlign: 'center',
                    listStylePosition: 'inside',
                  }}
                >
                  {branch.phones.map((phone, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        color: 'var(--text-color)',
                        fontSize: '0.9rem',
                      }}
                    >
                      {phone}
                    </li>
                  ))}
                </ul>
                {branch.fax && (
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 'bold',
                      color: 'var(--secondary-color)',
                    }}
                  >
                    Fax: {branch.fax}
                  </Typography>
                )}
              </CardContent>
              <CardContent sx={{ paddingTop: '0' }}>
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={branch.coordinates}
                    zoom={15}
                  >
                    <Marker position={branch.coordinates} />
                  </GoogleMap>
                </LoadScript>
                <div style={{ textAlign: 'center', marginTop: '15px' }}>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '10px 20px',
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 'bold',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = 'var(--secondary-color)')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = 'var(--primary-color)')}
                  >
                    Ver en Maps
                  </a>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BranchLocations;