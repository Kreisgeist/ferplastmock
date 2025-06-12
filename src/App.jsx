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
      <HeroSection />
      <CustomerTestimonials />
      <ProductCatalog />
      <BestSellers />
      <BranchLocations />
      <ContactMethods />
      <Footer />
    </>
  );
}

export default App;