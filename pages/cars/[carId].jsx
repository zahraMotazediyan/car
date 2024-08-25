import React from "react";
import {useRouter} from 'next/router';
import carsData from "../../data/carsData";
import CarsDetails from "../../components/tempelets/CarsDetails";

function CarDetail() {

    const router = useRouter();
    const {carId} = router.query;
    const CarDetail = carsData[carId - 1];
    return (
        <CarsDetails {...CarDetail}/>
    )
}

export default CarDetail;