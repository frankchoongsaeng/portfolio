
export default function Button(props) {
  return (
    <button
      className={`btn flex items-center px-4 py-2 rounded border-2 ${props.variant === "light" ? "border-gray-200 text-xs text-gray-100 focus:outline-white" : "border-gray-600 text-xs text-gray-700 focus:outline-black"} font-semibold`}
      onClick={props.click ? props.click : () => { }}
    >
      { props.children}
      <span className={`arrow transition-transform transform translate-x-0 inline-block w-5 h-4 ml-2 ${ props.variant === "light" ? "text-gray-100" : "text-gray-600"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="100%" width="100%" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </button >
  )
}