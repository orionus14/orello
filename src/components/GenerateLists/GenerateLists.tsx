import React from 'react'
import './GenerateLists.scss'

interface cardList {
  cardList: JSX.Element[];
}

const GenerateLists = ({cardList}: cardList) => {
  return (
    <>
      {cardList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  )
}

export default GenerateLists