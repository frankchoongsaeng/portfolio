export default function ProgressBar({ progress = 50 }) {
  return (
    <div
      style={{ height: "5px" }}
      className="w-full bg-gray-300 mt-px rounded-full overflow-hidden">
      <div
        style={{
          width: `${progress}%`
        }}
        className="bg-green-400 h-full"></div>
    </div>
  )
}