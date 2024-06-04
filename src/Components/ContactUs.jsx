import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ContactForm from "./ContactForm";

const position = [42.829995, -76.096287];

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 my-12">
      <div className="lg:w-[50%] rounded-xl  shadow-2xl  shadow-slate-400 ">
        <MapContainer center={position} zoom={5} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="lg:w-1/2 bg-[#34ace05d] p-4 rounded-lg shadow-2xl shadow-slate-400 text-gray-700">
        <h2 className="text-3xl font-bold text-center ">Contact Us</h2>
        <ContactForm></ContactForm>
        <div></div>
      </div>
    </div>
  );
};

export default ContactUs;
