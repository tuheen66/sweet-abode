import img1 from "../../assets/houses/img1.jpg";
import img2 from "../../assets/houses/img2.jpg";
import img3 from "../../assets/houses/img3.jpg";
import img4 from "../../assets/houses/img4.jpg";
import img5 from "../../assets/houses/img5.jpg";
import img6 from "../../assets/houses/img6.jpg";
import img7 from "../../assets/houses/img7.jpg";
import img8 from "../../assets/houses/img8.jpg";
import img9 from "../../assets/houses/img9.jpg";
import img10 from "../../assets/houses/img10.jpg";
import img11 from "../../assets/houses/img11.jpg";
import img12 from "../../assets/houses/img12.jpg";
import img13 from "../../assets/houses/img13.jpg";
import img14 from "../../assets/houses/img14.jpg";
import img15 from "../../assets/houses/img15.jpg";
import img16 from "../../assets/houses/img16.jpg";

const ExclusiveHouses = () => {

    const houses =[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="my-8 text-3xl font-bold text-center text-gray-700">
        Exclusive Property Gallery
      </h2>
      {/* <div className=" grid lg:grid-cols-4 gap-8 mb-8">
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img1} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img2} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img3} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img4} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img5} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img6} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img7} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img8} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img9} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img10} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img11} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img12} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img13} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img14} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img15} alt="" />
        <img className="shadow-gray-300 shadow-xl rounded-lg" src={img16} alt="" />
      </div> */}

      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {houses.map((house, idx)=><img key={idx} className="shadow-gray-300 shadow-xl rounded-lg" src={house} alt="" /> )}
      </div>
    </div>
  );
};

export default ExclusiveHouses;
