import React, { Children, createContext, useContext, useState } from "react";
import Layout from "../index.js";
import Discountfilter from "./discount/index.js";
import Price_range from "./price/Price_range.js";

const FilterContext = createContext(null);

const FilterProvider = ({Children}) => {
  const [d, sd] = useState(0);
  const [p, sp] = useState(0);


  return (
    <FilterContext.Provider value={{ d, sd, p, sp }}>
      {Children}
    </FilterContext.Provider>
  );
};

// Custom hook (must follow naming rules)
export const useFilter = () => useContext(FilterContext);

export default FilterProvider;
