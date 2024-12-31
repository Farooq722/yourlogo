import { Link, NavLink } from "react-router-dom";

function Header(){

    return <div className="sticky top-0 z-50 shadow ">
        <div className="flex flex-wrap items-center justify-evenly bg-slate-100 h-20 text-center mx-auto max-w-screen-2xl ">
            <div className="text-2xl font-extrabold cursor-pointer">
                <Link to={'/'}>Your<span className="text-red-500 italic font-serif">Logo@</span></Link>
            </div>
            <div className="flex justify-between space-x-8 text-xl font-semibold">
                <div className="cursor-pointer">
                    <NavLink to={"/"} className={({isActive}) => 
                        isActive? "text-red-400" : ""
                    }>Home</NavLink>
                </div>
                <div className="cursor-pointer">
                    <NavLink to={"/about"}
                    className={({isActive}) => 
                        isActive? "text-red-400" : ""
                    }
                    >
                    About
                    </NavLink>
                </div>
                <div className="cursor-pointer">
                    <NavLink to={"/contact"}
                    className={({isActive}) => 
                        isActive? "text-red-400" : ""
                    }
                    >
                    Contact
                    </NavLink>
                </div>
                <div className="cursor-pointer">
                    <NavLink to={"/github"}
                    className={({isActive}) => 
                        isActive? "text-red-400" : ""
                    }
                    >
                    Github
                    </NavLink>
                </div>
            </div>
            <div className="flex justify-between space-x-4 text-base">
                <div className="font-medium">
                    <Link to={"#"}
                    className="hover:text-red-300"
                    >
                    Login
                    </Link>
                </div>
                <div className="text-center">
                    <Link to={"#"}><button className="text-center bg-red-800 text-white px-3 py-1 rounded-lg hover:bg-red-500 hover:text-gray-900">Get Started</button></Link>
                </div>
            </div>
        </div>
    </div>
}

export default Header;