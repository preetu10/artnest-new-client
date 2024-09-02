import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import ScrollToTop from "react-scroll-up";
import { FaArrowUp} from "react-icons/fa6";
import Demo from "./Demo";
import Advantages from "./Advantages";
import ExploreCategories from "./ExploreCategories";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title> ArtNest | Welcome to ArtNest</title>
      </Helmet>
      <Banner></Banner>
      <Advantages></Advantages>
      <ExploreCategories></ExploreCategories>


      <ScrollToTop showUnder={160}>
       <div className="p-3 rounded-full border-2 border-black hover:text-[#b18b5e] hover:border-[#b18b5e]"><FaArrowUp></FaArrowUp></div>
      </ScrollToTop>
    </div>
  );
};

export default Home;
