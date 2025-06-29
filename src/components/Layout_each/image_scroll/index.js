import React, { useEffect, useReducer, useState } from "react";
import "./style.css";
import { v4 as uuid } from "uuid";
const ImgScroller = ({ pref, images }) => {
  const [property, setproperty] = useState({
    pimg: { width: "0", height: "0" },
    pli: { width: "0", height: "0" },
  });
  useEffect(() => {
    if (pref && pref.current) {
      let p = pref.current;
      let width = p.offsetWidth;
      let height = p.offsetHeight;
      setproperty({
        pimg: { width: width, height: "auto", objectFit: "contain" },
        pli: { width: width, height: height },
      });
    }
  }, [pref]);


  const reduce = (state, action) => {
    switch (action.type) {
      case "nextImg": {
        console.log(state);
        return state.numImg - 1 > state.index
          ? { ...state, index: state.index + 1 }
          : { ...state, index: 0 };
      }
      case "prevImg": {
        console.log(state);
        return 0 < state.index
          ? { ...state, index: state.index - 1 }
          : { ...state, index: state.numImg - 1 };
      }
      case "goto": {
        const newIndex = action.payload?.index ?? -1;
        if (newIndex >= 0 && state.numImg > newIndex) {
          return { ...state, index: newIndex };
        }
        return state;
      }
    }
  };
  const [state, imgDispatch] = useReducer(reduce, {
    index: 0,
    numImg: images.length,
  });
  useEffect(() => {
    let a = document.querySelectorAll(".l_main img");
    a[state.index].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, [state.index]);

  return (
    <div className="l_main_container">
      {/* <div style={property.pli} class="l_main"> */}
      <div className="l_main">
        {images.map((value) => {
          return (
            <img key={uuid()} src={value} alt="" />
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
  );
};

export default ImgScroller;
