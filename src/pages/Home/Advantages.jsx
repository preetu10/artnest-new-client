import { RiHandCoinLine } from "react-icons/ri";
import { RiShoppingBag4Line } from "react-icons/ri";
import { Ri24HoursFill } from "react-icons/ri";

const Advantages = () => {
    return (
        <div className="bg-[#F6F1E7] px-16 mx-auto text-center py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-4">
                <RiHandCoinLine className="text-6xl text-[#d23c3f] hover:text-red-700"/>
                   <p className="text-[#34373f] text-lg">Cash on Delivery</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                <RiShoppingBag4Line className="text-6xl text-[#d23c3f] hover:text-red-700"/>
                    <p className="text-[#34373f] text-lg">Customizable Product</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                <Ri24HoursFill className="text-6xl text-[#d23c3f] hover:text-red-700"/>
                    <p className="text-[#34373f] text-lg">24/7 Online Support</p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;