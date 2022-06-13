import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



////////// LINK # 1: link for fetch item all data

export const fetchallitem = createAsyncThunk(
    'item/fetchAll',
    async()=>{
        const respone = await fetch(`http://localhost:5000/api/itemAuth/fectchitemall`);
        const formatedresponse = await respone.json();
        return formatedresponse;
     });
     
 ////////// LINK # 2: link for delete item by id

export const deleteitem = createAsyncThunk('item/deleteItem',
async({id})=>{
    return fetch(`http://localhost:5000/api/itemAuth/deleteitem/${id}`,
    {
        method:'DELETE',
    })
    .then(res => res.json())
});

 

 ////////// LINK # 2: link for fetch item by id

export const finditem =createAsyncThunk(
    'item/findItem',
async({id})=>{
    const respone = await fetch(`http://localhost:5000/api/itemAuth//fetchitem/${id}`,{ method:'get',});
    const formatedresponse = await respone.json();
    return formatedresponse;
})  ;  

export const createitem = createAsyncThunk(
    'item/createItem',
async({formData})=>{
return fetch(`http://localhost:5000/api/itemAuth/createitem`,{
    method:'post',
    //  headers: { 
    //     Accept: "application/json",

    // 'Content-Type': 'multipart/form-data',
    //   },
    //  body: JSON.stringify(Object.fromEntries(formData))
    //   body: JSON.stringify({
    //       name:formData.name,
    //       detail:formData.detail,
    //       location:formData.location,
    //       picURL:formData.picURL,
    //   }),
    body: formData,
    
   
    
})
.then((res)=>res.json());

}    
);




 ////////// LINK # 4: link for update item by id

export const updateitem = createAsyncThunk(
    'item/updateitem',
async({keyvalue,formData})=>{
return fetch(`http://localhost:5000/api/itemAuth//updateitem/${keyvalue}`,{
    method:'put',
      
      body: formData,
    
})
.then((res)=>res.json());

}    
);

 ////////// LINK # 2: add like item by id
 export const addlike = createAsyncThunk(
    'item/addLike',
async({id})=>{
return fetch(`http://localhost:5000/api/itemAuth/updateitemlike/${id}`,{
    method:'put',
     
     })
.then((res)=>res.json());

}    
);




const itemSlice = createSlice({
    name:'item',
    initialState:{
        loading:false,
        item:[],
        error:null
    },
    extraReducers:{
        [createitem.pending]:(state,action) =>{
            state.loading=true
        },
        [createitem.fulfilled]:(state,action) =>{
            state.loading=false;
            state.item=action.payload;
        },
        [createitem.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        },    
        [fetchallitem.pending]:(state,action) =>{
            state.loading=true
        },
        [fetchallitem.fulfilled]:(state,action) =>{
            state.loading=false;
            state.item=action.payload;
        },
        [fetchallitem.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        },  
        [deleteitem.pending]:(state,action) =>{
            state.loading=true
        },
        [deleteitem.fulfilled]:(state,action) =>{
            state.loading=false;
            state.item=action.payload;
        },
        [deleteitem.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        },    
        [finditem.pending]:(state,action) =>{
            state.loading=true
        },
        [finditem.fulfilled]:(state,action) =>{
            state.loading=false;
            state.item=action.payload;
        },
        [finditem.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        }, 
        
        [updateitem.pending]:(state,action) =>{
            state.loading=true
        },
        [updateitem.fulfilled]:(state,action) =>{
            state.loading=false;
            state.item=action.payload;
        },
        [updateitem.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        }, 
        
        [addlike.pending]:(state,action) =>{
            state.loading=true
        },
        [addlike.fulfilled]:(state,action) =>{
            state.loading=false;
            state.item=action.payload;
        },
        [addlike.rejected]:(state,action) =>{
            state.loading=false;
            state.error=action.payload
        }
    },
})

export default itemSlice.reducer


