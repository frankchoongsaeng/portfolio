import { useEffect, useRef, useState, } from "react"

export default function SpecialTitle({ children, position, variant, animationDirection = "right" }) {

  const currEntry = useRef({});
  const observer = useRef(null); 
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
    observer.current = new IntersectionObserver(
      (entries, _observer) => {
        currEntry.current = entries[0];
      },
      options
    );
    observer.current.observe(titleRef.current);

    // add a scroll listener to the window and remove it when the component gets destroyed
    window.addEventListener("scroll", scrollTitle);
    return () => {
      observer.current.unObserve();
      window.removeEventListener("scroll", scrollTitle);
    }
  }, [])

  return (
    <h1
      style={{
        zIndex: "0",
        fontSize: "230px",
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