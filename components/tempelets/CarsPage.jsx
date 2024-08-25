import React from "react";
import Card from "../module/Card";

function CarsPage({data}) {
    return (
        <div className="flex flex-wrap justify-around max-w-[1200px] m-auto">
            {data.map((car) => (
                <Card key={car.id} {...car} />
            ))}
        </div>
    )
}

export default CarsPage;