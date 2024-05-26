import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-6'>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
    </div>
  )
}

export default ProductCard