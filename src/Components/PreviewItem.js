import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchallitem } from "../Redux/features/itemSlice";
import Navbar from "../Components/Navbar";

const PreviewItem = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const item = useSelector((state) => state.appitem.item);
  useEffect(() => {
    dispatch(fetchallitem());
  }, [dispatch]);

  // this is preview{location.state.id}

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-7">
            {item
              .filter((items) => items._id === location.state.id)
              .map((items) => (
                <>
                  <div
                    className="card border-dark mb- mx-3"
                    key={items._id}
                    style={{ maxWidth: "25rem" }}
                  >
                    <div className="row mx-2">
                      <div className="col-md-12">
                        <img
                          src={items.picURL}
                          className="card-img-top my-1 container shadow p-2 mb-3 bg-white rounded"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title">{items.name}</h5>
                      <p className="card-text">{items.detail}</p>
                      <p className="card-text">
                        <i className="fa-solid fa-location-dot mx-1"></i>
                        {items.location}
                      </p>
                      <div
                        className="btn-group btn-group-sm"
                        role="group"
                        aria-label="..."
                      >
                        <a
                          type="button"
                          href="/item"
                          className="btn btn-sm btn-warning"
                        >
                          Back
                        </a>
                        <a
                          type="button"
                          href="/item"
                          className="btn btn-sm btn-danger"
                        >
                          Print
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewItem;
