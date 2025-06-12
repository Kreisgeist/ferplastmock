import { Card, CardContent, Typography, Grid } from '@mui/material';

const bestSellers = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    price: '$10.00',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of Product 2',
    price: '$15.00',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description of Product 3',
    price: '$20.00',
  },
];

const BestSellers = () => {
  return (
    <section>
      <Typography variant="h2" gutterBottom>
        Best Sellers
      </Typography>
      <Grid container spacing={2}>
        {bestSellers.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="h6">{product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default BestSellers;