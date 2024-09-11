import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const Root = () => {
    return (
        <>
        <div className="max-w-full mx-auto playfair-display">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Root;