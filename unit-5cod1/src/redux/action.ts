export const INC = "INC"
export const add = "add"
export const inc = (payload : any)=>({
    type : INC,
 payload,
})
export const ad = (payload:any) =>({
    type : add,
    payload,
})