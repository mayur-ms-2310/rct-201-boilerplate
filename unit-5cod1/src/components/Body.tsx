import { useEffect, useState } from "react";
import { Card } from "./Card";
import axios from "axios";

export type keys = {
  id?: number,
  product_name?:string,
  rating: number,
  price: number,
  category:string,
  desc? : string,
  reviews? : string
}


function Body() {
  const [data , setData] = useState<keys[]>([])
 useEffect(()=>{
 axios.get("http://localhost:8080/products")
 .then(({data : any})=>{
   console.log(data)
   setData(data)
 })
 })


  return (
    <div className="container">
      {/* Iterate over data and show `Card` here */}
      {data.map((d)=>{
       return  <Card d = {d}/>
      })}
   
    </div>
  );
}

export { Body };
