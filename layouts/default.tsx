import Link from "next/link";
import Container from "components/container";
import Button from "components/button";
import SpecialTitle from "components/specialtitle";
import Nav from "components/nav";

export default function Default({ children }) {
  return (
    <div className="select-none flex flex-col items-stretch min-h-screen">
      <div className="bg-white">
        {/* nav section */}
        <Nav />
      </div>
      <div className="pt-12"/>

      <div className="flex-1">{children}</div>

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
