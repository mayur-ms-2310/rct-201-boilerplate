
import {INC } from "./action"

export type StoreType = {
    count : number;
}
let init :any = {
    count : 0,
 }


export let reducer = (state=init,action:any )=>{
    switch(action.type){
        case INC :{
            return {
                ...state.count,
                count : state.count + 1
            }
        }
        
        default :{
            return state
        }
    }
}