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
    coordinates: { lat: 19.5119, lng: -98.8826 },
  },
  {
    name: 'Sucursal Monterrey',
    address:
      'Av. Lic. Adolfo López Mateos # Num.6259 Colonia Lagrange, San Nicolas de los Garza, N.L. C.P. 66490',
    phones: ['(81) 8191 1393'],
    fax: '(81) 8191 1393',
    coordinates: { lat: 25.6866, lng: -100.3161 },
  },
  {
    name: 'Sucursal Guadalajara',
    address:
      'Prisciliano Sánchez No. 257 Cruza con Contreras Medellin y Niños Heroes Col. Centro Tlaquepaque Jalisco C.P. 45500',
    phones: ['(33) 3838 4544'],
    fax: '(33) 3639 9611',
    coordinates: { lat: 20.6597, lng: -103.3496 },
  },
  {
    name: 'Sucursal Merida',
    address:
      'Av. 86 A Num. 535 A Colonia Centro Merida, Yucatan C.P. 97000',
    phones: ['01 (999) 176-7789'],
    coordinates: { lat: 20.9674, lng: -89.5926 },
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
                justifyContent: 'space-between',
                textAlign: 'left', // Ensure text alignment is consistent
                minHeight: '300px', // Set a minimum height for uniformity
                maxWidth: '280px', // Set a maximum width to prevent oversized cards
                margin: '0 auto', // Center the cards horizontally
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
                transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effect
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly enlarge the card on hover
                  boxShadow: '0 6px 20px var(--primary-color)', // Add a glow effect with the primary color
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    color: 'var(--primary-color)',
                    marginBottom: '10px',
                    wordWrap: 'break-word', // Ensure text wraps properly
                  }}
                >
                  {branch.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'DM Sans, sans-serif',
                    color: 'var(--text-color)',
                    marginBottom: '10px',
                    wordWrap: 'break-word', // Ensure text wraps properly
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
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={branch.coordinates}
                    zoom={15}
                  >
                    <Marker position={branch.coordinates} />
                  </GoogleMap>
                </LoadScript>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BranchLocations;