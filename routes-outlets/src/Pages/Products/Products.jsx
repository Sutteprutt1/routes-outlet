import React from 'react'
import { useOutlet } from 'react-router-dom'

const Products = () => {
  const outlet = useOutlet();
  return (
    <>
    { /* Hvis outlet er tom, så vis ProductInfo ellers vis indhold af outlet*/}
    { outlet || <ProductInfo />}
    </>
  )
}

const ProductInfo = () => {
  return(
    <>
    <h1>Products</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam autem dolorem eveniet! Ratione excepturi vel possimus quidem debitis, ea ullam numquam maxime, voluptas modi blanditiis quaerat placeat sapiente nobis quae.
    A vel rem repellendus, maiores consequuntur veniam aspernatur iusto quas voluptatibus debitis eaque hic voluptatum alias, non itaque, quisquam laudantium optio delectus voluptas cupiditate tempora ullam. Voluptatum accusantium excepturi dolores!
    Et dolore quia minus excepturi aut recusandae itaque sint iusto doloremque laboriosam commodi nemo, consectetur animi quas eveniet sit repellendus unde eos. Tempore aperiam placeat velit sequi perferendis quam sit!
    Ea quis quasi saepe fugit ipsum eius recusandae, vero rem, officia in dolor voluptate? Dicta quaerat nihil esse dolore excepturi ex modi ducimus. Distinctio consequuntur laudantium quia! At, ipsum itaque?
    Fugiat ducimus deleniti quibusdam rem cumque minus adipisci nesciunt, animi, nostrum dolores eligendi eos? Error fugiat iure voluptatibus voluptatem corrupti animi modi quam ea atque harum. Praesentium nisi perspiciatis facilis!</p>
    </>
  )
}


export default Products