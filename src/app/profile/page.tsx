"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";


export default function ProfilePage() {
    const router = useRouter()
    const [userData, setUserData] = useState("nothing")

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setUserData(res.data.data._id)   
        toast.success("Success",{
            duration: 5000,
            icon: '🔥',
          });
    }
    
    return (
        <div className="text-center mx-auto w-80 py-16">
            <h1>Profile Page</h1> 
            <p>-------------</p>
            <h2 className="p-1 rounded bg-green-500">{userData === "nothing" ? "Nothing" : <Link href={`/profile/${userData}`} >{userData}</Link>}</h2>
            <Link href="/logout" className=" bg-slate-600 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"           
            >Logout</Link>
<br/>
            <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >GetUser Details</button>
        </div>
    )
}