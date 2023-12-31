"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";


export default function ProfilePage() {
    const router = useRouter()
    const [userData, setUserData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error: any) {
            console.log("Logout failed", error.message);
            
            toast.error(error.message);
        }
    }

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
        <div className="w-full">
            <h1>Profile</h1> 
            <hr />
            <p>Profile Page</p>
            <h2 className="p-1 rounded bg-green-500">{userData === "nothing" ? "Nothing" : <Link href={`/profile/${userData}`} >{userData}</Link>}</h2>
            <button className=""
            onClick={logout}
            >Logout</button>

            <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >GetUser Details</button>
        </div>
    )
}