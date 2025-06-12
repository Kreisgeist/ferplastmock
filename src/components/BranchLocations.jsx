import { Card, CardContent, Typography, Grid } from '@mui/material';

const branchLocations = [
  {
    name: 'Branch 1',
    address: '123 Main St, Mexico City, MX',
    phone: '+52 55 1234 5678',
  },
  {
    name: 'Branch 2',
    address: '456 Elm St, Guadalajara, MX',
    phone: '+52 33 9876 5432',
  },
  {
    name: 'Branch 3',
    address: '789 Oak St, Monterrey, MX',
    phone: '+52 81 2345 6789',
  },
];

const BranchLocations = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Our Branch Locations
      </Typography>
      <Grid container spacing={3}>
        {branchLocations.map((branch, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{branch.name}</Typography>
                <Typography color="textSecondary">{branch.address}</Typography>
                <Typography color="textSecondary">{branch.phone}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BranchLocations;