import React from 'react';
import './GenerateLists.module.scss';
import { IItems } from '../../types';

const GenerateLists: React.FC<IItems> = ({ items }) => {
  return (
    <>
      {items.map(list => (
        <div key={list.id}>{list.element}</div>
      ))}
    </>
  )
}

export default GenerateLists