import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Carousel from '../Components/Carousel/Carousel'


function Home() {
   const cat = [
     {
       id:1,
       title:"Women",
       image:'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       link:"/pages/Products"
     
   },
   {
    id:2,
    title:"Men",
    image:'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link:"/pages/Products"
   },
   {
    id:3,
    title:"Electronics",
    image:'https://images.pexels.com/photos/577768/pexels-photo-577768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link:"/pages/Products"
   },
   {
    id:4,
    title:"Jewelery",
    image:'https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link:"/pages/Products"
   }
  
  ]



  return (
    <div>
   
   <Carousel/>
  <Container fluid className ='col-12 mt-3 mb-5' >
    <Row className='my-3'>

            {cat.map((item,index)=> (
            <Col  key={index} className="my-1" lg={6} xs={12} >
           <Link to={item.link} >
            <div className='org'>

                <img src={item.image} className='img img-fluid' alt='women'/>

                   <div className='layer'>
                       <h5 className='text-center text-dark fw-bold'>{item.title}</h5>
                    </div>
               </div>
               </Link>
           </Col> ))}

    </Row>
  </Container>
    </div>
  )
}

export default Home