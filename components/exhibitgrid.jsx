import ExhibitCard from "components/exhibitcard";

export default function ExhibitGrid(props) {

  return (
    <>
      <div
        style={{
          
        }}
        className="exhibitgrid"
      >
        <ExhibitCard
          style={{
            gridColumn: "span 2",
            gridRow: "span 8"
          }}
          className="bg-blue-300"
        >
          image 1

        </ExhibitCard>

        <ExhibitCard
          style={{
            gridColumn: "span 3",
            gridRow: "span 5"
          }}
          className="bg-blue-300"
        >
          image 2

        </ExhibitCard>

        <ExhibitCard
          style={{
            gridColumn: "span 4",
            gridRow: "span 7"
          }}
          className="bg-blue-300 hidden"
        >
          image 3

        </ExhibitCard>

        <ExhibitCard
          style={{
            gridColumn: "span 2",
            gridRow: "span 4"
          }}
          className="bg-blue-300 hidden"
        >
          image 4

        </ExhibitCard>
        
        <ExhibitCard
          style={{
            gridColumn: "span 2",
            gridRow: "9 / span 4"
          }}
          className="bg-blue-300"
        >
          image 5

        </ExhibitCard>

        <ExhibitCard
          style={{
            gridColumn: "span 3",
            gridRow: "span 7"
          }}
          className="bg-blue-300"
        >
          image 6

        </ExhibitCard>

        <ExhibitCard
          style={{
            gridColumn: "span 2",
            gridRow: "span 5"
          }}
          className="bg-blue-300 hidden"
        >
          image 7

        </ExhibitCard>

        <ExhibitCard
          style={{
            gridColumn: "span 2",
            gridRow: "span 5"
          }}
          className="bg-blue-300 hidden"
        >
          image 8

        </ExhibitCard>

        <ExhibitCard
          style={{
            gridColumn: "10 / span 2",
            gridRow: "5 / span 8"
          }}
          className="bg-blue-300 hidden"
        >
          image 9

        </ExhibitCard>
      </div>
    </>
  )
}