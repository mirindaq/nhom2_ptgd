import React from "react";
import FoodBox from "../../components/FoodBox/FoodBox";
import foodData from "../../data/data";

export default function ProductsSearch() {
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      {foodData.map((food) => (
        <div key={food.id} className="col-md-4 mb-4">
          <FoodBox image={food.image} title={food.title} time={food.time} />
        </div>
      ))}
    </div>
  </div>
  )
}
