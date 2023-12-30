"use client"
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/navigation';
import toast from 'react-hot-toast';

export default function SingupPage() {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/verifyemail");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
    

    return (
        <div className="mx-auto">
            <h1>Signup</h1>
            <input type="text" placeholder='username' value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})} />
            <input type="text" placeholder='email' value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})} />
            <input type="text" placeholder='password' value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})} />
            {buttonDisabled ? "" : ""}
            <button onClick={onSignup}
            disabled={buttonDisabled}>Sign Up</button>
        </div>
    ) 
}