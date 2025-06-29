import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useProduct } from "../../products/products.js";
import ImgScroller from "./image_scroll/index_copy.js";
import "./style.css";
import Rating from "./Rating/index.js";
import { v4 as uuid } from "uuid";
import Layout from "../layout/index.js";
import Filter from "../layout/filter/index.js";
import Related from "./related/index.js";
const LayoutEach = () => {
  const { products } = useProduct();
  const param = useParams();
  const product = products.filter((value) => value.id == param.pid).at(0);
  const [numOrder, setNumOrder] = useState(1);
  const ref = useRef();
  const navigate = useNavigate();
  return (
    <>
      {product && (
        <>
          <div className="product_container_m">
            <div className="product_container">
              <div className="left">
                <div className="productImage">
                  <ImgScroller images={product.images} />
                </div>
              </div>
              <div className="right product_bye_container">
                <h1 className="product_title">
                  {product.title}
                  {product.brand ? `-${product.brand}` : ""}
                </h1>
                <hr />
                <div className="product_rating">
                  {product.rating}{" "}
                  <i
                    style={{
                      backgroundPosition: `-${product.rating * 20}% 100%`,
                    }}
                    class="entire_rate fa fa-solid fa-star"
                  ></i>
                </div>
                <div className="product_price">
                  <div>₹{product.price}</div>{" "}
                  <div>
                    {Math.round(
                      (product.price * 100) / (100 - product.discountPercentage)
                    ).toFixed(2)}
                  </div>{" "}
                  <div>(-{product.discountPercentage}% off)</div>
                </div>
                <div className="buy">
                  <div className="buycount">
                    <button
                      onClick={() =>
                        setNumOrder(numOrder > 1 ? numOrder - 1 : numOrder)
                      }
                    >
                      -
                    </button>
                    {numOrder}
                    <button onClick={() => setNumOrder(numOrder + 1)}>+</button>
                  </div>
                  <div className="buy_add">
                    <button>Buy Now</button>{" "}
                    <button>
                      Add to Cart<i className="fa fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>

                <h2>Highlights</h2>
                <table className="product_highlights">
                  <tr>
                    <td>Shipping Information</td>
                    <td>{product.shippingInformation}</td>
                  </tr>
                  <tr>
                    <td>Specification</td>
                    <td>
                      <div>
                        <div>Height-{product.dimensions.height}</div>
                        <div>Width-{product.dimensions.width}</div>
                        <div>Weight-{product.weight}</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="product_description">
                    <td>Description</td>
                    <td>{product.description}</td>
                  </tr>
                  <tr>
                    <td>Warranty Information</td>
                    <td>{product.warrantyInformation}</td>
                  </tr>
                </table>
                <div className="your_rating">
                  <h2>Your rating</h2>
                  <Rating />
                </div>
                <h2 className="comment_title">Comments</h2>
                <div className="comments">
                  {product.reviews.slice(0, 2).map((rev) => {
                    return (
                      <div key={uuid()}>
                        <div>
                          {rev.rating}{" "}
                          <i
                            style={{
                              backgroundPosition: `-${rev.rating * 20}% 100%`,
                            }}
                            class="entire_rate viewer_rate fa fa-solid fa-star"
                          ></i>
                        </div>
                        <div>{rev.comment}</div>
                        <div className="reviewer_detail">
                          {rev.reviewerName} <span>({rev.reviewerEmail})</span>
                        </div>
                      </div>
                    );
                  })}
                  <div
                    onClick={() => navigate(`./showallcomments`)}
                    className="show_all_btn"
                  >
                    <button>Show All</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="related_products">
              <h2 className="rtitle">
                <span>Related products</span> :
              </h2>
              <Related curr_product={product} />
            </div>
        </>
      )}
    </>
  );
};

export default LayoutEach;
