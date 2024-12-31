// import { Link,NavLink } from "react-router-dom"

// export default function Footer(){

//     return <div className="fixed shadow bottom-0 w-full bg-gray-100 text-center p-2">
//         <div id="outer-div" className="flex justify-evenly">
//             <div id="inner-div1" className="flex  justify-between items-center text-2xl">
//                 <Link className="font-bold italic">Your<span className="text-red-500 italic font-serif">Logo@</span></Link>
//             </div>
//             <div id="inner-div2" className="flex justify-between space-x-10 text-center">
//                 <div id="vertical-div1" className="grid grid-rows-3 gap-4">
//                     <h1 className="text-lg font-semibold underline">Resources</h1>
//                     <NavLink to={"/home"} className="hover:text-red-400">Home</NavLink>
//                     <NavLink to={"/about"} className="hover:text-red-400">About</NavLink>
//                 </div>
//                 <div id="vertical-div2" className="grid grid-rows-3 gap-4">
//                     <h1 className="text-lg font-semibold underline">Follow Us</h1>
//                     <NavLink to={"/github"} className="hover:text-red-400">Github</NavLink>
//                     <NavLink to={"#"} className="hover:text-red-400">Discord</NavLink>
//                 </div>
//                 <div id="vertical-div3" className="grid grid-rows-3 gap-4">
//                     <h1 className="text-lg font-semibold underline">Legal</h1>
//                     <NavLink to={"#"} className="hover:text-red-400">Privacy Policy</NavLink>
//                     <NavLink to={"#"} className="hover:text-red-400">Terms & Conditions</NavLink>
//                 </div>
//             </div>
//         </div>
        
//         <div className="flex justify-around mt-3 bg-slate-100">
//             <div>
//                 <h1 className="font-thin">@2024Farooq...All Rights Reserved.</h1>
//             </div>
//             <div className="flex justify-evenly gap-4">
//                 <Link className="w-5 h-5"><img className="hover:bg-indigo-200 hover:rounded-md" src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000" alt="Instagram" /></Link>
//                 <Link className="w-5 h-5"><img className="hover:bg-indigo-200 hover:rounded-md" src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=000000" alt="X" /></Link>
//                 <Link className="w-5 h-5"><img className="hover:bg-indigo-200 hover:rounded-md" src="https://img.icons8.com/?size=100&id=447&format=png&color=000000" alt="Linkedin" /></Link>
//                 <Link className="w-5 h-5"><img className="hover:bg-indigo-200 hover:rounded-md" src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000" alt="Github" /></Link>
//                 <Link className="w-5 h-5"><img className="hover:bg-indigo-200 hover:rounded-md" src="https://img.icons8.com/?size=100&id=25627&format=png&color=000000" alt="Discord" /></Link>
//             </div>
//         </div>
//     </div>
// }

import { Link, NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <>
            {/* Main content area */}
            <div className="flex flex-col min-h-52">
                <div className="flex-grow">
                    {/* Your main page content goes here */}
                </div>

                {/* Fixed footer at the bottom */}
                <div className="fixed bottom-0 left-0 w-full bg-gray-100 text-center p-2 shadow-lg z-50">
                    <div id="outer-div" className="flex justify-evenly">
                        <div id="inner-div1" className="flex justify-between items-center text-2xl">
                            <Link className="font-bold italic">Your<span className="text-red-500 italic font-serif">Logo@</span></Link>
                        </div>
                        <div id="inner-div2" className="flex justify-between space-x-10 text-center">
                            <div id="vertical-div1" className="grid grid-rows-3 gap-4">
                                <h1 className="text-lg font-semibold underline">Resources</h1>
                                <NavLink to={"/home"} className="hover:text-red-400">Home</NavLink>
                                <NavLink to={"/about"} className="hover:text-red-400">About</NavLink>
                            </div>
                            <div id="vertical-div2" className="grid grid-rows-3 gap-4">
                                <h1 className="text-lg font-semibold underline">Follow Us</h1>
                                <NavLink to={"/github"} className="hover:text-red-400">Github</NavLink>
                                <NavLink to={"#"} className="hover:text-red-400">Discord</NavLink>
                            </div>
                            <div id="vertical-div3" className="grid grid-rows-3 gap-4">
                                <h1 className="text-lg font-semibold underline">Legal</h1>
                                <NavLink to={"#"} className="hover:text-red-400">Privacy Policy</NavLink>
                                <NavLink to={"#"} className="hover:text-red-400">Terms & Conditions</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around mt-3 bg-slate-100">
                        <div>
                            <h1 className="font-thin">@2024Farooq...All Rights Reserved.</h1>
                        </div>
                        <div className="flex justify-evenly gap-4">
                            <Link className="w-5 h-5"><img className="hover:bg-indigo-200 hover:rounded-md" src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000" alt="Instagram" /></Link>
                            <Link className="w-5 h-5"><img className="hover:bg-indigo-200 hover:rounded-md" src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=000000" alt="X" /></Link>
                            <Link className="w-5 h-5"><img className="hover:bg-indigo-200 hover:rounded-md" src="https://img.icons8.com/?size=100&id=447&format=png&color=000000" alt="Linkedin" /></Link>
                            <Link className="w-5 h-5"><img className="hover:bg-indigo-200 hover:rounded-md" src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000" alt="Github" /></Link>
                            <Link className="w-5 h-5"><img className="hover:bg-indigo-200 hover:rounded-md" src="https://img.icons8.com/?size=100&id=25627&format=png&color=000000" alt="Discord" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

