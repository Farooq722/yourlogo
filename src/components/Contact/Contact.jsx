import React from 'react';
export default function Contact(){

    return <div>
        <div className="flex justify-evenly items-center space-y-4 ">
            <div className="space-y-4 bg-blue-200 p-12 m-16 my-20 ml-20 rounded-lg">
                <h1 className="font-serif font-extrabold text-3xl">Get in touch:</h1>
                <h1 className="font-thin text-lg">Fill in the form to start a <span className="font-sans font-bold italic">conversation</span></h1>
                <div className="space-y-3">
                    <div className="flex justify-start items-center gap-4">
                    <img src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000" alt=""
                    className="w-4" />
                    <h1 className="font-sans font-medium">Aceme inc, 
                    Street, State, Postal Code</h1>
                    </div>

                    <div className="flex justify-start items-center gap-4">
                    <img src="https://img.icons8.com/?size=100&id=9660&format=png&color=000000" alt="" className="w-4"/>
                    <h1 className="font-sans font-medium">+44 1234567890</h1>
                    </div>

                    <div className="flex justify-start items-center gap-4">
                    <img src="https://img.icons8.com/?size=100&id=53388&format=png&color=000000" alt="" 
                    className="w-4"/>
                    <h1 className="font-sans font-medium">info@acme.org</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-10 p-8 px-12 mr-20 rounded-xl border-r-emerald-800 bg-orange-300">
                <input type="Full Name" placeholder="Full Name" className="text-black p-2 px-4 rounded-lg"/>
                <input type="Email" placeholder="Email"  className="text-black p-2 px-4 rounded-lg"/>
                <input type="text" placeholder="Phone Number"  className="text-black p-2 px-4 rounded-lg"/>
                <div className="text-center">
                    <button className="text-white items-center rounded bg-cyan-900 p-1 px-4 hover:bg-green-500">Submit</button>
                </div>
            </div>
        </div>
    </div>
}

/*

<div className="flex justify-items-center items-center">
                    <div className="">
                            
                    </div>
                    <div>
                  
                        
                      
                    </div>
                </div>

*/