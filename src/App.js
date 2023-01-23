import Home from './Components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Pages/NavBar';
import Store from './Components/Pages/Stor/Store';
import About from './Components/Pages/About/About';
import Header from './Components/Layouts/Header';
import ContextProvider from './Store/ContextProvider';
import Contact from './Components/Pages/ContactUs/Contact';
import SingleProduct from './Components/Pages/SingleProduct/SingleProduct';
import Authentication from './Components/Pages/Authentication/Authentication';
import UserProfile from './Components/Profile/UserProfile';
import cartContext from './Store/Context';
import { useContext } from 'react';


function App() {

  const ctx=useContext(cartContext);
  
  return (
    <div>
      
      <ContextProvider>
     <NavBar />
  <Header/>

    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path='/about' element={<About />} />
      <Route path='/singleproduct/:id' element={<SingleProduct />} />
      <Route path='/profile' element={<UserProfile />} />
      <Route path='/store' element={ctx.isLoggedIn ? <Store /> :<Authentication /> } />
      <Route path='/login' element={!ctx.isLoggedIn ? <Authentication /> : <Store />} />
      <Route path='/contact' element={ctx.isLoggedIn ? <Contact /> : <Authentication />} />
      <Route path='*' element={<Home />} />





     {/* <Route path='/cart' element={<Cart />} />   */}


    </Routes>
    </ContextProvider>
 

    </div>
      );
}


 export default App;