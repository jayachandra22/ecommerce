// actions
export const getproduct = (data)=>({type:"get",payload:data})
export const singleproduct = (id) =>({type:"single",payload:id})
export const Addtocart = (id) => ({type:"add",payload:id})
export const Delcart = (id) => ({type:"del",payload:id})

export const Counterincrease = (id) => ({type:"increasecount",payload:id})
export const Counterdecrease = (id) => ({type:"decreasecount",payload:id})

export const changelog = (state) => ({type:"change",payload:state}) 
export const showlogin = (state) => ({type:"showlogin",payload:state}) 



const initialstate = {
 product :[],
 productdetails:0,
 cart:[],
 log:false,
 showlogin:false
}

//reducer
export const Reducers =(state=initialstate,action) =>{
 switch(action.type){
      case "get":
       //gets all products 
     return {
         ...state,
         product: action.payload
     }
    case "single":
       //gets single product to show in product details page
    return {
        ...state,  
        productdetails:action.payload
        } 
      case "add" :
      
      // adds products to cart
      //check if product is already in cart
       const exist = state.cart.find(ele => (ele.id ===  action.payload) ? true :false)
         if(exist){
            //if it exist already in cart then  increase the qty + 1 
             return  {
                 ...state,
                cart:state.cart.map(item => (item.id ===action.payload) ?
                      ({...item,qty:item.qty+1 }) : (item))
                
             }   
         }else{
             //if it is added to the cart of the first time(doesn't exist)  the add qty object to the products object
            var data = state.product.find(ele => (ele.id === action.payload))
            return {
                ...state,
                cart:[...state.cart,{...data,qty:1}]
            }
         }
        case "del" :
              // adds products from cart
           return{
            ...state,
            cart:state.cart.filter(ele => (ele.id !== action.payload))
           }  
       
        case "increasecount" :

        return {
          ...state,
          cart:state.cart.map(items =>  (items.id === action.payload) ?  ({...items,qty: items.qty+1 }) : (items))   
        } 

        case "decreasecount" :

            return {
              ...state,
              cart:state.cart.map(items =>  (items.id === action.payload) ?  ({...items,qty:items.qty <1 ? items.qty=0 : items.qty-1 }) : (items))   
            } 
      case "change":
      return {
        ...state,
        log:action.payload
      }
      case "showlogin":
      return {
        ...state,
        showlogin: action.payload
      }
     default:
     return state     
 }

} 