import React from 'react'
import { useOutlet } from 'react-router-dom';

const Shop = () => {
    const outlet = useOutlet();
    return (
      <>
      { outlet || <Shopping /> }
      </>
    )
}

export default Shop


const Shopping = () => {
    return(
        <h1>Shop</h1>
    )
}