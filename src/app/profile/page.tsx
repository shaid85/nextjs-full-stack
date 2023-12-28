"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function ProfilePage() {
    const router = useRouter()
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
    return (
        <div className="w-full">
            <h1>Profile</h1> 
            <hr />
            <p>Profile Page</p>
            <button className=""
            onClick={logout}
            >Logout</button>
        </div>
    )
}