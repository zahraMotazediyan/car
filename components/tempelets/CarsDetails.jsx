import React from "react";
import Company from "../icons/Company";
import Calender from "../icons/Calender";
import Location from "../icons/Location";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Model from "../icons/Model";

function CarsDetails(props) {
    const {
        id, name, model, year, distance, location, image, price, description
    } = props;

    return (
        <div className="flex flex-col laptop:max-w-[900px] m-auto md:m-[0 15px]">
            <img className="w-full rounded-md" src={image} alt="image"/>
            <h3 className="m-marginH text-2xl">{name} {model}</h3>
            <div className="w-full shadow-boxDetail m-mDetails">
                <div className="flex items-baseline m-mDetails">
                    <Company/>
                    <p className="ml-2.5">Company</p>
                    <span className="ml-auto text-colorF">{name}</span>
                </div>
                <div className="flex items-baseline m-mDetails">
                    <Model/>
                    <p className="ml-2.5">Model</p>
                    <span className="ml-auto text-colorF">{name}</span>
                </div>
                <div className="flex items-baseline m-mDetails">
                    <Calender/>
                    <p className="ml-2.5">First registration</p>
                    <span className="ml-auto text-colorF">{year}</span>
                </div>
                <div className="flex items-baseline m-mDetails">
                    <Road/>
                    <p className="ml-2.5">Km driven</p>
                    <span className="ml-auto text-colorF">{distance}</span>
                </div>
            </div>
            <div className="w-full shadow-boxDetail m-mDetails">
                <div className="flex items-baseline m-mDetails">
                    <Location/>
                    <p className="ml-2.5">Location</p>
                    <span className="ml-auto text-colorF">{location}</span>
                </div>
            </div>
            <div className="w-full shadow-boxDetail m-mDetails">
                <p className="text-base	font-symbols m-mDetails ">Extra Information</p>
                <p className="text-colorF mb-2.5 text-justify">{description}</p>
            </div>
            <div className="w-full shadow-boxDetail m-mDetails">
                <div className="flex items-center">
                    <Money/>
                    <p className="text-base">Price :</p>
                    <span className="text-base">{price}</span>
                </div>
            </div>
            <button className="m-mBye rounded p-2.5 bg-bColor border-none cursor-pointer text-base">Bye</button>
        </div>
    )
}

export default CarsDetails;