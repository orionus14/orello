import './GenerateLists.module.scss'

interface ListItem {
  id: string;
  element: JSX.Element;
}

interface Lists {
  lists: ListItem[];
}

const GenerateLists = ({ lists }: Lists) => {
  return (
    <>
      {lists.map(list => (
        <div key={list.id}>{list.element}</div>
      ))}
    </>
  )
}

export default GenerateLists