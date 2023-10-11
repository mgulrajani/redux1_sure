//when will increment and decrement be called
/*
2 arrow functions are created ,increment and decrement

returning action object  , action object has a type
increment return action.type INCREMENT
decrement return action.type DECREMENT


*/

export const increment=()=>{
    return {
        type:"INCREMENT"
    }
}

export const decrement=()=>{
    return {
        type:"DECREMENT"
    }
}