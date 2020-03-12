import React from 'react';
import ControllsItem from '../Controlls-item';
import './Controlls.scss'

const Controlls = ({ data }) => {
  return (
    <div className="controlls">
      {data.map((item) => {
        return <ControllsItem key={item} title={item} />
      })}
    </div>
  )
}

export default Controlls;