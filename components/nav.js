import Link from "next/link";
import Container from "components/container";
import Button from "components/button";
import { useEffect, useRef, useState } from "react";


export default function Nav() {

  const [shouldShowNav, setShouldShowNav] = useState(null);

  useEffect(() => {

    setShouldShowNav(window.scrollY < (window.innerHeight + 200));

    const scrollHandler = (e) => {
      if (e.currentTarget.scrollY < (e.currentTarget.innerHeight + 200)) {
        setShouldShowNav(true);
      }
      else if (e.currentTarget.scrollY > (e.currentTarget.innerHeight + 200)) {
        setShouldShowNav(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);

  }, [])

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-xl">

        {/* expand button */}
        <div>
          <div className="fixed right-0 w-16 h-16 mt-px p-2">
            <button className="block h-full w-full m-0 p-2 text-gray-50 border border-none rounded-full shadow-xl" style={{ backgroundColor: "#255B98" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* nav bar */}
        <div className="">
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