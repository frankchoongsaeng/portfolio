export default function Button(props) {
  return (
    <button
      className={`btn flex items-center px-4 py-2 rounded border-2 ${
        props.variant === "light"
          ? "border-gray-200 text-xs text-gray-100 focus:outline-white"
          : "border-gray-600 text-xs text-gray-700 focus:outline-black"
      } font-semibold`}
      onClick={props.click ? props.click : () => {}}
      disabled={props.disabled}
    >
      {props.children}
      {props.isLoading ? (
        <svg
          className="animate-spin ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <span
          className={`arrow transition-transform transform translate-x-0 inline-block w-5 h-5 ml-2 ${
            props.variant === "light" ? "text-gray-100" : "text-gray-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="100%"
            width="100%"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      )}
    </button>
  );
}
