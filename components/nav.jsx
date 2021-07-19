import Link from "next/link";
import Container from "components/container";
import Button from "components/button";
import { useEffect, useState } from "react";


export default function Nav() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const openNav = () => {
    setIsNavOpen(true);
  }

  const closeNav = () => {
    setIsNavOpen(false);
  }

  useEffect(() => {
    const handler = () => isNavOpen ? setIsNavOpen(false) : null

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  })

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-xl">

        {/* expand button */}
        <div className="fixed right-0 z-0 w-full" style={{ zIndex: -100 }}>
          <div className={`w-16 h-16 mt-px p-2 ml-auto relative z-10`} style={{ transformStyle: "preserve-3d" }}>
            <button
              className={`nav-toggle-btn block h-full w-full m-0 p-2 text-gray-50 border border-none rounded-full shadow-xl transition-transform transform focus:outline-none hover:opacity-95 ${isNavOpen ? 'open' : ''}`}
              style={{ backgroundColor: "#255B98" }}
              onClick={openNav}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className={`flex justify-center fixed left-0 top-0 z-0 items-center w-full transition-transform transform  ${isNavOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div
              onClick={closeNav}
              className={`overlay fixed top-0 left-0 z-0 w-screen h-screen bg-gray-600 opacity-0 ${isNavOpen ? 'visible' : 'invisible'}`}
            />

            <nav className="flex items-center flex-wrap space-x-4 sm:space-x-8 lg:space-x-16 text-sm font-medium overflow-x-auto whitespace-nowrap py-2 px-4 relative z-auto w-full justify-center bg-white">
              <span className="inline-block sm:hidden h-4 border-l-2 border-light"></span>
              <Link href="#about">
                <a className="nav-item inline-block py-4 focus:outline-none focus:underline hover:underline">About</a>
              </Link>
              <span className="inline-block h-4 border-l-2 border-light"></span>
              <Link href="#contact">
                <a className="nav-item inline-block py-4 focus:outline-none focus:underline hover:underline">Contact Me</a>
              </Link>
              <span className="inline-block h-4 border-l-2 border-light"></span>
              <div className="pr-8">
                <Button>Enter Exhibition</Button>
              </div>
            </nav>
          </div>
        </div>

        {/* nav bar */}
        <div className="relative z-10 bg-white hidden md:block">
          <Container>
            <div className="flex items-center justify-center">
              {/* <h4 className="text-xl font-bold text-gray-400">LOGO</h4> */}
              <nav className="flex items-center flex-nowrap space-x-4 sm:space-x-8 lg:space-x-16 text-sm font-medium overflow-x-auto whitespace-nowrap py-2 px-4">
                <Link href="#about">
                  <a className="nav-item inline-block py-4 focus:outline-none focus:underline hover:underline">About</a>
                </Link>
                <span className="inline-block h-4 border-l-2 border-light"></span>
                <Link href="#contact">
                  <a className="nav-item inline-block py-4 focus:outline-none focus:underline hover:underline">Contact Me</a>
                </Link>
                <span className="inline-block h-4 border-l-2 border-light"></span>
                <div className="pr-8">
                  <Button>Enter Exhibition</Button>
                </div>
              </nav>
            </div>
          </Container>
        </div>
      </div>

    </>
  )
}