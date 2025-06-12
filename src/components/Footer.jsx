import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(to bottom, rgba(77, 61, 138, 0.3), var(--primary-color))',
        color: '#ffffff',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'var(--font-family)',
        fontSize: 'var(--font-size-small)',
      }}
    >
      <div>
        <p>&copy; {new Date().getFullYear()} Ferplast S.A. de C.V. Todos los derechos reservados.</p>
        <div>
          <Link to="/contact" style={{ color: '#ffffff', margin: '0 10px' }}>Contact Us</Link>
          <Link to="/privacy" style={{ color: '#ffffff', margin: '0 10px' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: '#ffffff', margin: '0 10px' }}>Terms of Service</Link>
          <Link to="/returns" style={{ color: '#ffffff', margin: '0 10px' }}>Política de Devoluciones</Link>
          <Link to="/shipping" style={{ color: '#ffffff', margin: '0 10px' }}>Política de Envío</Link>
          <Link to="/distributor" style={{ color: '#ffffff', margin: '0 10px' }}>¿Quieres ser distribuidor?</Link>
          <Link to="/how-to-buy" style={{ color: '#ffffff', margin: '0 10px' }}>¿Como comprar?</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;