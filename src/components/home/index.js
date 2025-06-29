import React from 'react'
import { useProduct } from '../../products/products.js'
import "./style.css"
import Layout from '../layout/index.js';
const Home = () => {
    const {products}=useProduct();
  return (
    <div className='home-main'>
        <Layout filter_container={true} products={products}/>
    </div>
  )
}

export default Home