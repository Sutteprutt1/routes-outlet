import React from 'react'
import Card from './Cards/Card';

const ProductItems = ({ items }) => {
    console.log(items);
  return (
    <div className="card-list">
      {items.map((item) => <Card key={item.id} data = {item} />
      )}
    </div>
  )
}

export default ProductItems