import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  username: [],
  userrole:[],
  keyvalue:[],
}

export const nameSlice = createSlice({
  name: 'username',
  initialState: initialStateValue,
  reducers: {
  
    changename: (state, action) => {
      state.username = action.payload
    },
    changerole: (state, action) => {
        state.userrole = action.payload
      },
      addkey: (state, action) => {
        state.keyvalue = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { changename,changerole, addkey } = nameSlice.actions

export default nameSlice.reducer

