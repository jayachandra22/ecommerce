import React from 'react'
import { CardBody,Card,Col, Row, Container} from 'reactstrap'
import { useDispatch } from 'react-redux'
import { Counterdecrease, Counterincrease, Delcart ,singleproduct } from '../../Reducer/Reducers'
import { Link } from 'react-router-dom'


function Cartitems({img,price,title,qty,id}) {

const dispatch = useDispatch()

  return (
    <div>
   <Card color='white my-1' >
     <CardBody>
    <Container className='col-12'>
         <Row>
            <Col className='col-lg-2 col-md-4 col-sm-12 col-xs-12' >
           <div>
           <Link className='link-style text-light'  onClick={()=>dispatch(singleproduct(id))} to={`/Pages/ProductDetails`}> 
               <img src={img}  alt ="product" style={{width:"100px",height:"120px"}} className='img-fluid my-2' />
               </Link> 
            </div>
            </Col>
             <Col className='col-lg-10 col-md-6 col-sm-12 col-xs-12' >

               <button className='float-end btn btn-dark' onClick={()=>dispatch(Delcart(id))} >x</button>
                <div className='mx-3'>

                <h4>$ {(price*qty).toFixed(2)} </h4>
                <span>{title}
                  
                  <div className='counter mt-3'>
                  <button  className='btn btn-outline-dark count' onClick={()=>dispatch(Counterdecrease(id))} >-</button>

                   <h4 className='mx-2 my-1'>
                      {qty}
                   </h4>
                   <button className='btn btn-outline-dark count ' onClick={()=>dispatch(Counterincrease(id))} >+</button>
                  </div>
                  </span>
             </div> 
             </Col>
         </Row>
         </Container>
     </CardBody>
   </Card>

    </div>
  )
}

export default Cartitems