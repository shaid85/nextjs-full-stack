"use client"
import Link from 'next/link'
import useThemeCnr from '@/context/ThemeContext';
import { useEffect, useState } from 'react';
import { logout } from '@/helpers/userService';
import { usePathname, useRouter } from "next/navigation";
import useAuth from "@/context/useAuth";

function NavList() {
    const router = useRouter()
    const pathname = usePathname()
    const {authStatus,setAuthStatus} = useAuth()
    const {themeMode, darkTheme, lightTheme} = useThemeCnr()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus){
            darkTheme()
        }else{
            lightTheme()
        }
    }
    const [hidden, setHidden] = useState("max-h-0")

    const handelclick = () => {
        const btn = document.querySelector("#showmenu");

        if(hidden != "max-h-40"){
            setHidden("max-h-40")
        }else{
            setHidden("max-h-0")
        }
    }

    useEffect(() => {
        setHidden("max-h-0")
    }, [])

    const ulclick = () => {
        setTimeout(() => {
            setHidden("max-h-0")
            }, 100);   
    } 

    async function doLogout () {
        try {
          const result = await logout()
          setAuthStatus(false);
          router.push('/login')
        } catch (error) {
            throw error
        }
    }
    
    const navItem = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "About",
            slug: "/about",
            active: true
        },
        {
            name: "Profile",
            slug: "/profile",
            active: authStatus,
        },
        
    ]

  return (
    <>
    <nav className="flex items-center md:order-2">  
        { authStatus && (
            <>  

        <Link href="#" onClick={doLogout} className="text-gray-800 dark:text-white font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2 lg:mr-0 focus:outline-none">
            Logout
        </Link>             
            </>
        )} 
        { !authStatus && (
            <>
        <Link href="/login" className="text-gray-800 dark:text-white font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2 lg:mr-0 focus:outline-none">
            Login
        </Link>                    
        <Link href="/signup" className="text-gray-800 dark:text-white font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2 lg:mr-0 focus:outline-none">
            Signup
        </Link> 
            </>
        )}


        <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={onChangeBtn}
                    checked={themeMode === "dark"}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white hidden md:block">Toggle Theme</span>
            </label>

            <div className="md:hidden flex items-center md:order-2 ml-2 mt-1">
                <button onClick={handelclick}
                    id="showmenu" className="text-3xl cursor-pointer " >
                    <div className="hover:cursor-pointer ">
                        <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                        <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                        <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                    </div>
                </button>
            </div>                 
    </nav>
    <nav
    className={`md:!max-h-none md:!overflow-hidden w-full overflow-hidden md:flex md:items-center transition-all md:w-auto mobilemenu ${hidden}`}
    id="mobile-menu-2"
>  
        <div className="text-sm md:flex-grow">
            <ul onClick={ulclick} className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            {navItem.map((item) => (
                item.active ? (                
                <li key={item.slug}>
                    <Link href={item.slug} className={`${pathname === item.slug ? 'text-orange-700' : '' } text-gray-800 dark:text-white block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-black/10 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`}>
                    {item.name}
                    </Link>
                </li>
                ) : null

            ))}
                                 

            </ul>

                    
        
        </div>            
    </nav>
    </>
  )
}

export default NavList