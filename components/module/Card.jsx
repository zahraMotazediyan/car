import React from "react";
import Location from "../icons/Location";
import Link from "next/link";

function Card(props) {
    console.log(props)
    const {
        id, name, model, year, distance, location, image, price
    } = props;

    return (
        <Link href={`/cars/${id}`}>
            <div className="shadow-boxCard w-fit p-2.5 m-4 rounded overflow-hidden">
                <img src={image} className="w-[300px] rounded "/>
                <h4 className="marH">{`${name} ${model}`}</h4>
                <p className="m-mDetail text-xs	text-colorF">{`${year} - ${distance} km`}</p>
                <div className="flex justify-between mP">
                    <p className="bg-colorP p-padP rounded text-[0.9rem] font-bold">${price}</p>
                    <div className="flex items-end">
                        <p className="mr-1">{location}</p>
                        <Location/>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;