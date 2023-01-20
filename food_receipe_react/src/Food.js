import React from 'react'

const Food = ({title,img}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt="foodimg" />
    </div>
  )
}

export default Food