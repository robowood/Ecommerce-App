// import Header from "./Components/Layouts/Header";
// import Footer from "./Components/Layouts/Footer";

// import About from "./Components/Pages/About/About";
// import Store from "./Components/Pages/Store/Store";
// import NavBar from "./Components/Pages/Home/NavBar";
// import { Route, Routes } from 'react-router-dom';
// import Home from "./Components/Pages/Home/Home";
// // function App() {
// //   return (
//     <div>
//           <div>
//        {/* <NavBar /> */}
//      <Routes>
//       <Route path="/" element={ <Home/> } />
//       <Route path='/store' element={<Store />} />
//       <Route path='/about' element={<About />} />

//     </Routes> 


//   </div>

//        {/* <Routes>
//         <Route path="/" element={<About/>}/>
//         </Routes> */}
      
//        {/* <Header/>
//       <Store/>
//       <Footer/>  */}
//     </div> 
//   );
// }

// export default App;





// import Home from './component/Pages/Home/Home';
// import { Route, Routes } from 'react-router-dom';
// import NavBar from './component/Pages/Home/NavBar';
// import Store from './component/Pages/Store/Store';
// import About from './component/Pages/About/About';

// function App() {
//   return (
//     <div> 
//       <div>  
//       <header className="App-header">
      
//       </header>
//     </div>
//     <div>
//        <NavBar />
//     <Routes>
//       <Route path="/" element={ <Home/> } />
//       <Route path='/store' element={<Store />} />
//       <Route path='/about' element={<About />} />

//     </Routes>


//   </div>
//   </div>
 
//   );
// // }
// import Header from "./Components/Layouts/Header";
//  import Footer from "./Components/Layouts/Footer";
//  import NavBar from "./Components/Pages/NavBar";
//  import Cart from "./Components/Cart/Cart";

// function App() {
//   return(
  
//     <div>
//       <NavBar/>
//       <Cart/>
//     <Header/>
//     <Footer/>
//     </div>
  

//   );
// };
import CartProvider from "./Components/Context/CartProvider";
import {useState} from "react";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Store from "./Components/Pages/Store/Store";
import Cart from "./Components/Cart/Cart";
import NavBar from "./Components/Pages/NavBar";
function App() {

  const[cartVisible,setCartVisible]=useState(false);

  const showCartHandler=()=>{
    setCartVisible(true);
  }
  const hideCartHandler=()=>{
    setCartVisible(false);
  }
  return (
    <CartProvider>
    <NavBar onShowCart={showCartHandler}/>
    <Header/>
    <Store/>
   { cartVisible && <Cart onClose={hideCartHandler}/>}
    <Footer/>
    </CartProvider>
      );
}


 export default App;