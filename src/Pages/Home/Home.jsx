import { useLoaderData } from "react-router-dom";
import PropertyCard from "../../Components/PropertyCard";
import BannerSlider from "../../Components/BannerSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

AOS.init();

const Home = () => {
  const properties = useLoaderData();
  return (
    <div className="w-[90%] mx-auto">
      <Helmet>
        <title>Sweet Abode | Home</title>
      </Helmet>

      <BannerSlider></BannerSlider>

      <h2 className="my-8 font-bold text-3xl text-center text-gray-700">
        Estates
      </h2>

      <div
        data-aos="slide-left"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
      >
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
