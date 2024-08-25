import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title> ArtNest | Welcome to ArtNest</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;