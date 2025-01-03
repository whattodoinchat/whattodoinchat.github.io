import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhatsNext = () => {
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

        <h1 className="text-4xl md:text-5xl font-serif text-travel-navy mb-8">What's Next</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-travel-slate mb-6">
            There is a lot to do... Here are some of the things we plan to do next:
          </p>
          <ul className="list-disc pl-6 text-travel-slate mb-6">
            <li>Add content for each city (it will be AI generated)</li>
            <li>Add a few more cities</li>
            <li>Add google analytics</li>
            <li>Add some content related ads</li>
            <li>Add chatbot for each city</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatsNext;