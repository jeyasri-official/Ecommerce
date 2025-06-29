import React from 'react'
import { useProduct } from '../../../products/products.js'
import Layout from '../../layout/index.js';

const Related = ({curr_product}) => {
    const { products }=useProduct();
    const rproducts= products.filter((value)=>value.id!=curr_product.id && value.category===curr_product.category);
  return (
    <>
        <Layout products={rproducts}/>
    </>
  )
}

export default Related