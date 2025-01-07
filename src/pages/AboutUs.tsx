import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-travel-cream flex flex-col">
      <div className="container mx-auto px-4 py-16 flex-grow">
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
            Welcome to our website, <b>What Do Do In // Chat</b>, your ultimate guide to discovering the best tourist attractions in selected cities across the world!
          </p>
          <p className="text-travel-slate mb-6">
            Most of the content on our site is generated using advanced AI technology. This allows us to bring you accurate, up-to-date, and engaging information quickly and efficiently. While AI helps us craft content, we ensure it is tailored to meet the needs of our audience, offering valuable tips, cultural highlights, and hidden gems that make every city unique.
          </p>
          
          <h2 className="text-2xl font-serif text-travel-navy mt-8 mb-4">Our Mission</h2>
          <p className="text-travel-slate mb-6">
            We're passionate about helping travelers experience cities like locals. Our platform combines expert knowledge with AI-powered personalized recommendations to ensure you get the most out of your urban adventures.
          </p>
          <p className="text-travel-slate mb-6">
            Our mission is to help travelers like you explore and enjoy the wonders of each destination. Whether you're visiting vibrant Lisbon, romantic Paris, or other captivating cities, we provide detailed and carefully AI-assisted curated insights to make your trip unforgettable.
          </p>
          <p className="text-travel-slate mb-6">
            We believe travel should be simple, exciting, and enriching. Our platform is here to inspire your adventures and guide your journey, one city at a time.
          </p>

          <h2 className="text-2xl font-serif text-travel-navy mt-8 mb-4">The project</h2>
          <p className="text-travel-slate mb-6">
            What To Do In // Chat is a side project used as a segwaay to learn new technologies, namely AI, LLMs and Agentic solutions.
          </p>
          <h2 className="text-2xl font-serif text-travel-navy mt-8 mb-4">Feel free to explore, and let us know how we can make your experience even better!</h2>
          <h2 className="text-2xl font-serif text-travel-navy mt-8 mb-4 ">Happy travels!</h2>  
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;