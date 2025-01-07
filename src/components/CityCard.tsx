import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CityCardProps {
  city: string;
  country: string;
  image: string;
  slug: string;
}

export const CityCard = ({ city, country, image, slug }: CityCardProps) => {
  return (
    <Link to={`/city/${slug}`}>
      <Card className="overflow-hidden group cursor-pointer animate-fade-up hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-64 overflow-hidden">
            <img
              src={image}
              alt={`${city}, ${country}`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </CardHeader>
        <CardContent className="p-6 relative">
          <h3 className="text-2xl font-serif text-travel-navy mb-2 group-hover:text-travel-gold transition-colors">
            {city}
          </h3>
          <p className="text-travel-slate text-sm font-light">{country}</p>
        </CardContent>
      </Card>
    </Link>
  );
};