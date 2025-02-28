import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Profile from "../../components/Profile/Profile";
import TabNav from "../../components/TabNav/TabNav";
import FoodBox from "../../components/FoodBox/FoodBox";
import foodData from "../../data/data";

export default function Recipes() {


  return (
    <div className="m-5 mt-3">
          <Breadcrumb></Breadcrumb>
          <div className="ms-3">
            <Profile></Profile>
            <TabNav></TabNav>
            <div className="row justify-content-center">
              {foodData.slice(0, 8).map((food) => (
                <div key={food.id} className="col-md-3 mb-3">
                  <FoodBox image={food.image} title={food.title} time={food.time} />
                </div>
              ))}
            </div>
            <Pagination></Pagination>
          </div>
    </div>
  );
}
