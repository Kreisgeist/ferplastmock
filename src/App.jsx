import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductCatalog from './components/ProductLines';
import BestSellers from './components/ProductDisplay';
import BranchLocations from './components/BranchLocations';
import ContactMethods from './components/ContactMethods';
import Footer from './components/Footer';
import CustomerTestimonials from './components/CustomerTestimonials';

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <CustomerTestimonials />
      <div id="product-catalog">
        <ProductCatalog />
      </div>
      <div id="product-display">
        <BestSellers />
      </div>
      <div id="branch-locations">
        <BranchLocations />
      </div>
      <div id="contact-methods">
        <ContactMethods />
      </div>
      <Footer />
    </>
  );
}

export default App;