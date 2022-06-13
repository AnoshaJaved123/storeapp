import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchallitem,addlike } from '../Redux/features/itemSlice'
import Spinner from './Spinner';
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom';



const ItemsPublic = () => {
 
  // const location = useLocation()
  // window.onload = function () {
  //   if (!window.location.hash) {
  //     window.location = window.location + '#loaded';
  //     window.location.reload();
  //   }
  // }

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


    // dispatch(finditem({search}))
  }


  const handlepreview = (id)=>{
    console.log(id,showpreview)
    setshowpreview({key:id,status:true})
    navigate('/previewpublic',{state:id})

    // console(showpreview)

}

// const handlelike = (id) =>{
//   console.log(id)
//   dispatch(addlike({id}))

// }


// no preview buttom click


  const showdataitem = () => {
    console.log(shaowitem)
    return (
      <>
   
        {item
          .filter(items => items.name.toLowerCase() === search.name.toLowerCase() )
          .map(items =>
            <>
              <div className="card bg-light mb-3 mx-3" key={items._id} style={{ maxWidth: '15rem' }}>
                <div className="row text-center mx-2">
                  <div className="col-md-12">
                    <img src={items.picURL} className="card-img-top my-1 container shadow p-2 mb-3 bg-white rounded" alt="..." />
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{items.name}</h5>
                  <p className="card-text">{items.detail}</p>
                  <p className="card-text"><i className="fa-solid fa-location-dot mx-1"></i>{items.location}</p>
                  <div className="card-footer">
                      <a href={() => false}>{items.like}</a>
                      <i href={() => false} className="fa-regular fa-heart mx-3" style={{color:"red" }} onClick={()=>{dispatch(addlike({id:items._id})); window.location.reload()}}></i>
                        <i href={() => false} type='button' onClick={()=>{handlepreview({id:items._id})}} style={{color:"orange" }} className="fa-solid fa-1x fa-eye mx-3" ></i>
                        <i href={() => false} className="fa-regular fa-envelope mx-3" style={{color:"blue" }}></i>
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
    <Navbar/>
      <div className="container text-center my-4  container shadow p-3 mb-5 bg-white rounded '">
        <h3>ITEM GALLARY</h3>
        <div className="mt-4">{shaowitem && <div>{showdataitem()}</div>}</div>


        <div className="row text-end my-3">
          <div className="col-md-8"></div>
          <div className="col-md-4">
          {
  <>
  <input list='brow' value={search.name} onChange={(e)=>{setsearch({...search,name:e.target.value})}}  />
    <i onClick={displaysearch} className="fa-solid fa-magnifying-glass mx-2" type="submit"></i>
    {
      item
      .filter(items => {
         if (search.name === '') {
           return search.name;
         } else if (items.name.toLowerCase().includes(search.name.toLowerCase())) {
           return items;
         }}
        ).map((items,index) => (
     <>
      <option id='brow' className='text-center' key={index}>
        <datalist onClick={showdataitem} value={items.name} >{items.name}</datalist>
      </option>
     
     </>
     )
      )
    }
  </>
}
           
          </div>

        </div>
        
        <div className="row my-4 mx-2">
          {loading ? <Spinner /> : (
            <>
              {item.map((items) =>
                <>
 
                  <div className="card bg-light mb-3 mx-3" key={items._id} style={{ maxWidth: '15rem' }}>
                    <div className="row mx-2">
                      <div className="col-md-12">
                        <img src={items.picURL} className="card-img-top my-2 container shadow p-1 mb-2 bg-white rounded" alt="..." />
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{items.name}</h5>
                      <p className="card-text">{items.detail}</p>
                      <p className="card-text"><i href={() => false} style={{color:"green" }} className="fa-solid fa-location-dot mx-2"></i>{items.location}</p>

                      </div>
                      <div className="card-footer">
                      <a href={() => false}>{items.like}</a>
                      <i href={() => false} className="fa-regular fa-heart mx-3" style={{color:"red" }} onClick={()=>{dispatch(addlike({id:items._id})); window.location.reload()}}></i>
                        <i href={() => false} type='button' onClick={()=>{handlepreview({id:items._id})}} style={{color:"orange" }} className="fa-solid fa-1x fa-eye mx-3" ></i>
                        <i href={() => false} className="fa-regular fa-envelope mx-3" style={{color:"blue" }}></i>
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

export default ItemsPublic
















// {
//   <>
//   <input value={search2.name} onChange={(e)=>{setsearch2({...search2,name:e.target.value})}}  />
//     <i onClick={displaysearch} className="fa-solid fa-magnifying-glass mx-2" type="submit"></i>
//     {
//       item
//       .filter(items => {
//          if (search2.name === '') {
//            return search2.name;
//          } else if (items.name.toLowerCase().includes(search2.name.toLowerCase())) {
//            return items;
//          }}
//         ).map((items,index) => (
//      <>
//       <div className='text-center' key={index}>
//         <a onClick={showdataitem} >{items.name}</a>
//       </div>
     
//      </>
//      )
//       )
//     }
//   </>
// }