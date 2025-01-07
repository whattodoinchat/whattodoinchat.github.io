import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 backdrop-blur-md bg-white/80 border-t border-travel-slate/10">
      <div className="container">
        <nav className="flex justify-center gap-8 text-sm text-travel-slate">
          <Link 
            to="/about" 
            className="hover:text-travel-gold transition-colors duration-300 hover:scale-105 transform"
          >
            About
          </Link>
          <Link 
            to="/cookies" 
            className="hover:text-travel-gold transition-colors duration-300 hover:scale-105 transform"
          >
            Cookies
          </Link>
          <Link 
            to="/contact" 
            className="hover:text-travel-gold transition-colors duration-300 hover:scale-105 transform"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;