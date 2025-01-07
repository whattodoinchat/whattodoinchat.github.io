import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const attractions = {
  paris: [
    {
      title: "Eiffel Tower",
      description: "The iconic symbol of Paris, offering breathtaking views of the city.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    },
    {
      title: "Louvre Museum",
      description: "Home to thousands of works of art, including the Mona Lisa.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    },
    {
      title: "Notre-Dame Cathedral",
      description: "A masterpiece of French Gothic architecture.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    },
    {
      title: "Arc de Triomphe",
      description: "A monumental arch honoring those who fought for France.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    },
    {
      title: "Sacré-Cœur",
      description: "A beautiful basilica offering panoramic views of Paris.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    },
    {
      title: "Palace of Versailles",
      description: "The opulent palace of Louis XIV with stunning gardens.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    },
    {
      title: "Musée d'Orsay",
      description: "Famous for its collection of impressionist art.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    },
    {
      title: "Champs-Élysées",
      description: "The most famous avenue in Paris, known for shopping and dining.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    },
    {
      title: "Luxembourg Gardens",
      description: "Beautiful park perfect for relaxation and people-watching.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    },
    {
      title: "Centre Pompidou",
      description: "Modern and contemporary art museum with unique architecture.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    },
  ],
};

const Attractions = () => {
  const { slug } = useParams();
  const cityAttractions = attractions[slug as keyof typeof attractions];

  if (!cityAttractions) {
    return (
        <div className="min-h-screen bg-background flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-serif text-travel-navy mb-4">City not found</h1>
              <Link to="/" className="text-travel-gold hover:underline">
                Return to home
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      );
  }
  return (
      <div className="min-h-screen bg-background flex flex-col">
    
      <div className="container py-16 flex-grow">
          <Link
            to={`/city/${slug}`}
            className="text-travel-gold hover:underline mb-8 inline-block"
          >
            ← Back to city
          </Link>
          <h1 className="text-4xl font-serif text-travel-navy mb-12">
            Top 10 Must-Visit Attractions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityAttractions.map((attraction, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-travel-navy mb-2 group-hover:text-travel-gold transition-colors">
                    {index + 1}. {attraction.title}
                  </h3>
                  <p className="text-travel-slate text-sm">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default Attractions;