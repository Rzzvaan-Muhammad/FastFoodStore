import {createSlice} from "@reduxjs/toolkit"
let lastId=0;

const error = createSlice({
    name:'errors',
    initialState:[],
    reducers:{
        errorAdded : (errors,action )=>{
            errors.push( {
                id: ++lastId,
                message:action.payload.message,
            })
        }
    }
})
 export const {errorAdded }=error.actions;
 export default error.reducer;