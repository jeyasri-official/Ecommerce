import React, { useState, useSyncExternalStore } from 'react'
import "./style.css"
const Price_range = (props) => {
  const [p,sp]=useState(props.min)
  const filter_range=(e)=>{
      sp(e.target.value)
      
  }
  const style ={
      backgroundPosition:`-${p*100/(props.max)}% 100%`
  }
  return (
      <div className='price_range'>
      <h3>Price - range</h3>
      <div className='range'>
         <span>{0}</span> -
          <span> {p}</span>
      </div>
      <div>
        <span>₹0 </span>
        <input onChange={filter_range} value={p} style={style} className='slider'  step={props.step} type="range" min={`${props.min}`} max={Math.round(props.max)}/>
        <span> ₹{Math.round(props.max)}</span>
      </div>
      </div>
  )
}

export default Price_range