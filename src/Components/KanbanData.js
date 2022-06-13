import React, { useState,useEffect } from 'react';
import Navbar from './Navbar'
import Calendar from 'react-calendar'
import { createtodo, fetchtodo, deletetodo } from '../Redux/features/todoSlice';
import { useDispatch, useSelector } from 'react-redux'


const KanbanData = () => {
	const name= localStorage.getItem('name');// shown on Application Localstorage area
  const todoemail= localStorage.getItem('email');// shown on Application Localstorage area
	const todo_id= localStorage.getItem('_id');// shown on Application Localstorage area

	// const [value, onChange] = useState(new Date());
  const dispatch = useDispatch()
  const [todovalue, settodovalue] = useState("")

  const todo = useSelector(state => state.apptodo.todo)

  useEffect(() => {
    dispatch(fetchtodo())

  }, [dispatch])



  const handletodo = (e)=>{
    e.preventDefault();
    console.log(todo_id,todoemail,todovalue)
    dispatch(createtodo({todo_id,todoemail,todovalue}))
    window.location.reload()
  }

  return (
	<>
		<Navbar/>
		<div className="container-fluid">
     
			<div className="row">
				<div className="col-md-2 text-center " >
       
        <p className="h4 text-center mt-3 mb-4 pb-3 text-primary">
              <u>App Report </u>
            </p>
        <div className="row mx-1">

<button type="button" style={{height:'5rem'}} className="btn btn-info my-4" data-mdb-ripple-color="info">Total Employee: 21</button>
        </div>
        <div className="row mx-1">

<button type="button" style={{height:'5rem'}} className="btn btn-danger my-4" data-mdb-ripple-color="danger">Today Purchase: 32 per day</button>
        </div>
        <div className="row mx-1">

<button type="button" style={{height:'5rem'}} className="btn btn-warning my-4" data-mdb-ripple-color="warning">Total Customer:65</button>
        </div>
        </div>
				<div className="col-md-7">
				<section className="vh-100">
  <div className="container py-3 h-100">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col">
        <div className="card" id="list1" style={{borderRadius: '.75rem', backgroundColor: '#eff1f2'}}>
          <div className="card-body py-2 px-2 px-md-3">
            <p className="h4 text-center mt-1 mb-4 pb-3 text-primary">
              <i className="fas fa-check-square me-1" />
              <u>Todo List: {name} </u>
            </p>
            
            <hr className="my-4" />
          <div className="input-group mb-3">
  <div className="input-group-prepend">
    <button className="btn btn-outline-secondary" onClick={handletodo} type="button">ADD TASK</button>
  </div>
  <input type="text" name='todo' value={todovalue.task} onChange={(e)=>{settodovalue({...todovalue,task:e.target.value})}} className="form-control" placeholder='Enter Task here'/>
</div>
<hr />
<>
  {todo
          .filter(todos => todos.email === todoemail )
          .map(todos =>
  <>
    <ul key={todos._id}>
    <div className="row">
    <div className="col-md-6">

      <li>{todos.todo}</li>
    </div>
    <div className="col-md-6 text-end">

      <i className="fa-solid fa-trash-can"  onClick={()=>{dispatch(deletetodo({id:todos._id})); window.location.reload()}} style={{color: 'red'}}></i>
    </div>
    </div>
      <hr />
    </ul>
  </>
  )
  
  }
</>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

				</div>
				<div className="col-md-3">
				<>
				<div className='container'>
				<div className="row my-1">
				<p className="h3 text-center mt-3 mb-4 pb-3 text-primary">
              <u>Calender 2022</u>
            </p>
				<Calendar />
				</div>

				</div>

				</>
				</div>
			</div>
		</div>
	</>
  )
}

export default KanbanData
