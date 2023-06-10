export default function SectionTitle({ children, addLine, lineDirection = "right" }) {
  return (
    <h1 className="text-center text-5xl font-bold">
      { children}
      {addLine && (
        <span className={`block border-b mt-4 transform ${lineDirection === "right" ? "translate-x-1/4" : ""}  ${lineDirection === "left" ? "-translate-x-1/4" : ""}`}></span>
      )}
    </h1>
  );
}