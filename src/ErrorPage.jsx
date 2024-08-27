import Lottie from "lottie-react";
import animation from "../public/404_not_found.json"
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="max-w-8xl  flex flex-col mx-auto mt-32">
            <Lottie className="w-full h-80 mx-auto" animationData={animation} />;
            <div className="mx-auto "><button className="btn bg-[#B18B5E] mx-auto text-white   btn-md lg:btn-lg">
                <Link to="/">Go to Home</Link>
            </button></div>
        </div>
    );
};

export default ErrorPage;