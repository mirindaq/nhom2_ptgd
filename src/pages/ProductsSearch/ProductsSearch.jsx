import React from "react";
import FoodBox from "../../components/FoodBox/FoodBox";
import foodData from "../../data/data";
import Filter from "../../components/Filters/Filter";
import Pagination from "../../components/Pagination/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductsSearch() {
  return (
    <div className="d-flex container mt-5">
      <div>
    <Filter/>
    </div>
    <div className="mt-0">
      <div className="d-flex align-items-center justify-content-between">
      <h1 style={{ fontWeight: 'bold' }}>Salad (32)</h1>
      <div className="dropdown">
      <button className="btn btn-outline-secondary dropdown-toggle d-flex justify-content-between align-items-center text-start" type="button" style={{ width: "200px", opacity: 0.9 }}>A - Z</button>
      </div>
      </div>
      <div className="row justify-content-center">
      {foodData.map((food) => (
        <div key={food.id} className="col-md-4 mb-4">
          <FoodBox image={food.image} title={food.title} time={food.time} />
        </div>
      ))}
      </div>
      <div className="mb-4">
      <Pagination/>
      </div>
    </div>
    
  </div>
  )
}
