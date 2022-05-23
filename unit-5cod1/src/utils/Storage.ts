

let loadData = (key:string)=>{
    try {
     let data :any = localStorage.getItem(key)
    data = JSON.parse(data);
    return data;
        
    } catch (error) {
       return undefined; 
    }
    
}

let saveData = (key:string,data : any)=>{
    localStorage.setItem(key,JSON.stringify(data))
}

export {saveData,loadData} 