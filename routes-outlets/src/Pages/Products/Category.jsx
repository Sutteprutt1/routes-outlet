import React from 'react'
import { useOutlet, useParams } from 'react-router-dom';

const Category = () => {
  const {id, catergory} = useParams()
  console.log(id);
  console.log(catergory);

  
  const outlet = useOutlet();
  return (
    <>
    { outlet || <Categories /> }
    </>
  )
}

export default Category

const Categories = () => {
  return(
    <div>
      <h1>Category</h1>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. At molestias earum nam voluptatem rerum modi aspernatur doloremque aperiam, voluptatum est officia neque animi cupiditate. Odit aperiam incidunt aspernatur iusto voluptatibus!
      Nisi, recusandae? Qui iusto molestias vitae minus harum doloribus facere illum quasi saepe officia corrupti veniam nisi exercitationem ducimus, animi dignissimos ipsum. Alias atque quaerat exercitationem, culpa ducimus id nesciunt!
    </div>
  )
}