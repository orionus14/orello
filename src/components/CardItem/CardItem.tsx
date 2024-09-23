import './CardItem.scss'

interface Header {
  header: string
}

const CardItem = ({ header }: Header) => {
  return (
    <div>
      {header}
    </div>
  )
}

export default CardItem