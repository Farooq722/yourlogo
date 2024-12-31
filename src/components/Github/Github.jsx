import React from 'react';
import { useEffect, useState } from "react"

export default function Github(){
    const [data, setData] = useState([]);

    // useEffect(() => {
    //         const res = await fetch("https://api.github.com/users/Farooq722");
    //         const data = await res.json();
    //         console.log(data);
    //         setData(data);
    //         // .then(res => res.json())
    //         // .then(data => setData(data))
    //         return data;
    // }, []);


    useEffect(() => {
        const gitpfp = async () => {
            const res = await fetch("https://api.github.com/users/Farooq722");
            const data = await res.json();
            setData(data);
        }
        gitpfp();
    }, [])

    return <div>
        <div className="flex justify-center items-center gap-x-1 gap-y-10 p-6 left-0">
            <div><img src={data.avatar_url} alt="Github Pic" 
            className=" rounded-2xl shadow-inherit border-transparent bg-blue-900 w-5/12 ml-20 p-1 -left"
            /></div>
            <div className="space-y-2 w-5/12 items-start font-serif text-lg">
                <h1 className="text-2xl font-bold">Name: {data.name}</h1>
                <h1>Company: {data.company}</h1>
                <h1>Follower's on Github : {data.followers}</h1>
                <h1>Location: {data.location}</h1>
                <h1 className="text-wrap">Bio: {data.bio}</h1>
                <h1>Repositories: {data.public_repos}</h1>
            </div>
        </div>
    </div>
}