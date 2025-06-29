import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useProduct } from '../../../products/products.js';
import { v4 as uuid } from 'uuid';
import "./style.css"
import ImgScroller from '../image_scroll/index_copy.js';
const ShowAllComments = () => {
    const param = useParams();
    const {products}=useProduct();
    const navigate=useNavigate();
    const product = products.filter((value) => value.id == param.pid).at(0);
    console.log(product)
  return (
    <div className='comment_container'> 
    { product &&
        <div>
        <div className='sticky_in_comments'>
            <button className='close_comments' onClick={()=>navigate(-1)}>Go back ⬅</button>
            <h1 className="ptitle">{product.title}</h1>
            <h2 className="comtitle">Comments</h2>
        </div>
            <div className='allcomments'>
                        
                {product.reviews.map((rev) => {
                return (
                    <div className='each_comment' key={uuid()}>
                    <div>{rev.rating}{" "}
                        <i style={{backgroundPosition: `-${rev.rating * 20}% 100%`,}} class="entire_rate viewer_rate fa fa-solid fa-star"></i>
                    </div>
                    <div>{rev.comment}</div>
                    <div className="user_detail">
                        {rev.reviewerName} <span>({rev.reviewerEmail})</span>
                    </div>
                    </div>
                );
                })}
            </div>
        </div>
    }   
    </div>
  
)
}

export default ShowAllComments