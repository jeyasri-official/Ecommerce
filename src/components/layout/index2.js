// import React, { useState } from "react";
// import "./style.css";

// import Filter from "./filter/index.js";
// const Layout = ({ products }) => {
//   const [filter,setfilter]=useState(false)
  
//   return (
//     <div className="layout_container">
//     <div class="filterContainer">
//       <div className={`filter ${filter?"open":"close"}` } onClick={()=>{setfilter(!filter)}}>Filter <i  className="fa">&#xf0b0;</i></div>
//       {filter && <Filter products={products}/>}
//     </div>
//     <div className="layout">
//       <ul>
//         {products.map((p) => {
//           return (
//             <li key={p.id} className="card">
//               <div className="image">
//                 <img src={p.cover} />
//               </div>
//               <div className="details">
//                 <div className="title">{p.title} - {p.author}</div>
//                 <div className="price-details">
//                   <div>MRP - <span style={{textDecoration:"line-through"}}>{p.price}</span></div>
//                   <div className="price">{p.discountedPrice} Rs. <span style={{color:"red",fontSize:"1rem"}}>-{p.discount}%</span></div>
//                 </div>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//     </div>
//   );
// };

// export default Layout;
