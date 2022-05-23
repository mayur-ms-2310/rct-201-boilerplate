import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 type  cus = {
  price?: number,
  product_name?:string,
}

function CardDetails() {
  const [par,setpar] = useState<cus>({})
let {id} = useParams()
  console.log(id)

  useEffect(()=>{
axios.get(`http://localhost:8080/products/${id}`)
.then((data:any)=>{
  console.log(data.data)
setpar(data.data)
})
  },[])
  return (
    <div className="product">
      <span>
        <h4 className="detailsTitle">{par.product_name}</h4>
      </span>
      <img className="detailsImage" src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538__340.jpg" alt="" />
      {/* Notice the "Price: $". do not edit it. */}
      <span className="detailsPrice">Price: $ {par.price}</span>
      <span className="detailsPrice">{par.price}</span>
      <div>
        <h5>Reviews:</h5>
        {/* Iterate over reviews and populate review like: 
        
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
        
        */}
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
      </div>
    </div>
  );
}
export { CardDetails };
