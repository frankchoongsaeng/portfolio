export default function SmallTitle({ children, addLine, lineDirection = "right" }) {
  return (
    <h1 className="opacity-20 text-sm font-bold">
      { children}
      {addLine && (
        <span className={`block border-b opacity-50 border-black mt-4 transform ${lineDirection === "right" ? "translate-x-10" : ""}  ${lineDirection === "left" ? "-translate-x-1/4" : ""}`}></span>
      )}
    </h1>
  );
}