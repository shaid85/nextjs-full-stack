"use client"
import React from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAuth from '@/context/useAuth';

export default async function Logout() {
    const router = useRouter()
    const {setAuthStatus} = useAuth()
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            setAuthStatus(false);
            router.push('/login')
        } catch (error: any) {
            console.log("Logout failed", error.message);            
            toast.error(error.message);
        }
    

} 

