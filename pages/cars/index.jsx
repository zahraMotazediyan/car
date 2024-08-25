import carsData from "../../data/carsData";
import CarsPage from "../../components/tempelets/CarsPage";
import Categories from "../../components/module/Categories";
import SearchBar from "../../components/module/SearchBar";

function Details() {
    return (
        <div>
            <SearchBar/>
            <Categories/>
            <CarsPage data={carsData}/>
        </div>
    )
}

export default Details;