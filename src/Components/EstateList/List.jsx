import { MdOutlineWorkspacePremium } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";

const List = ({ list }) => {

    const { estate_title, segment_name, status, location, image } = list;

    return (
        <div>

            <div className="flex bg-white my-10">
                <img src={image} className="max-h-[202px] w-[268px] " alt="" />
                <div className="content-center space-y-3  w-full p-5">
                    <div className="flex justify-between ">
                        <h1 className="text-[#bd0021] text-2xl">{estate_title}</h1>
                        <button> <MdOutlineWorkspacePremium className="text-3xl hover:text-[#bd0021]"></MdOutlineWorkspacePremium></button>
                    </div>
                    <p className="text-4xl">{segment_name}</p>
                    <p className="font-bold">Location: {location}</p>
                    <div className="flex justify-between">
                        <p className="font-bold">Status: {status}</p>
                        <button><IoBookmarksOutline className="text-xl"></IoBookmarksOutline></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default List;