import Link from "next/link";
import Container from "components/container";
import Button from "components/button";
import SpecialTitle from "components/specialtitle";

export default function MainLayout({ children }) {
  return (
    <div className="select-none">
      <div className="bg-white">

        {/* nav section */}
        <div className="sticky top-0 z-50 bg-white shadow-xl">
          <Container>
            <div className="flex items-center justify-between  py-2">
              <h4 className="text-xl font-bold text-gray-400">LOGO</h4>
              <nav className="max-w-max flex items-center space-x-8 text-sm font-medium">
                <Link href="#about">
                  <a className="nav-item inline-block py-4 focus:outline-none focus:underline hover:underline">About</a>
                </Link>
                <span className="inline-block h-4 border-l-2 border-light"></span>
                <Link href="#contact">
                  <a className="nav-item inline-block py-4 focus:outline-none focus:underline hover:underline">Contact Me</a>
                </Link>
                <span className="inline-block h-4 border-l-2 border-light"></span>
                <Button>Return To Home</Button>
              </nav>
            </div>
          </Container>
        </div>

        {/* Hero Section */}
        <div className="bg-gray-100 h-screen pt-36 relative overflow-hidden">
          <SpecialTitle position={{
            top: "40px",
            right: "80px",
          }} animationDirection="left">Personal<br />Space</SpecialTitle>

          <Container>
            <div className="logo">
              <h4 className="text-sm font-semibold">
                Welcome
              </h4>
            </div>

            <div className="flex mt-16">
              <div className="flex-1 space-y-16">
                <h1 className="text-6xl font-bold uppercase transform scale-150 translate-x-1/4" style={{ color: "#255b98" }}>Here's my <br /> personal space</h1>
                <div className="flex items-center space-x-6">
                  {/* <img className="w-10" src="/images/drink.png" alt="an image of a drink for you" /> */}
                  <p className="font-medium text-lg">
                    <span className="font-bold text-gray-500">There’s a lot to see.</span> <br />
                  Grab a drink while I show <br />
                  you around
                  </p>
                </div>
                <Button variant="dark">
                  I want to hire you already
                </Button>
              </div>
              <div className="flex-1" style={{ transform: "rotateY(180deg)" }}>
                {/* <img className="w-full transform -translate-y-64" src="/images/otf-transparent.png" alt="a photo of frank choongsaeng" /> */}
              </div>
            </div>
          </Container>

        </div>
      </div>

      { children}

      <footer className="text-center">
        <p className="py-16 text-sm text-gray-200 bg-black">
          <span className="opacity-90">You've reached the end of my Portfolio. if you like what you see, contact me and let's have a chat.</span>
          <br />
          <span className="font-medium">Thanks for getting this far.</span>
        </p>
        <p className="py-4 text-sm text-gray-200 bg-gray-900">
          <span className="opacity-30">Copyright 2021</span>
        </p>
      </footer>
    </div>
  )
}
