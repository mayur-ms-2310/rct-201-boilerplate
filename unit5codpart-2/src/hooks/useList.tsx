import { useState } from "react";

export const useList = (arr : any) => {
    let [list, setlist] = useState<any>([arr])

    let push =(val:number)=>{
       setlist([...list,val] )
    }

    let pop = ()=>{
     let out = list.slice(0,-1)
     setlist(out)
}

    let clear = ()=>{
        setlist([])
    }

    let reset = ()=>{
        setlist(arr)
    }

    let map = ()=>
       setlist(list.map((el:any)=>{
         return  el  *2  
        
    }))

    return [list,{push,pop,clear,reset,map}]
};
