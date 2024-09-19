import React from 'react'
import './CardList.scss'

interface Header {
  header: string
}

const CardList = ({header}:Header) => {
  return (
    <div className='card-list'>
      {header}
    </div>
  )
}

export default CardList
