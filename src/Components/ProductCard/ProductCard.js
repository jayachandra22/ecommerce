import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai';
import "./ProductCard.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { singleproduct } from '../../Reducer/Reducers';
import { Addtocart } from '../../Reducer/Reducers';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';




function ProductCard({ title, price, rating, img, id }) {


  const logstate = useSelector(state => state.allproduct.log)
  const dispatch = useDispatch()

  const displaycart = (id) => {

    if (logstate) {
      dispatch(Addtocart(id))
      return toast("Added to Cart", { type: "info" })
    } else {
      return toast("Please Login ", { type: "error" })
    }

  }





  return (


    <div>


      <div className="card card-style h-100 text-center p-4" key={id}>
        <Link className='link-style text-light' onClick={() => dispatch(singleproduct(id))} to={`/Pages/ProductDetails`}>
          <img src={img} className="card-img-top" alt="products" height="250px" />
        </Link>
        <div className="card-body">
          <h5 className="card-title mb-0">{`${title.substring(0, 20)}...`}</h5>
          <p style={{ fontSize: "13px" }} className='text-light rate  px-1'>{rating}
            <span><AiTwotoneStar /></span>
          </p>
          <h5 className="card-text">$ {price}</h5>

          <div className='btn-align'>
            <button  style={{ fontSize: "12px" }} className='btn  btn-outline-dark' onClick={() => displaycart(id)} > Add To Cart </button>
            <button style={{ fontSize: "12px" }} className='btn  btn-dark mx-2' >
              <Link className='link-style text-light' onClick={() => dispatch(singleproduct(id))} to={`/Pages/ProductDetails`}>
                Buy now  </Link>
            </button>
          </div>

        </div>
      </div>

    </div >
  )
}

export default ProductCard