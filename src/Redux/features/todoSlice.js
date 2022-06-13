import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createtodo = createAsyncThunk(
    'user/userlogin',
async({todo_id,todoemail,todovalue})=>{
return fetch(`http://localhost:5000/api/todoAuth/createtodo`,{
    method:'post',
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        _id:todo_id,
          email:todoemail,
          todo:todovalue.task,
      }),

}).then((res)=>res.json());

}    
);



export const deletetodo = createAsyncThunk('todo/deletetodo',
async({id})=>{
    return fetch(`http://localhost:5000/api/todoAuth/deletetodo/${id}`,
    {
        method:'DELETE',
    })
    .then(res => res.json())
});



export const fetchtodo = createAsyncThunk(
    'todo/fetchAll',
    async()=>{
        const respone = await fetch(`http://localhost:5000/api/todoAuth/fectchtodo`);
        const formatedresponse = await respone.json();
        return formatedresponse;
     });



const todoSlice = createSlice({
    name:'todo',
    initialState:{
        loading:false,
        todo:[],
        error:null
    },
    extraReducers:{
        [createtodo.pending]:(state,action) =>{
            state.loading=true
        },
        [createtodo.fulfilled]:(state,action) =>{
            state.loading=false;
            state.todo=action.payload;
        },
        [createtodo.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        },   
        [fetchtodo.pending]:(state,action) =>{
            state.loading=true
        },
        [fetchtodo.fulfilled]:(state,action) =>{
            state.loading=false;
            state.todo=action.payload;
        },
        [fetchtodo.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        }, 
        [deletetodo.pending]:(state,action) =>{
            state.loading=true
        },
        [deletetodo.fulfilled]:(state,action) =>{
            state.loading=false;
            state.todo=action.payload;
        },
        [deletetodo.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        },   
    },
})

export default todoSlice.reducer


