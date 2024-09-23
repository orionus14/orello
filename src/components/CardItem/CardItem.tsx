import './CardItem.scss'

interface Header {
  header: string
}

const CardItem = ({ header }: Header) => {
  return (
    <>
      {header}
      <button className='card-item-button-delete'>
        Delete
      </button>
    </>
  )
}

export default CardItem