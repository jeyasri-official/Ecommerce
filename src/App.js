import { useContext, useState } from 'react';
import './App.css';
import Home from './components/home/index.js';
import LayoutEach from './components/Layout_each/index.js';
import Login from './components/login/index.js';
import Navbar from './components/Navbar';
import { Routes, Route, Outlet } from "react-router-dom"
import { useMode } from './components/Navbar/Modecontext.js';
import ScrollToTop from './components/scrolltop/index.js';
import ShowAllComments from './components/Layout_each/showAllComments/index.js';
function App() {
  const {mode,setmode}=useMode();
  const [initialWidth, setInitialWidth] = useState(window.screen.width);
  

  return (
   <div class={`main_background ${mode?"light":"dark"}`}>
     <div style={{maxWidth:initialWidth}} className={`app`}>
        <ScrollToTop/>
        <Routes>
          <Route element={<><Navbar/><Outlet/></>}>
         <Route path="/" element={<><Home/></>}/>
         <Route path="/cart"  />
         <Route path="/wishlist"/>
         <Route path='/productDetail/:pid' element={<><LayoutEach/></>}/>
         <Route path='/productDetail/:pid/showallcomments' element={<ShowAllComments/>}></Route>
        </Route>
         <Route path='/signin' element={<Login/>} />
        </Routes>
     </div>
   </div>
  );
}

export default App;
