import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
const Banner = () => {
  return (
    <>
 <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(./banner3.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-[#B18B5E] text-white text-lg btn-ghost">
              <Link to="/gallery">
              Explore Now
              </Link>
              </button>
          </div>
        </div>
      </div>  
     
      </>
  
  );
};

export default Banner;
{/* <button className="btn bg-[#B18B5E] text-white text-lg btn-ghost">
<Link to="/gallery">
Explore Now
</Link>
</button> */}