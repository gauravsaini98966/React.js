import {createstore} from 'redux'
const reducer =(state=0,action)=>{
switch(action.type){
case 'INCREMENT':return state+1;
case 'DECEMENT' :return state-1;
default:return state;
}
}
export const Store=createstore(reducer);