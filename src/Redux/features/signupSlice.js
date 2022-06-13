import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const createuser = createAsyncThunk(
    'user/createUser',
    async({values})=>{
        return fetch(`http://localhost:5000/api/userAuth/createuser`,{
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
            body: JSON.stringify({
                name:values.name,
                email:values.email,
                password:values.password,
                role:values.role,
            }),
       }).then((res)=>res.json());

    }
);

export const fetchuserall = createAsyncThunk(
    'user/fetchuser',
    async()=>{
        const respone = await fetch(`http://localhost:5000/api/userAuth/fectchuser`);
        const formatedresponse = await respone.json();
        return formatedresponse;
    }
)


///Link 3 fetch user by id

export const fetchuserbyid = createAsyncThunk(
    'user/fetchuserbyID',
    async({id})=>{
        const respone = await fetch(`http://localhost:5000/api/userAuth/fetchuserid/${id}`);
        const formatedresponse = await respone.json();
        return formatedresponse;   
    }
)

const signupSlice = createSlice({
    name:'user',
    initialState:{
        loading:false,
        user:[],
        error:null
    },
    extraReducers:{
        [createuser.pending]:(state,action) =>{
            state.loading=true
        },
        [createuser.fulfilled]:(state,action) =>{
            state.loading=false;
            state.user=action.payload;
        },
        [createuser.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        },      
        [fetchuserall.pending]:(state,action) =>{
            state.loading=true
        },
        [fetchuserall.fulfilled]:(state,action) =>{
            state.loading=false;
            state.user=action.payload;
        },
        [fetchuserall.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        }, 
             
        [fetchuserbyid.pending]:(state,action) =>{
            state.loading=true
        },
        [fetchuserbyid.fulfilled]:(state,action) =>{
            state.loading=false;
            state.user=action.payload;
        },
        [fetchuserbyid.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        },        
    },
})

export default signupSlice.reducer



