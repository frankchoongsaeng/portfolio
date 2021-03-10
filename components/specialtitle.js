export default function SpecialTitle({ children, position }) {
  return (
    <h1
      style={{
        zIndex: "0",
        fontSize: "250px",
        lineHeight: "200px",
        ...position
      }}
      className="absolute font-bold opacity-5"
    >
      { children}
    </h1>
  )
}