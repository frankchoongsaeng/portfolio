import { useEffect, useRef, useState } from "react";

export default function SpecialTitle({
  children,
  position,
  variant = "",
  animationDirection = "right",
}) {
  const currEntry = useRef<IntersectionObserverEntry>(null);
  const observer = useRef<IntersectionObserver>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const disableAnimation = useRef(true);

  function scrollTitle() {
    if (currEntry?.current?.isIntersecting) {
      let scrollDistance =
        (titleRef.current.getBoundingClientRect().top + 500) / 5;
      animationDirection === "right"
        ? (titleRef.current.style.transform = `translateX(-${scrollDistance}px)`)
        : (titleRef.current.style.transform = `translateX(${scrollDistance}px)`);
    }
  }

  // first check the width of the screen to determine if
  // the animation should be disabled
  useEffect(() => {
    if (window.innerWidth > 400) {
      const options = {};
      observer.current = new IntersectionObserver((entries, _observer) => {
        currEntry.current = entries[0];
      }, options);
      observer.current.observe(titleRef.current);

      // add a scroll listener to the window and remove it when the component gets unmounted
      window.addEventListener("scroll", scrollTitle);
      return () => {
        window.removeEventListener("scroll", scrollTitle);
      };
    }
  }, []);

  return (
    <>
      {/* for very small screens */}
      <h1
        style={{
          zIndex: "0",
          // fontSize: "150px",
          lineHeight: "0.8",
          ...position,
        }}
        className={`absolute font-bold text-150 sm:text-180 md:text-210 lg:text-240 whitespace-nowrap overflow-hidden ${
          variant === "dark" ? "text-black opacity-30" : "opacity-5 "
        }`}
        ref={titleRef}
      >
        {children}
      </h1>
    </>
  );
}
