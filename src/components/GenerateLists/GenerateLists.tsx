import './GenerateLists.scss'

interface Lists {
  lists: JSX.Element[];
}

const GenerateLists = ({ lists }: Lists) => {
  return (
    <>
      {lists.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  )
}

export default GenerateLists