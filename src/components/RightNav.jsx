import Link from 'next/link'
import React from 'react'

function RightNav() {
    
  return (
    <>
        <Link href="/login" className="text-gray-800 dark:text-white font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2 lg:mr-0 focus:outline-none">
            Login
        </Link>                    
        <Link href="/signup" className="text-gray-800 dark:text-white font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2 lg:mr-0 focus:outline-none">
            Signup
        </Link> 
    </>
  )
}

export default RightNav