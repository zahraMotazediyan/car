import carsData from "../../data/carsData";
import CarList from "../../components/tempelets/CarList";

function Hatchback(){

    const hatchback=carsData.filter((car)=>car.category=== "hatchback");
    console.log(hatchback)
    return(
        <div><CarList data={hatchback}/></div>
    )
}

export default Hatchback;