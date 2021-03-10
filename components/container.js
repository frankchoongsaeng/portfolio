export default function Container({ children }) {
  
  return (
    <div className="container mx-auto relative z-10">
      { children }
    </div>
  )
}