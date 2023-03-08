import React from 'react'
import { products } from '../data'
import ProductCards from './ProductCards'
const Products = () => {
  return (
    <div className='product-flex'>
        {
            products.map((product) => (
                <ProductCards key={product.id} product={product}/>
            ))
        }
    </div>
  )
}

export default Products