import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-2">
    <div className="flex flex-wrap -mx-2 py-20 gap-y-8">
        <div className="w-full sm:w-7/12 px-2 flex justify-center flex-wrap items-center">
            <div className="relative w-full flex justify-center flex-wrap">
 
                <div className="w-full">
                    <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white mb-6">
                        NextJS 14 Authentication

                    </h1>
                    <p className="mb-3">
                        Integrate secure user authentication into your Next.js web applications using <strong>Express, Mongodb</strong>. To ensuring the highest level of security for your users we implemented the following authentication functionality :

                    </p>
                    <div className="full text-left">
                        <ul className="list-disc list-inside text-slate-900 dark:text-slate-200">
                          <li>After signup - Email verification</li>
                          <li>Forget Password - Email reset code</li>
                          <li>Login - jwt token</li>
                        </ul>                      
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full sm:w-5/12 px-2 flex flex-wrap justify-end">
                <div className="w-full max-w-[100px] mb-4">
                    <Image src="/next.svg" alt="Logo" width={600} height={450} />
                </div>
        </div>
    </div>
</div>
  )
}

export default Home