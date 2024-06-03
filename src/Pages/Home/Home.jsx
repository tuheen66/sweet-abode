import { useLoaderData } from "react-router-dom";
import PropertyCard from "../../Components/PropertyCard";

const Home = () => {
  const properties = useLoaderData();
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="my-8 font-bold text-3xl text-center text-gray-700">Estates</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
