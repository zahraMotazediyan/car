import carsData from "../../data/carsData";
import {useRouter} from "next/router";
import CarList from "../../components/tempelets/CarList";

function FilterCars() {
    const router = useRouter();
    const [min, max] = router.query.slug || [];
    const filterData = carsData.filter(item => item.price > min & item.price < max)

    if (!filterData.length) return <h3>Not found</h3>

    return  <CarList data={filterData}/>

}

export default FilterCars;