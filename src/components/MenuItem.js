import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function MenuItem({ image, name, price }) {
  return (

    <div className="card menuItem">
      <div className="row g-0">
        <div className="col-md-6">
          <img src={image}></img>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"><small className="text-muted">${price}</small></p>
            <button>ORDER NOW</button>
          </div>
        </div>
      </div>
      {/* <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h3> {name} </h3>
      <p> ${price} </p>
      <button> ORDER NOW </button> */}
    </div>
  );
}

export default MenuItem;
