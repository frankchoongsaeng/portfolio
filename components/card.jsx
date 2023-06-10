export default function Card({ children, title }) {
  return (
    <div className="p-6 rounded text-sm text-gray-200 bg-gray-800">
      <h3 className="" style={{ fontWeight: 600}}>{title}</h3>
      <div className="card flex flex-col lg:flex-row flex-wrap">
        { children }
      </div>
    </div>
  )
}