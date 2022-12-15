import React, { useEffect, useState } from 'react'
import { Container,Row,Col, Card, CardBody } from 'reactstrap'
import Cartitems from '../Components/Cartitems/Cartitems';
import { useSelector,useDispatch } from 'react-redux'
import { showlogin } from '../Reducer/Reducers';


function Cart() {
  const [isquantity,setquantity] = useState(0)

 const cartdata =  useSelector(state => state.allproduct.cart)
 const logstate = useSelector(state => state.allproduct.log)  
//  console.log(cartdata)
const dispatch = useDispatch()

 useEffect(()=>{
   var quant = 0
   cartdata.forEach(ele => {
          quant += ele.price*ele.qty 
   });
      setquantity(quant)
 },[cartdata,isquantity]) 

  return (
    <div>
 <Container fluid className ='col-11 mt-3'>
     <h3 className='my-3 mx-2'>MY BAG</h3>
     {logstate ? 
     (<Row>
           <Col className="col-lg-9 col-md-12 col-sm-12 my-3">
            <Card style={{backgroundColor:"rgb(233, 243, 252)"}}>
                
                  <CardBody>
               {cartdata.length ===0  ? (<div><h3 className='text-center'>Your cart is empty...</h3></div>) : 
                 
                  (cartdata.map((ele,index)=>
                    <Cartitems  key={index} id={ele.id} img={ele.image}  qty={ele.qty} price={ele.price} title ={ele.title}
                    />
                    ))
                  }
                  </CardBody>
            </Card>
           </Col>
         
           <Col className="col-lg-3 col-md-6 col-sm-6 mt-3">
            <Card  style={{backgroundColor:"rgb(233, 243, 252)"}}>
                  
                   <CardBody>
           
                  <h5 className='text-center mb-4'>TOTAL</h5>
    
                     <div className='total '>
                     <h5>Sub-total</h5>  
                     <h5>$ {isquantity.toFixed(2)}</h5>
                     </div>
                    
               </CardBody>  
            </Card>
            <div className='d-flex justify-content-center align-items-center'>
             <button className='btn my-2 fw-bold px-5 btn-dark'>CHECKOUT</button>
             </div>
           </Col>
     </Row>) :
     
     (
   <Container fluid>
          <Card >
             
              <CardBody className='missing-box'>
               
               <div className='cart-missing-img mt-5'>
               <img src="https://www.seekpng.com/png/detail/256-2560404_leverage-an-open-source-ecommerce-platform-tailored-e.png" className='img-fluid' alt='show login msg'></img>
               </div> 

               <div className='mb-3'>
                 <h5 className='text-center' style={{fontWeight:300}}>Missing Cart items?</h5>
                 <p style={{fontSize:"13px"}}>Login to see the items you added previously</p>
                 <button onClick={()=>dispatch(showlogin(true))} className='btn miss-btn text-light '>Login</button>
               </div>

              </CardBody>
         </Card>
 </Container>
     )
     
     }

 </Container>
 
 
    </div>
  )
}

export default Cart