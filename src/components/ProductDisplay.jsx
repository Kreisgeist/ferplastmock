import { Card, CardContent, Typography, Grid, Box, Tabs, Tab, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/system';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import bestSellers from '../data/bestSellers';
import newProducts from '../data/newProducts';
import discountedProducts from '../data/discountedProducts';

const StyledCard = styled(Card)({
	margin: '10px', // Espaciado entre tarjetas
	position: 'relative',
	paddingBottom: '50px', // Espacio para el botón
});

const StyledCardMedia = styled('img')({
	width: '100%',
	height: '200px', // Incrementar altura de la imagen
	objectFit: 'cover',
});

const StyledTypography = styled(Typography)(({ theme }) => ({
	fontFamily: 'Poppins, sans-serif',
	fontWeight: 'bold',
	color: 'var(--heading-color)',
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans, sans-serif',
  color: 'var(--text-color)',
  fontSize: '0.9rem', // Reducir tamaño del texto
  lineHeight: 1.6,
  marginBottom: '16px', // Espacio adicional
}));

const StyledPrice = styled(Typography)(({ theme }) => ({
	fontFamily: 'DM Sans, sans-serif',
	color: 'var(--primary-color)',
	fontWeight: 'bold',
	fontSize: '1rem', // Reducir tamaño del texto
}));

const StyledTabs = styled(Tabs)({
	'& .MuiTab-root': {
		fontFamily: 'Poppins, sans-serif',
		fontWeight: 'bold',
		color: 'var(--text-color)',
		textTransform: 'none',
	},
	'& .MuiTab-root.Mui-selected': {
		color: 'var(--primary-color)',
	},
	'& .MuiTabs-indicator': {
		backgroundColor: 'var(--primary-color)',
	},
});

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  backgroundColor: 'var(--primary-color)',
  color: '#fff',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'var(--secondary-color)',
    opacity: 0.9,
  },
  '&:active': {
    backgroundColor: 'var(--secondary-color)', // Color secundario para el efecto de clic
  },
}));

const StyledFinalPrice = styled('span')({
  color: '#ff5055',
  fontSize: '1.2rem', // Un poco más grande
  fontWeight: 'bold',
});

const BestSellers = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabChange = (event, newValue) => {
		setActiveTab(newValue);
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const calculateDiscountedPrice = (price, discount) => {
		const numericPrice = parseFloat(price.replace('$', ''));
		const discountAmount = numericPrice * discount;
		const finalPrice = numericPrice - discountAmount;
		return {
			discountAmount: `$${discountAmount.toFixed(2)}`,
			finalPrice: `$${finalPrice.toFixed(2)}`,
		};
	};

	const renderCarousel = (products) => (
		<Slider {...settings}>
			{products.map((product) => (
				<div key={product.id}>
					<StyledCard>
						<StyledCardMedia
							src={`../my-demo/assets/productdisplay/${product.category}/${product.id}.jpg`}
							alt={product.name}
						/>
						<CardContent>
							<StyledTypography variant="h5">{product.name}</StyledTypography>
							<Typography
								variant="subtitle2"
								sx={{
									fontFamily: 'DM Sans, sans-serif',
									color: 'var(--secondary-color)',
									marginBottom: '8px',
								}}
							>
								Código: {product.code || 'N/A'}
							</Typography>
							{Array.isArray(product.description) ? (
								<ul style={{
									fontFamily: 'DM Sans, sans-serif',
									color: 'var(--text-color)',
									paddingLeft: '20px',
									textAlign: 'left',
									fontSize: '0.9rem', // Reducir tamaño del texto
									lineHeight: 1.6,
									marginBottom: '16px', // Espacio adicional
								}}>
									{product.description.map((line, index) => (
										<li key={index}>{line}</li>
									))}
								</ul>
							) : (
								<StyledDescription variant="body2" sx={{ marginBottom: '16px' }}>
									{product.description}
								</StyledDescription>
							)}
							{product.category === 'discountedproducts' && product.discount ? (
								(() => {
									const { discountAmount, finalPrice } = calculateDiscountedPrice(product.price, product.discount);
									return (
										<StyledPrice variant="h6">
											{product.price} - {discountAmount} (descuento) = <StyledFinalPrice>{finalPrice}</StyledFinalPrice>
										</StyledPrice>
									);
								})()
							) : (
								<StyledPrice variant="h6">{product.price}</StyledPrice>
							)}
							<StyledButton startIcon={<ShoppingCartIcon />}>Añadir al carrito</StyledButton>
						</CardContent>
					</StyledCard>
				</div>
			))}
		</Slider>
	);

	return (
		<Box sx={{ textAlign: 'center', padding: '60px 30px' }}>
			<StyledTabs value={activeTab} onChange={handleTabChange} centered>
				<Tab label="Los más vendidos" />
				<Tab label="Productos Nuevos" />
				<Tab label="Productos con Descuento" />
			</StyledTabs>
			<Box sx={{ maxWidth: '1200px', margin: '0 auto', marginTop: '20px' }}>
				{activeTab === 0 && renderCarousel(bestSellers)}
				{activeTab === 1 && renderCarousel(newProducts)}
				{activeTab === 2 && renderCarousel(discountedProducts)}
			</Box>
		</Box>
	);
};

export default BestSellers;