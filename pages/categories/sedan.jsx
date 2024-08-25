import React from "react";
import carsData from "../../data/carsData";
import CarList from "../../components/tempelets/CarList";

function Sedan() {

    const sedan = carsData.filter((car) => car.category === "sedan");
    return (
        <div>
            <CarList data={sedan}/>
        </div>
    )
}

export default Sedan;