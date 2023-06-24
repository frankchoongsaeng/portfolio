import Link from "next/link";
import Container from "components/container";
import Button from "components/button";
import SpecialTitle from "components/specialtitle";
import Nav from "components/nav";

export default function MainLayout({ children }) {
  return (
    <div className="select-none">
      <div className="bg-white">
        {/* nav section */}
        <Nav />

        {/* Hero Section */}
        <div className="bg-gray-100 min-h-screen pt-36 relative overflow-hidden">
          <SpecialTitle
            position={{
              top: "40px",
              right: "80px",
            }}
            animationDirection="left"
          >
            Personal
            <br />
            Space
          </SpecialTitle>

          <Container>
            <div className="logo">
              <h4 className="text-sm font-semibold">Welcome</h4>
            </div>

            <div className="flex mt-8 md:mt-16">
              <div className="flex-1 space-y-8 md:space-y-16">
                <h1
                  className="text-6xl sm:text-7xl md:text-6xl font-bold uppercase transform md:scale-150 md:translate-x-1/4"
                  style={{ color: "#255b98" }}
                >
                  Here's my <br /> personal space
                </h1>
                <div className="flex items-center space-x-6">
                  {/* <img className="w-10" src="/images/drink.png" alt="an image of a drink for you" /> */}
                  <p className="font-medium text-lg">
                    <span className="font-bold text-gray-500">
                      There’s a lot to see.
                    </span>{" "}
                    <br />
                    Grab a drink while I show <br />
                    you around
                  </p>
                </div>
                <Button variant="dark">
                  <Link href="#contact">Skip that, let's get in touch.</Link>
                </Button>
              </div>
              <div className="flex-1" style={{ transform: "rotateY(180deg)" }}>
                {/* <img className="w-full transform -translate-y-64" src="/images/otf-transparent.png" alt="a photo of frank choongsaeng" /> */}
              </div>
            </div>
          </Container>
        </div>
      </div>

      {children}

      <footer className="text-center">
        <p className="py-16 px-6 text-sm text-gray-200 bg-black">
          <span className="opacity-90">
            You've reached the end of my Portfolio. if you like what you see,
            contact me and let's have a chat.
          </span>
          <br />
          <span className="font-medium">Thanks for getting this far.</span>
        </p>
        <p className="py-4 px-6 text-sm text-gray-200 bg-gray-900">
          <span className="opacity-30">Copyright 2021</span>
        </p>
      </footer>
    </div>
  );
}
