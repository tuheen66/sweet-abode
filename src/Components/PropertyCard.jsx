import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PropertyCard = ({ property }) => {
  const {
    id,
    image,
    estate_title,
    segment_name,
    price,
    status,
    area,
    short_description,
    location,
    facilities,
  } = property;

  return (
    <div className="card card-compact  bg-base-100 shadow-slate-500 shadow-2xl border p-4 transition duration-500 hover:scale-105 ">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{estate_title} </h2>
        <p className="font-bold">{segment_name}</p>
        <p>
          <span className="font-bold">Id :</span> <span>{id} </span>
        </p>
        <p>{short_description}</p>
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

        <ul>
          {facilities.map((facility, idx) => (
            <li key={idx}>{facility} </li>
          ))}
        </ul>
        <div className="card-actions justify-end">
          <Link to={`property-details/${id}`}>
            <button className="btn bg-[#f0932b] text-lg text-white">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
