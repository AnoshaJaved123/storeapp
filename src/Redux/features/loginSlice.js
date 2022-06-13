import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createlogin = createAsyncThunk(
    'user/userlogin',
async({values})=>{
return fetch(`http://localhost:5000/api/userAuth/login`,{
    method:'post',
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
          email:values.email,
          password:values.password,
      }),

}).then((res)=>res.json());

}    
);



const loginSlice = createSlice({
    name:'user',
    initialState:{
        loading:false,
        user:[],
        error:null
    },
    extraReducers:{
        [createlogin.pending]:(state,action) =>{
            state.loading=true
        },
        [createlogin.fulfilled]:(state,action) =>{
            state.loading=false;
            state.user=action.payload;
        },
        [createlogin.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        },      
    },
})

export default loginSlice.reducer


