import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-travel-cream">
      <div className="container mx-auto px-4 py-16">
        <nav className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/" className="text-travel-navy hover:text-travel-gold">
              ← Back to Home
            </Link>
          </Button>
        </nav>
        
        <h1 className="text-4xl md:text-5xl font-serif text-travel-navy mb-8">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-travel-slate mb-6">
            Welcome to City Sage, your trusted companion for discovering the hidden gems and must-visit spots across Europe's most beautiful cities.
          </p>
          
          <h2 className="text-2xl font-serif text-travel-navy mt-8 mb-4">Our Mission</h2>
          <p className="text-travel-slate mb-6">
            We're passionate about helping travelers experience cities like locals. Our platform combines expert knowledge with AI-powered personalized recommendations to ensure you get the most out of your urban adventures.
          </p>
          
          <h2 className="text-2xl font-serif text-travel-navy mt-8 mb-4">Our Team</h2>
          <p className="text-travel-slate mb-6">
            Our team consists of travel enthusiasts, local experts, and technology innovators who work together to bring you the most comprehensive and up-to-date city guides.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;