function add (todo) {
    return {
        type : "Add",
        todo : todo
    }
}
    
    const delTodo= (ind,id)=>{
        console.log(ind)
        return{
            type:"DELETE",
            ind:ind,
            id:id
        }
    }
    
    const editTodo= (ind,id)=>{
        console.log(ind)
        return{
            type:"EDIT",
            ind:ind,
            id:id
        }
    }
    
    const cancel = (ind)=>{
        return{
            type:"CANCEL",
            ind:ind
        }
    }
    
    const update = (ind,updValue)=>{
        console.log(updValue);
    return {
        type : "UPDATE",
        updValue:updValue,
        ind:ind
        
    }
    }
    
    export {add,delTodo,editTodo,cancel,update}