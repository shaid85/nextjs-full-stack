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
    const [isshow, setIsshow] = useState(false)

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
    
    const handleClick = (e:any) => {
        e.preventDefault()
        setIsshow((prev) => !prev)
    }    

    return (
        <div
        className='flex items-center justify-center w-full text-black py-8'
        >
          <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
          
            <h2 className="text-center text-2xl font-bold leading-tight">{loading ? 'loading...' : 'Signup'}</h2>
            <p className="mt-2 text-center text-base text-black/60">
                        Don&apos;t have any account?&nbsp;
                        <Link
                            href="/login"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Login
                        </Link>
            </p>
            
          
                <label className='block mb-1 pl-1' htmlFor=''>Username: </label>
                <input 
                type="text" className='px-3 py-2 rounded-lg bg-white 
                text-black outline-none focus:bg-gray-50 duration-200 border 
                border-gray-200 w-full'
                placeholder='username' value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                />
                <label className='block mb-1 pl-1' htmlFor=''>Email: </label>
                <input 
                type="email" className='px-3 py-2 rounded-lg bg-white 
                text-black outline-none focus:bg-gray-50 duration-200 border 
                border-gray-200 w-full'
                placeholder="Type your email..."
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                />
            <div className="w-full relative">
                        <label className='block mb-1 pl-1' htmlFor=''>Password: </label>
                        <input className='w-full px-3 py-2 rounded-lg bg-white 
                text-black outline-none focus:bg-gray-50 duration-200 border 
                border-gray-200'
                        type={isshow ? "text" : "password"}
                        placeholder="Enter your password..."
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        />
                        <a type='button'
                        onClick={handleClick}
                        className="absolute top-10 right-3 z-10 cursor-pointer text-blue-400">{isshow ?  
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
            <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>

            : 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
            <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
            </svg>

            }</a>
            </div>
            <button className='px-4 py-2 rounded-sm mt-3 bg-blue-600 text-white disabled:bg-gray-400' onClick={onSignup}
            disabled={buttonDisabled}>Create account</button>
          
      </div>


    </div>

    ) 
}