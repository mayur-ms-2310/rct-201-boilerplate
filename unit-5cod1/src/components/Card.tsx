import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { inc } from "../redux/action";
// import { keys } from "./Body";
import "./product.css"
let crat:any = []
function Card({d}:any) {
  const [cartbut, setcartbut] = useState(false)
  // const [crat,setcrt] = useState<any>([])
  let dispatch = useDispatch()
 
  return (
    <div className="item">
      <img src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538__340.jpg" className="productImage" />
      <span>
        <Link className="productLink" to={`/${d.id}`}>
          {/* Product Name */}
          {d.product_name}
        </Link>
      </span>
      <span className="productCategory">{d.category}</span>
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      <span className="productPrice">${d.price}</span>
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span className="productRating">Ratings:{d.rating} </span>
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      {/*
      <div className="itemInCart">Item Already in cart</div> 
       OR
      <button className="productAddtoCart">
        Add to cart
      </button>
      */}
    {  cartbut? <div className="itemInCart">Item Already in cart</div> :
      <button className="productAddtoCart" onClick={()=>{
        dispatch(inc(1))
        setcartbut(true)
       crat.push(d)
        localStorage.setItem("crt",JSON.stringify(crat))
      }}>
        Add to cart
      </button>}
    </div>
  );
}

export { Card };
