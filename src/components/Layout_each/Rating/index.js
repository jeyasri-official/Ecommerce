import React, { useState } from 'react'
import "./style.css"
const Rating = () => {
    const [rate,setrate]=useState(0);
    const sr=(r)=>{
        if(rate==r)
            setrate(0)
        else
            setrate(r)
    }
  return (
     <div className="star" data-star-rating={rate}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} onClick={()=>sr(i)} className={`star_color_mode ${i <= rate ? 'checked' : ''}`}>★</span>
    ))} {rate}
  </div>
  )
}

export default Rating