import { useState } from "react";

export const useList = (arr : any) => {
    let [list, setlist] = useState<any>([arr])

    let push =(val:number)=>{
       setlist([...list,val] )
    }

    let pop = ()=>{
    
    }

    let clear = ()=>{
        setlist([])
    }

    let reset = ()=>{
        setlist(arr)
    }

    let map = ()=>
       list.map((el:any)=>{
         return  el    
        
    })

    return [list,{push,pop,clear,reset,map}]
};
