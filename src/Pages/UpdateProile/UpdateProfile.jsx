

const UpdateProfile = () => {
    return (
        <div className="grid grid-cols-2 w-[90%] mx-auto">
      <div className="hero min-h-screen bg-blue-200 mb-4 rounded-xl">
       
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Update Profile</h1>
          </div>
          <div className="  shadow-2xl bg-base-200 w-full rounded-xl">
            <form  className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                 
                  placeholder="photoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  
                  placeholder="email"
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#f0932b] text-white text-xl">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      
    </div>
    );
};

export default UpdateProfile;