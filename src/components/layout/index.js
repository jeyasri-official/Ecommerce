import React, { useState } from "react";
import "./style.css";
import Filter from "./filter/index.js";
import { Route, useNavigate } from "react-router";
import Popuptop from "../popup/index.js";

const Layout = ({ products ,filter_container }) => {
  const [filter, setfilter] = useState(false);
  const [wish, setwish] = useState([]);
  const [wp,setw]=useState(null);
  const navigate = useNavigate();
  
  const getProduct = (id) => {
    navigate(`/productDetail/${id}`)
  };
  
  const wishlist = (p) => {
    if(wish.includes(p.id)){
      setwish(wish.filter(value=>value!=p.id));
      setw(`${p.title} is removed from wishlist`)
    }
    
    else{
      setwish([...wish,p.id]);
      setw(`${p.title} is added to wishlist`)
    }
  };
  
  return (
    <div className="layout_container">
      {wp?<Popuptop key={wp} text={wp}/>:""}
      {filter_container &&
      <div className="filterContainer">
        <div
          className={`filter ${filter ? "open" : "close"}`}
          
        >
          <span onClick={() => {
            setfilter(!filter);
          }}>Filter <i className="fa">&#xf0b0;</i></span>
        </div>
        {filter && <Filter products={products} />}
      </div>}
      <div className="layout">
        <ul>
          {products.map((p) => {
            return (
              <li key={p.id} onClick={() => getProduct(p.id)} className="card">
                <div className="wish_container" onClick={(e) => e.stopPropagation() }>
                  <i onClick={()=>wishlist(p)} className={`fa fa-heart ${`wishcard ${wish.includes(p.id)?"wished":""}` }`}></i> 
                </div>
                <div className="image">
                  <img src={p.thumbnail} />
                </div>
                <div className="details">
                  <div className="title">
                    {p.title}{" "}
                    {p.brand ? <span className="brand">-{p.brand}</span> : ""}
                  </div>
                  <div className="price-details">
                    <div>
                      MRP -{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        {Math.round(
                          (p.price * 100) / (100 - p.discountPercentage)
                        )}
                      </span>
                    </div>
                    <div className="price">
                      {p.price} Rs.{" "}
                      <span style={{ color: "red", fontSize: "1rem" }}>
                        -{p.discountPercentage}%
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      
    </div>
  );
};

export default Layout;
