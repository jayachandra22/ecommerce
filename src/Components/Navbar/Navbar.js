import { AiOutlineSearch } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai' ;
import { changelog } from '../../Reducer/Reducers';
import { useNavigate } from 'react-router-dom';
import { showlogin } from '../../Reducer/Reducers';
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {



 const [sidebar,setsidebar] = useState(false)

  const cartdata =  useSelector(state => state.allproduct.cart)
  //  console.log(cartdata.length)
   const logstate = useSelector(state => state.allproduct.log)
  // console.log(logstate)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  
  if(logstate){
  var users = localStorage.getItem("username").toLocaleUpperCase()
  }
 
const loggingout = ()=>{
    localStorage.removeItem("username")
     dispatch(changelog(false))
     return  navigate("/")
} 

const closebar =()=>{
  setsidebar(!sidebar)
  
}

  return (

    <div> 
 <nav className="navbar navbar-expand-lg py-3 px-2" >


<div className="container-fluid">
<Link to="/" className="navbar-brand" >Ecommerce </Link>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
     <div  className="container col-12">
    
   
  <div className="row ">
     <div className="col-4 ">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to="/" className="nav-link ">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Pages/Products" className="nav-link ">Product</Link>
          </li>
          <li className="nav-item">
          <Link to="/" className="nav-link ">About</Link>
          </li>
         </ul>
      </div>
   
       <div className="col-3  search">
           <input  style={{border:"2px solid black"}} className="form-control mx-2 " type="search" placeholder="Search"/>
           <button style={{backgroundColor:"rgb(233, 243, 252)",border:"none"}} className='btn btn-light py-0  px-0 icon'>
                 <AiOutlineSearch className='text-dark my-2 ' />
           </button>
       </div>
        <div className='col-5'>
          <div className='user '>
                    <div className='mx-4 '>
                         <h5 className='text-dark my-2' style={{fontWeight:"200"}}>{logstate ?`HI ${users}`: "" }</h5>
                    </div>
                <div className='carticon '>
                  <Link to='/Pages/Cart' className='text-decoration-none' >
                           <button  style={{borderRadius:"8px"}} className="btn btn-dark cart position-relative" >   
                                  <TiShoppingCart  className='icon' />
                                  
                                       {logstate ? ( <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                                {cartdata.length}
                                                   <span className="visually-hidden">unread messages</span>
                                           </span>) : ('')}
                              </button>
                     </Link> 
          
                {logstate ?    (
                         <button  style={{borderRadius:"8px"}} onClick={loggingout}  className='btn mx-3 btn-outline-dark'>
                                 <h6 className='my-1' style={{fontWeight:"300"}}>
                                    
                                   Logout
                                   </h6>
                           </button>
                           ):

                        ( <button  style={{borderRadius:"8px"}} onClick={()=>dispatch(showlogin(true))}  className='btn mx-3 btn-outline-dark'>
                                 <h6 className='my-1' style={{fontWeight:"300"}}>
                                    
                                   Login
                                   </h6>
                           </button>)
                         }      
                </div>
          </div>
        </div>  
     </div>
  </div> 
</div>

{sidebar ? (<AiFillCloseCircle style={{cursor:"pointer"}} onClick={()=>setsidebar(!sidebar)} className='sidebarcross ' />) : (<RxHamburgerMenu style={{cursor:"pointer"}} onClick={()=>setsidebar(!sidebar)}  className='sidebaricon'/>)}

</div>
</nav> 
<Sidebar status = {sidebar} transferdata={closebar}/>
</div>
  )
}

export default Navbar