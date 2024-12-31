

export default function Home(){

    return(
        <div className="w-full ">
            <div className="flex justify-evenly items-center mt-10">
                <div className="w-4/12">
                    <img src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="Pic"/>
                </div>
                <div>
                    <h1 className="text-3xl font-extrabold font-serif text-start">Download Now</h1>
                    <h2 className="text-2xl  text-end font-bold">Lorem, ipsum.</h2>
                    <button className="bg-red-700 text-white py-2 px-3 rounded-lg mt-3 font-serif hover:bg-slate-400 hover:text-black">Download now</button>
                </div>

            </div>
            <div className="mt-32 grid place-items-center">
                <div className="h-6/6 max-w-md"><img src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="" /></div>
            </div>
                <div className="text-2xl text-center font-sans font-extrabold my-8">Lorem, ipsum. Lorem, ipsum.</div>
        </div>
    )
}