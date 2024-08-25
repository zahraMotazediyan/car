import React from "react";
import carsData from "../../data/carsData";
import CarList from "../../components/tempelets/CarList";

function Sport(){

    const sportCar=carsData.filter((car)=>car.category === "sport");
    return(
        <div>
            <CarList data={sportCar}/>
        </div>
    )
}

export default Sport;