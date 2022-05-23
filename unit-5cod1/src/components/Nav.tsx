import { useSelector } from "react-redux";
import {Link, useNavigate } from "react-router-dom"
function Nav() {
  let count = useSelector((state:any)=>state.count)
  let navigate = useNavigate()
  console.log(count)
  return (
    <div className="nav">
      <span>
        <h3>
          <Link to={"/"}>Shopper</Link>
        </h3>
      </span>
      {/* Show follwing div only if we are not on /checkout page */}
      <div className="navCartStatus">
        Cart:{" "}
        <span className="navCartCount">{/* total items in cart here */}{count}</span>
        <button className="navCartCheckout"
        onClick={()=>{
          navigate("checkout")
        }}>Checkout</button>
        {/* on this button click user goes to checkout page */}
      </div>
    </div>
  );
}

export { Nav };
