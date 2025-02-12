import { useParams } from "react-router-dom";
import { CityChat } from "@/components/CityChat";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Mock data - in a real app, this would come from an API
const cityData = {
  paris: {
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920",
    articles: [
      {
        title: "Top 10 Must-Visit Attractions",
        excerpt: "From the Eiffel Tower to the Louvre, discover the essential sights...",
        link: "attractions"
      },
      {
        title: "Hidden Gems of Paris",
        excerpt: "Explore the lesser-known corners of the City of Light...",
      },
    ],
  },
  // Add more cities as needed
};

const CityPage = () => {
  const { slug } = useParams();
  const city = cityData[slug as keyof typeof cityData];

  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="relative h-[40vh]">
        <img
          src={city.image}
          alt={`${city.name}, ${city.country}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-2">{city.name}</h1>
            <p className="text-xl">{city.country}</p>
          </div>
        </div>
      </header>

      <main className="container py-16 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-travel-navy mb-8">
              Travel Tips & Articles
            </h2>
            <div className="space-y-6">
            {city.articles.map((article, index) => (
                <Link 
                  key={index} 
                  to={article.link ? `${article.link}` : "#"}
                  className="block"
                >
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif text-travel-navy mb-2 hover:text-travel-gold transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-travel-slate">{article.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <CityChat cityName={city.name} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CityPage;