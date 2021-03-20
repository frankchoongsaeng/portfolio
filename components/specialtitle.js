import { useEffect, useRef, useState, } from "react"

export default function SpecialTitle({ children, position, variant, animationDirection = "right" }) {

  const currEntry = useRef({})
  const titleRef = useRef(null);

  function scrollTitle() {
    if (currEntry.current.isIntersecting) {
      let scrollDistance = (titleRef.current.getBoundingClientRect().top + 500) / 5;
      animationDirection === "right"
        ? titleRef.current.style.transform = `translateX(-${scrollDistance}px)`
        : titleRef.current.style.transform = `translateX(${scrollDistance}px)`;
    }
  }

  useEffect(() => {

    const options = {};
    new IntersectionObserver(
      (entries, _observer) => {
        currEntry.current = entries[0];
      },
      options
    ).observe(titleRef.current);

    // add a scroll listener to the window and remove it when the component gets destroyed
    window.addEventListener("scroll", scrollTitle);
    return () => {
      window.removeEventListener("scroll", scrollTitle);
    }
  }, [])

  return (
    <h1
      style={{
        zIndex: "0",
        fontSize: "250px",
        lineHeight: "200px",
        ...position
      }}
      className={`absolute font-bold ${variant === 'dark' ? 'text-black opacity-30' : 'opacity-5 '}`}
      ref={titleRef}
    >
      { children}
    </h1>
  )
}