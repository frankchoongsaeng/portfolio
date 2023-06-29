export default function Quote(props) {
  return (
    <>
      <p className={`text-sm quote italic text-center transform skew-x-12 ${props.className} ${props.variant === "dark" ? 'text-gray-700' : 'text-gray-200'}`}>
        <span className="script-font text-xl">
          {props.children && (
            <>"{props.children}" </>
          )}
        </span>
        {" "}
        <span>{props.author && `- ${props.author}`}</span>
      </p>
    </>
  )
}