
export default function ExhibitCard(props) {
    
  return (
    <>
      <div className={`rounded bg-gray-300 ${props.className}`} style={props.style}>
        { props.children }
      </div>
    </>
  )
}