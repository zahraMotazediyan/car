import React from "react";
import Back from "../icons/Back";
import {router} from "next/client";
import Card from "../module/Card";

function CarList({data}) {

    const backHandler = () => {
        router.back()
    }
    return (
        <div className="max-w-screen-xl	m-auto">
            <div className="flex items-center text-base w-fit p-padHatch bg-colorP m-mBye rounded cursor-pointer"
                 onClick={backHandler}>
                <Back/>
                <p className="ml-2.5">Back</p>
            </div>
            <div className="flex justify-around flex-wrap">
                {
                    data.map((item) => <Card key={item.id} {...item}/>)
                }
            </div>
        </div>
    )
}

export default CarList;