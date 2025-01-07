import { CityCard } from "@/components/CityCard";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const featuredCities = [
  {
    city: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    slug: "paris",
  },
  {
    city: "Rome",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
    slug: "rome",
  },
  {
    city: "Barcelona",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800",
    slug: "barcelona",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920"
          alt="European cityscape"
          className="absolute inset-0 w-full h-full object-cover scale-105 transform transition-transform duration-[20s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-background" />
        <div className="relative text-center text-white z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-serif mb-6 tracking-tight">
            Discover Europe
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed opacity-90">
            Expert travel tips and personalized recommendations for Europe's most beautiful cities
          </p>
        </div>
      </header>

      <main className="container py-24 flex-grow -mt-20 relative z-10">
        <h2 className="text-4xl font-serif text-travel-navy mb-12 text-center">
          Featured Cities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {featuredCities.map((city) => (
            <CityCard key={city.slug} {...city} />
          ))}
        </div>
      </main>

      <Footer />
      
    </div>
  );
};

export default Index;