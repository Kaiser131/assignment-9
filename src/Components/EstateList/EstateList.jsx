import { useEffect, useState } from "react";

import { CiCircleList } from "react-icons/ci";
import { RxDropdownMenu } from "react-icons/rx";
import List from "./List";
import Footer from "../Footer/Footer";

const EstateList = () => {

    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('estate.json')
            .then(res => res.json())
            .then(data => setList(data));
    }, []);

    return (
        <div className=" ">
            <h1 className="my-10 text-center text-2xl font-sans font-extralight">{list.length} results found for: Luxury Properties for sale !</h1>

            <div className="bg-[#e0e0e0] ">

                <div className="border max-w-[1240px] px-10 mx-auto">

                    <div>

                        <div className="flex my-5 justify-between bg-white p-3">

                            <div className="flex items-center gap-3 text-[#bd0021] ">
                                <CiCircleList className="text-3xl"></CiCircleList>
                                <p className="text-xl">LIST</p>
                            </div>
                            <div>
                                <div className="dropdown dropdown-end ">
                                    <div tabIndex={0} role="button" className="flex items-center gap-3 text-xl hover:underline hover:text-[#bd0021] "><RxDropdownMenu className="text-3xl"></RxDropdownMenu>  Relavance</div>
                                    <ul tabIndex={0} className="dropdown-content  menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li><a className="hover:text-[#bd0021]">Price</a></li>
                                        <li><a className="hover:text-[#bd0021]">Status</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="space-y-6">
                            {
                                list.map((got) => <List list={got} key={got.id}></List>)
                            }
                        </div>


                    </div>


                </div>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default EstateList;