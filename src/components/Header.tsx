import Link from 'next/link'
import Container from './Container'
import NavList from './NavList'

function Header() {

  return (
    <header  className=" bg-white shadow sticky z-50 top-0 dark:bg-gray-800 text-white">
        <Container>
            <div className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto ">
                            <Link href="/" className="flex items-center">
                                <img
                                    src="https://res.cloudinary.com/shaidislam/image/upload/v1704099883/apki3mddt2s8btqwr49s.png"
                                    className="mr-3 h-12 dark:hidden" 
                                    alt="Logo"
                                />
                                <img
                                    src="https://res.cloudinary.com/shaidislam/image/upload/v1704099884/bsaiaiaoisor2lkwgdi6.png"
                                    className="mr-3 h-12 hidden dark:block" 
                                    alt="Logo"
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