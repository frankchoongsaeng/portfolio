import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="header w-full">
        <div className="container flex justify-between items-center bg-yellow-500">

          <div className="logo">logo</div>
          <nav className="max-w-max flex items-center space-x-4">
            <Link href="#about">
              <a className="nav-item inline-block p-4">About</a>
            </Link>
            <Link href="#contact">
              <a className="nav-item inline-block p-4">Contact Me</a>
            </Link>

            {/* for mobile */}
            <div className="text-center flex flex-col items-stretch fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 bg-yellow-500">
              <Link href="#about">
                <a className="nav-item inline-block p-4">About</a>
              </Link>
              <Link href="#contact">
                <a className="nav-item inline-block p-4">Contact Me</a>
              </Link>
            </div>

            {/* nav collapse icon */}
            <button className="nav-toggle-icon w-8 h-8 transform rotate-180 bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="100%" width="100%" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </nav>
        </div>

        <div className="hero">

        </div>
      </div>
    </div>
  )
}
