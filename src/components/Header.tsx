import Link from 'next/link'
import Container from './Container'
import NavList from './NavList'
import Image from 'next/image'

function Header() {

  return (
    <header  className=" bg-white shadow sticky z-50 top-0 dark:bg-gray-800 text-white">
        <Container>
            <div className="border-gray-200 px-4 md:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto ">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            className="mr-3 h-12 dark:hidden" 
                            alt="Logo"
                            width={200} height={80}
                        />
                        <Image
                            src="/logo2.png"
                            className="mr-3 h-12 hidden dark:block" 
                            alt="Logo"
                            width={200} height={80}
                        />
                    </Link>
                    <NavList />
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header