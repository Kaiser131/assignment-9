import { MdOutlineWorkspacePremium } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
import { SiProtractor } from "react-icons/si";
import { Link } from "react-router-dom";

const List = ({ list }) => {

    const { estate_title, area, segment_name, status, location, image, id } = list;

    return (
        <Link to={`/details/${id}`}>

            <div className="flex-col md:flex md:flex-row  bg-white my-10 transition-transform hover:scale-105">
                <img src={image} className=" md:max-h-[300px] md:max-w-[350px] " alt="" />
                <div className="content-center space-y-3  w-full p-5">
                    <div className="flex justify-between ">
                        <h1 className="text-[#bd0021] text-2xl">{estate_title}</h1>
                        <button> <MdOutlineWorkspacePremium className="text-3xl hover:text-[#bd0021]"></MdOutlineWorkspacePremium></button>
                    </div>
                    <p className="text-4xl flex gap-5">{segment_name} <span className="flex items-center gap-4 text-xl"><SiProtractor className="text-2xl"></SiProtractor> {area}</span> </p>
                    <p className="font-bold">Location: {location}</p>

                    <div className="flex items-center justify-between">
                        <p className="font-bold">Status: {status}</p>
                        <button ><IoBookmarksOutline className="text-xl"></IoBookmarksOutline></button>
                    </div>

                </div>
            </div>

        </Link>
    );
};

export default List;