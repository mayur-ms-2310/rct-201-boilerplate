
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../redux/reducer";
import { loadData } from "../utils/Storage";

function Checkout() {
let added = loadData("item") || []
let [total, settotal] = useState([])
console.log(added)
 let count = useSelector<StoreType, number>((state)=>state.count)
 
  // HINT: you can fetch multiple IDs from json-server like this:
  // localhost:8080/products?id=1&id=4&id=6
  // this will fetch products with id 1, 4 and 6.
 
  // If cart is empty, show following div:
 
useEffect(()=>{
 let to =  added.reduce((acc:any,el:any)=>{
  return acc + el.price
 },0)
 settotal(to)
})

  if (count===0) {
    return <div className="emptyCart">Nothing in cart</div>;
  }


// else:
  return (
    <div style={{ padding: 10 }}>
      <h4>Checkout:</h4>
      <div className="checkoutWrapper">
        {/* Show Items in cart here likeL
        
        <div className="checkoutItem">
          <span>Product Name</span>
          <span>$1235</span>  // Notice $. eg: $1234 and not 1234
        </div>
        */}
        {added.map((el:any)  =>{
          return <div className="checkoutItem">
          <span>{el.product_name}</span>
          <span>$  {el.price }</span> 
        </div>
        })}
        
        
      </div>
      <hr className="hr" />
      <div className="totalContainer">
        <span>Total:</span>
        <span className="total">
          {/* Show total here */}
          {total}
        </span>
      </div>
    </div>
  );
}

export { Checkout };
