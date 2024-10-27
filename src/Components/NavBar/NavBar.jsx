import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
    return (
        <div className="flex justify-between px-7 py-6 relative z-[100] text-white bg-black bg-opacity-30 ">

            <NavLink className='font-bold text-3xl' to='/'>Skyline</NavLink>

            <div className="flex items-center gap-5 ">
                <Link to='/login'>Login</Link>
                <div className="dropdown dropdown-end ">
                    <div tabIndex={0} className=" m-1"> <CgProfile className="text-4xl"></CgProfile></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;