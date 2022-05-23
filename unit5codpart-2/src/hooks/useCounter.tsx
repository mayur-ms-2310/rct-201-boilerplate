import { useState } from "react";

export const useCounter = (init : any) => {
const  [value , setvalue] = useState(init)

const inc = (num:number)=>{
setvalue(value+num)
}
const dec = (num:number)=>{
    setvalue(value-num)
    }
const set =(val:number)=>{
setvalue(val)
}
    return {value,inc,dec,set}
};
