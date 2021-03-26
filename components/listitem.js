import Link from 'next/link';

export default function ListItem({ children, link, ...props }) {
  return (
    link
      ? (
        <a href={link} target="_blank" className={"inline-block mt-4 " + props.className}>
          <div {...props} className={"flex items-center space-x-4  p-2 pr-16 bg-gray-900 rounded"}>
            {children}
          </div>
        </a>
      )
      : (
        <div {...props} style={{flexBasis: ""}} className={"flex  items-center space-x-4 mt-4 p-2 px-3 bg-gray-900 rounded " + props.className}>
          {children}
        </div>
      )
  )
}