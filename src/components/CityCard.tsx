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
      <Card className="overflow-hidden group cursor-pointer animate-fade-up">
        <CardHeader className="p-0">
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={`${city}, ${country}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-xl font-serif text-travel-navy mb-1">{city}</h3>
          <p className="text-travel-slate text-sm">{country}</p>
        </CardContent>
      </Card>
    </Link>
  );
};