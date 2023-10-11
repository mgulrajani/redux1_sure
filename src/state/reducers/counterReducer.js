
let count=0;
const countReducer=(state=count,action)=>{

switch(action.type){

    case "INCREMENT": count++;break;
    case "DECREMENT": count--;break;
    default : return count;

       
}
return count;

}

export default countReducer;
