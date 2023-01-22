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


function App() {

  
  return (
    <div>
      
      <ContextProvider>
     <NavBar />
  <Header/>

    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path='/store' element={<Store />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/singleproduct/:id' element={<SingleProduct />} />
      <Route path='/login' element={<Authentication />} />
      <Route path='/profile' element={<UserProfile />} />




     {/* <Route path='/cart' element={<Cart />} />   */}


    </Routes>
    </ContextProvider>
 

    </div>
      );
}


 export default App;