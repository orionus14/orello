import './CardItem.scss'

interface Header {
  header: string
}

const CardItem = ({ header }: Header) => {

  const removeCard = () => {

  }

  return (
    <>
      {header}
      <button
        onClick={removeCard}
        className='card-item-button-delete'>
        Delete
      </button>
    </>
  )
}

export default CardItem