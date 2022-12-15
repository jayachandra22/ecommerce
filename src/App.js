import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { Spinner } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';

const Home = React.lazy(()=> import('./Pages/Home'))
const Products = React.lazy(()=>import('./Pages/Products'))
const ProductDetails = React.lazy(()=>import('./Pages/ProductDetails')) 
const Cart = React.lazy(()=>import('./Pages/Cart')) 
const Modal = React.lazy(()=> import('./Components/Modal/Modal'))

function App() {
  return (
    <div >
     <Navbar /> 
     <Modal/>
 
    <Suspense fallback={ <div className ="d-flex text-dark justify-content-center ">
            <Spinner style={{width: '3rem', height: '3rem'}}/>
             </div>}>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/Pages/Products' element={<Products/>} />
     <Route path='/Pages/ProductDetails' element={<ProductDetails/>} />
     <Route path='/Pages/Cart' element={<Cart/>} />
     </Routes> 
     </Suspense>
    <Footer/>
    </div>
  );
}

export default App;