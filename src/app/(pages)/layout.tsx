"use client"
import { Toaster } from "react-hot-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeContextProvider from '@/context/ThemeContextProvider';
import Container from '@/components/Container';
import { AuthProvider } from "@/context/authContext";
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(true); 


  useEffect(() => {
    const getLoginStatus =async () => {
      await axios.get('/api/users/me')
          .then(() => setAuthStatus(true))
          .finally(() => setLoader(false));
    }  
    getLoginStatus()
  }, [])
  
  return (

        <ThemeContextProvider>
          <AuthProvider value={{ authStatus, setAuthStatus }}>
          {!loader && (
            <>
              <Header />
                <div className="className='w-full py-8 bg-white text-gray-900 dark:bg-gray-800 dark:text-white min-h-screen'">
                  <Container>
                      {children}
                  </Container>
                </div>  
                <Toaster />
              <Footer />  
            </>  
          )}    
          </AuthProvider>
         </ThemeContextProvider>

  )
}
