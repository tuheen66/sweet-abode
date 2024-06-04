const AboutUs = () => {
  return (
    <div className="mb-8 bg-pink-100 px-8 py-4 rounded-xl shadow-2xl">
      <h2 className="font-bold text-3xl text-center mb-4">About us</h2>
      <div>
       
        <div className="grid grid-cols-2 gap-12">
          <div >
          <p>
          Welcome to <span className="font-bold">Sweet Abode</span>
        </p>
        <p>
          At <span className="font-bold">Sweet Abode</span>, we are dedicated to helping you find your
          dream home or perfect investment property. With a commitment to
          excellence and a passion for real estate, we strive to provide
          exceptional service and unparalleled market knowledge.
        </p>
            <h4>Our Story</h4>
            <p>
              Founded in 2000, <span className="font-bold">Sweet Abode</span> has grown from a small local
              agency to one of the leading real estate companies in
              Palm Beach, Florida. Our journey is marked by a relentless pursuit of
              client satisfaction and a deep-rooted belief in the value of home ownership.
            </p>
            <h4>Our Values</h4>
            <p>
              Integrity, professionalism, and a client-first approach are at the
              heart of everything we do. We believe in building lasting
              relationships with our clients, based on trust and transparency.
            </p>

            
          </div>

          <div>
          <h4>Our Services</h4>
        <li>Residential Sales</li>
        <li>Commercial Sales</li>
        <li>Property Management</li>
        <li>Leasing</li>
        <li>Investment Consulting</li>

        <h4>Innovation in Real Estate</h4>
            <p>
              Utilizing the latest technology, we offer virtual tours, 3D
              property walkthroughs, and a user-friendly online search platform
              to enhance your property buying or selling experience.
            </p>

        <h4>Market Insights</h4>
        <p>
          Stay informed with our latest market reports and insights. 
        </p>

          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AboutUs;
