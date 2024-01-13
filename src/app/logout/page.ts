"use client"
import React from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default async function logoutPage() {
    const router = useRouter()

        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error: any) {
            console.log("Logout failed", error.message);            
            toast.error(error.message);
        }
    

}

