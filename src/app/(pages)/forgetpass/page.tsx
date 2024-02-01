"use client"
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function LoginPage() {

    const [user, setUser] = useState({
        email: "",
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSend = async () => {
        try {
            setLoading(true)
            const response = await axios.post('api/users/sendforgettoken', user)
            console.log("Forget token successful ", response.data);
            toast.success("Token sent, please check",{
                duration: 5000,
                icon: '🔥',
              })
            setUser({email: ""})
        } catch (error: any) {
            console.log("Forget token  failed", error.message);
            toast.error(error.response.data.error+" - "+error.response.status)
        } finally {
            setLoading(false)
        }
        
    }

    useEffect(() => {
        if(user.email.length > 12 ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
    

    return (
        <div
        className='flex items-center justify-center w-full text-black py-8'
        >
          <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
          
            <h2 className="text-center text-2xl font-bold leading-tight">{loading ? 'loading...' : 'Password Reset Request'}</h2>
            <p className="mt-2 text-center text-base text-black/60">
                        Don&apos;t have any account?&nbsp;
                        <Link
                            href="/signup"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign Up
                        </Link>
            </p>
            
          
                <label className='block mb-1 pl-1' htmlFor=''>Email: </label>
                <input 
                type="email" className='px-3 py-2 rounded-lg bg-white 
                text-black outline-none focus:bg-gray-50 duration-200 border 
                border-gray-200 w-full'
                placeholder="Type your email..."
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                />

            <button className='px-4 py-2 rounded-sm mt-3 bg-blue-600 text-white disabled:bg-gray-400' onClick={onSend}
            disabled={buttonDisabled}>Send reset code</button>
            <Link className='w-full block pt-3 hover:text-red-500' href="/login">Back to login page</Link>
          
      </div>


    </div>

    )
}