import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const properties = useLoaderData();
  const { id } = useParams();

  const property = properties.find((property) => property.id == id);

  const {
    image,
    estate_title,
    segment_name,
    price,
    status,
    area,
    description,
    location,
    facilities,
  } = property;

  return (
    <div className="w-[90%] mx-auto mb-12">
      <Helmet>
        <title>Sweet Abode | Property Details</title>
      </Helmet>
      <div className="grid lg:grid-cols-5 gap-4">
        <div
          data-aos="slide-right"
          data-aos-duration="1000"
          className="lg:col-span-3 rounded-xl"
        >
          <img className="rounded-xl" src={image} alt="" />
        </div>

        <div
          data-aos="slide-left"
          data-aos-duration="1000"
          className="card-body lg:col-span-2 bg-red-100 rounded-xl"
        >
          <h2 className="card-title font-bold">{estate_title} </h2>
          <p className="font-bold">{segment_name} </p>
          <p>
            <span className="font-bold">Id :</span> <span>{id} </span>
          </p>

          <p>
            <span className="font-bold">Price :</span> $ <span>{price} </span>{" "}
          </p>
          <p>
            <span className="font-bold">Status :</span> <span>{status} </span>
          </p>
          <p>
            <span className="font-bold">Area : </span>
            <span>{area} </span> sqft
          </p>
          <p>
            <span className="font-bold">Location : </span>
            <span>{location} </span>
          </p>
          <p className="font-bold">Facilities:</p>
          <span>
            {facilities.map((facility, idx) => (
              <li key={idx}>{facility} </li>
            ))}
          </span>
        </div>
      </div>
      <div
        data-aos="slide-up"
        data-aos-duration="1000"
        className="mt-8 text-justify bg-red-100 p-6 rounded-xl"
      >
        <p>
          <span className="font-bold"> Description:</span>{" "}
          <span>{description}</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyDetails;
