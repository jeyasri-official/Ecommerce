import React, { useEffect, useReducer, useState } from "react";
import "./style_copy.css";
import { v4 as uuid } from "uuid";
const ImgScroller = ({ pref, images }) => {
  const reduce = (state, action) => {
    switch (action.type) {
      case "nextImg": {
        console.log(state);
        return state.numImg - 1 > state.index
          ? { ...state, index: state.index + 1,isauto:false }
          : { ...state, index: 0,isauto:true };
      }
      case "prevImg": {
        console.log(state);
        return 0 < state.index
          ? { ...state, index: state.index - 1,isauto:false }
          : { ...state, index: state.numImg - 1 ,isauto:true };
      }
      case "goto": {
        const newIndex = action.payload?.index ?? -1;
        if (newIndex >= 0 && state.numImg > newIndex) {
          return { ...state, index: newIndex };
        }
        return state;
      }
      default:{console.log("invalid type");return state}
    }
  };
  const [state, imgDispatch] = useReducer(reduce, {
    index: 0,
    numImg: images.length,
    isauto:false
  });
  useEffect(() => {
    let a = document.querySelectorAll(".l_main li");
    if(!state.isauto){
    a[state.index].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });}
    else{
      setTimeout(()=>{a[state.index].scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    })},200);
    }
  }, [state.index]);

  return (
    <>
      <div className="l_main_container">
        <div className="l_main">
          {images.map((value) => {
            return (
              <li key={uuid()}><img  src={value} alt="" /></li>
            );
          })}
        </div>
        {images.length > 1 && (
          <>
            <div className="arrows">
              <button
                onClick={() => imgDispatch({ type: "prevImg" })}
                className="left-arrow"
              >
                &#9668;
              </button>
              <button
                onClick={() => imgDispatch({ type: "nextImg" })}
                className="right-arrow"
              >
                &#9658;
              </button>
            </div>
            <div className="slide_indicator">
              <ul>
                {images.map((value, index) => {
                  return (
                    <li key={uuid()}>
                      <button
                        className={index==state.index?"selected":""}
                        onClick={() => {
                          imgDispatch({
                            type: "goto",
                            payload: { index: index },
                          });
                        }}
                      >
                        <img src={value} alt="" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ImgScroller;
