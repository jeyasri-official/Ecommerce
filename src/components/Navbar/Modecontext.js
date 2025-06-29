import React, { createContext, useContext, useEffect, useState } from 'react'
const Modecont=createContext(null);
const Modecontext = ({children}) => {
    const [mode ,setmode]=useState(()=>{
        const saved = localStorage.getItem("mode");
        return JSON.parse(saved ?? true)
    });
    useEffect(()=>{
      localStorage.setItem("mode",JSON.stringify(mode))
    },[mode])
  return (
    <Modecont.Provider value={{mode,setmode}}>
        {children}
    </Modecont.Provider>
  )
}
export default Modecontext
export const useMode=()=>useContext(Modecont);