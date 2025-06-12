import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#242424', color: '#ffffff', padding: '20px', textAlign: 'center' }}>
      <div>
        <p>&copy; {new Date().getFullYear()} Mexican Plastics Company. All rights reserved.</p>
        <div>
          <Link to="/contact" style={{ color: '#646cff', margin: '0 10px' }}>Contact Us</Link>
          <Link to="/privacy" style={{ color: '#646cff', margin: '0 10px' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: '#646cff', margin: '0 10px' }}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;