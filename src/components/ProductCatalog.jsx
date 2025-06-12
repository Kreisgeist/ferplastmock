import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', image: '/path/to/image1.jpg' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', image: '/path/to/image2.jpg' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', image: '/path/to/image3.jpg' },
];

const ProductCatalog = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Product Catalog
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductCatalog;