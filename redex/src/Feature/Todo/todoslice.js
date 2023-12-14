import {createslice,nanoid} from '@redusjs/toolkit';

const initialState={
    todos:[{id:1,text:"hello world"}]
}

export const todoslice=createslice({
    name:'todo',
    
})