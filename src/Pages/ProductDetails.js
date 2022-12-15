import { Container,Col,Row, Spinner } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AiTwotoneStar} from 'react-icons/ai';
import { Addtocart } from '../Reducer/Reducers';
import { Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import axios from 'axios';



function ProductDetails() {

  const [data,setdata] = useState([])
  const [loading,setloading] = useState(false)
  const Getid = useSelector(state=>state.allproduct.productdetails)
  const logstate = useSelector(state => state.allproduct.log)
//  console.log(data)
const dispatch = useDispatch()




const displaycart =(id) =>{

  if(logstate){
  dispatch(Addtocart(id))
  return toast("Added to Cart" , {type:"info"})
  }else{
    return toast("Please Login " ,{type:"error"})
  }

}


const FetchData = async()=>{
  setloading(true)
 var detail =  await axios.get(`https://fakestoreapi.com/products/${Getid}`)
 setloading(false)
  setdata([detail.data])
     
}

useEffect(()=>{
FetchData()
   // eslint-disable-next-line 
},[])




  return (
    <div>

      {loading ? (<div className ="d-flex text-dark justify-content-center ">
                <Spinner style={{width: '3rem', height: '3rem'}}/>
                </div> )
        :
         (<Container fluid className='col-12'>
   <ToastContainer position='top-left'  autoClose="1000"/>

    {data.map((ele,index)=> (
      <Row key={index}>

            <Col className='col-lg-5 col-md-4 col-sm-12 col-xs-12 my-5' > 
              
               <div>
                 <img src={ele.image} className='img-fluid product-img p-5'  alt='product' />
               </div>
            </Col>
       
        
            <Col className='col-lg-7 col-md-8 col-sm-12 col-sm-12  my-5 ' > 
              <div className='my-4 mx-5'>
                 <h2  className='mx-5 cat'>{ele.category}</h2>
                 <h2 className='mx-5 title'>{ele.title}</h2>

                 <div className='mx-5'>
                    
                 <p style={{fontSize:"15px"}} className='text-light mx-1'>
                  <span className='rate px-1'>{ele.rating.rate}<AiTwotoneStar /></span>
                  <span className='text-dark mx-2' >{ele.rating.count} reviews</span>
                  </p> 

                   <h1 className='price my-4 text-dark' >$ {ele.price}</h1>
                   <h5 className='desp'> {ele.description} </h5>
             
                 <div className='my-5'>
                   
                   <button className='btn cartbtn btn-outline-dark' onClick={()=>displaycart(ele.id)}>Add to Cart</button>
                   <button className='btn cartbtn btn-dark mx-2 '>
                   <Link to='/Pages/Cart' className='text-decoration-none text-light' >
                     Go to Cart   
                     </Link>
                     </button> 
                 </div>
                 
                 </div>

                </div>


            </Col>
      </Row>
 ))}

         </Container>)}

    </div>
  )
}

export default ProductDetails