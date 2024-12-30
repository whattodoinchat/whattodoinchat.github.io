import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cookies = () => {
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

        <h1 className="text-4xl md:text-5xl font-serif text-travel-navy mb-8">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-travel-slate mb-6">
            This Cookie Policy explains how City Sage uses cookies and similar technologies to recognize you when you visit our website.
          </p>

          <h2 className="text-2xl font-serif text-travel-navy mt-8 mb-4">What are cookies?</h2>
          <p className="text-travel-slate mb-6">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide reporting information.
          </p>

          <h2 className="text-2xl font-serif text-travel-navy mt-8 mb-4">How we use cookies</h2>
          <p className="text-travel-slate mb-6">
            We use cookies for several purposes, including:
          </p>
          <ul className="list-disc pl-6 text-travel-slate mb-6">
            <li>Essential cookies: Required for the website to function properly</li>
            <li>Analytics cookies: Help us understand how visitors interact with our website</li>
            <li>Preference cookies: Remember your settings and preferences</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cookies;