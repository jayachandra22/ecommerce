import { Container } from 'reactstrap'
import './Modal.css'
import Login from '../../Pages/Login'
import { useSelector } from 'react-redux'



function Modal() {


     const showlogin = useSelector(state => state.allproduct.showlogin)




  return (
    <div >
     
    <Container fluid  className= {showlogin ? "show-login modal-layer common body" : "hide-login common"}>

   <Login/>
 
     </Container>
  

    </div>
  )
}

export default Modal