import { CityCard } from "@/components/CityCard";

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
    <div className="min-h-screen bg-background">
      <header className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920"
          alt="European cityscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            Discover Europe
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Expert travel tips and personalized recommendations for Europe's most beautiful cities
          </p>
        </div>
      </header>

      <main className="container py-16">
        <h2 className="text-3xl font-serif text-travel-navy mb-8">
          Featured Cities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCities.map((city) => (
            <CityCard key={city.slug} {...city} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;