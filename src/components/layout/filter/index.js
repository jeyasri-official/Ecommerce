import React from "react";
import Price_range from "./price/Price_range.js";
import Discountfilter from "./discount/index.js";
import "./style.css"
const Filter = ({products}) => {
  function max_min(cond) {
    let maxmin = products.reduce((maxmin,{price}) => {
      return (cond?price > maxmin:price<maxmin) ? price : maxmin;
    }, 0);
    return Math.ceil(maxmin);
  }

  function maxDiscount() {
    let max = products.reduce((max, { discountPercentage }) => {
      return discountPercentage > max ? discountPercentage : max;
    }, 0);
    return max;
  }
  return (
    <div className="filter_container">
      <div class="filter_items">
          <Price_range min={max_min(false)} max={max_min(true)} step={10} />
          <Discountfilter min={0} max={maxDiscount()} step={1} />
      </div>
      <div className="setfilter">
        <button>Clear</button>
        <button >show</button>
      </div>
    </div>
  );
};

export default Filter;
