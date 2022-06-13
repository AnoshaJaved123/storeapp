import React from "react";
import {
  BrowserRouter as Router,
 Routes,
  Route
} from "react-router-dom";
import Login from './Components/Login'
import Signup from './Components/Signup'
import Item from './Components/Item'
import Calender from './Components/Calender'
import Itemform from './Components/Itemform'
import PreviewItem from './Components/PreviewItem'
import UpdateForm from "./Components/UpdateForm";
import ItemsPublic from "./Components/ItemsPublic";
import PreviewItempublic from "./Components/PreviewItempublic";
import KanbanData from "./Components/KanbanData";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/dashboard' element={<KanbanData/>}/>
        <Route exact path='/item' element={<Item/>}/>
        <Route exact path='/Itemform' element={<Itemform/>}/>
        <Route exact path='/preview' element={<PreviewItem />}/>
        <Route exact path='/updateitem' element={<UpdateForm/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/publicitems' element={<ItemsPublic/>}/>
        <Route exact path='/previewpublic' element={<PreviewItempublic/>}/>


        <Route exact path='/cal' element={<Calender/>}/>




      </Routes>
    </Router>
    
  );
}
export default App;

