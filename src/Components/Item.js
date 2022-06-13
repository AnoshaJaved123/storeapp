import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchallitem, deleteitem } from '../Redux/features/itemSlice'
import Spinner from './Spinner';
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom';




const Item = () => {
//this location is used to fetch the id comming from login
// console.log(location.state.name)
// const name =location.state.name
  // const location = useLocation()
  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
  }

  const [search, setsearch] = useState({ name: "" })

  const [shaowitem, setshaowitem] = useState(false)
  const [showpreview, setshowpreview] = useState({key:"",status:false})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading } = useSelector((state) => ({ ...state.appitem }));
  const item = useSelector(state => state.appitem.item)


  useEffect(() => {
    dispatch(fetchallitem())

  }, [dispatch])

  
  const displaysearch = () => {
    setshaowitem(true)

  }

  const addtiems = (e) =>{
    e.preventDefault();
    navigate('/Itemform')
  }

  const handlepreview = (id)=>{
    console.log(id)
    setshowpreview({key:id,status:true})
    navigate('/preview',{state:id})

    // console(showpreview)

}

const handleupdate = (id)=>{
  console.log(id)
  setshowpreview({key:id,status:true})
  navigate('/updateitem',{state:id})

  // console(showpreview)

}


  const showdataitem = () => {
    console.log(shaowitem)
    return (
      <>
   
        {item
          .filter(items => items.name .toLowerCase() === search.name.toLowerCase() )
          .map(items =>
            <>
              <div className="card border-warning mb- mx-3" key={items._id} style={{ maxWidth: '15rem' }}>
                <div className="row text-center mx-2">
                  <div className="col-md-12">
                    <img src={items.picURL} className="card-img-top my-1 container shadow p-2 mb-3 bg-white rounded" alt="..." />
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{items.name}</h5>
                  <p className="card-text">{items.detail}</p>
                  <p className="card-text"><i className="fa-solid fa-location-dot mx-1"></i>{items.location}</p>
                  <div className="btn-group btn-group-sm" role="group" aria-label="...">
                        <a type='button' onClick={()=>{handlepreview({id:items._id})}} className="btn btn-sm btn-warning" >Preview</a>
                        <a type='button' onClick={()=>{handleupdate({id:items._id})}} className="btn btn-sm btn-dark" >Update</a>
                        <a href='/item' className="btn btn-sm btn-danger" onClick={() => { dispatch(deleteitem({ id: items._id })); window.location.reload(); }} >Delete</a>

                      </div>

                </div>

              </div>
            </>

          )}
      </>
    )
  }



  return (
    <>
    <Navbar />

      <div className="container text-center my-4  container shadow p-3 mb-5 bg-white rounded '">
        <h3>ITEM GALLARY</h3>
        <div className="mt-4">{shaowitem && <div>{showdataitem()}</div>}</div>


        <div className="row text-end my-3">
          <div className="col-md-8"></div>
          <div className="col-md-4">

            <input value={search.name} onChange={(e) => { setsearch({ ...search, name: e.target.value }) }} type="search" placeholder="Search by name" aria-label="Search" />
            <button onClick={displaysearch} className="btn btn-sm btn-outline-success mx-1" type="submit">Search</button>
          </div>

        </div>
        <div className="row ">
          <a onClick={addtiems} className="btn btn-sm btn-dark">ADD NEW ITEM</a>
        </div>
        <div className="row my-4 mx-2">
          {loading ? <Spinner /> : (
            <>
              {item.map((items) =>
                <>
 
                  <div className="card border-dark mb-3 mx-3" key={items._id} style={{ maxWidth: '15rem' }}>
                    <div className="row text-center mx-2">
                      <div className="col-md-12">
                        <img src={items.picURL} className="card-img-top my-1 container shadow p-2 mb-3 bg-white rounded" alt="..." />
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{items.name}</h5>
                      <p className="card-text">{items.detail}</p>
                      <p className="card-text">Price: {items.price}</p>
                      <p className="card-text"><small><i className="fa-solid fa-location-dot mx-1"></i>{items.location} </small></p>

                      <div className="btn-group btn-group-sm" role="group" aria-label="...">
                        <a type='button' onClick={()=>{handlepreview({id:items._id})}} className="btn btn-sm btn-warning" >Preview</a>
                        <a type='button' onClick={()=>{handleupdate({id:items._id})}} className="btn btn-sm btn-dark" >Update</a>
                        <a href='/item' className="btn btn-sm btn-danger" onClick={() => { dispatch(deleteitem({ id: items._id })); window.location.reload(); }} >Delete</a>

                      </div>

                    </div>

                  </div>
                  

                </>
                

              )


              }

            </>
          )


          }
        </div>
      </div>
    </>




  )
}

export default Item