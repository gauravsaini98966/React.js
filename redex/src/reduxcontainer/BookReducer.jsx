import { buy_book } from "./BookAction"
export const initialState={  
    NumberofBooks:20
}
 export const BookReducer=(state=initialState,action)=>{
 switch(action.type){
    case buy_book:return{
        ...state,NumberofBooks:state.initialState-1
    }
 default:return state
 }
}