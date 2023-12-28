"use client"
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post('api/users/login', user)
            console.log("Login success ", response.data);
            toast.success("Login success")
            router.push("/profile");
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
        
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
    

    return (
        <div className="mx-auto">
            <h1>{loading ? 'loading...' : 'Login'}</h1>
            <input type="text" placeholder='email' value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})} />
            <input type="text" placeholder='password' value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})} />
            {buttonDisabled ? "" : ""}
            <button onClick={onLogin}
            disabled={buttonDisabled}>Login</button>
        </div>
    )
}