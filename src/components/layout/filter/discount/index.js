import React, { useState } from "react";
import "./style.css"
import {  useFilter } from "../Filtercontext.js";
const Discountfilter = (props) => {
  // const [d, sd] = useState(0);
  const {d,sd}=useFilter();
  const filter_range = (e) => {
    sd(e.target.value);
  };
  const style = {
    backgroundPosition: `-${(d * 100) / props.max}% 100%`,
  };
  return (
    <div className="disc_range">
      <h3>Discount</h3>
      <div className="range">
        <span>{d}% or more than</span>
      </div>
      <div>
        <span>0 </span>
        <input
          onChange={filter_range}
          value={d}
          style={style}
          className="disc_slider"
          step={props.step}
          type="range"
          min={0}
          max={Math.floor(props.max)}
        />
        <span> {Math.floor(props.max)}%</span>
      </div>
    </div>
  );
};

export default Discountfilter;
