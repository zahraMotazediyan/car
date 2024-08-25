import React, {useState} from "react";
import {useRouter} from "next/router";

function SearchBar() {

    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const router = useRouter();

    const searchHandler = () => {
        if (min && max) {
            router.push(`/filter/${min}/${max}`);
        } else {
            alert("Please inter maximum and minimum !")
        }
    }
    return (
        <div
            className="flex justify-between shadow-boxCard w-[440px] m-mCategories p-1.5 max-w-screen-sm:w-[320px] max-w-screen-sm:flex-wrap max-w-screen-sm:justify-center">
            <div className="flex flex-col w-full max-w-screen-sm:m-1.5">
                <input className="border-2 border-solid	border-colorP" placeholder="Inter min-price" value={min}
                       onChange={(e) => setMin(e.target.value)}/>
                <input className="border-2 border-solid	border-colorP" placeholder="Inter max-price" value={max}
                       onChange={(e) => setMax(e.target.value)}/>
            </div>
            <button onClick={searchHandler}
                    className="m-mDetail bg-colorP border-none p-2.5 rounded cursor-pointer ml-2.5 max-w-screen-sm:w-full max-w-screen-sm:m-1.5">Search
            </button>
        </div>
    )
}

export default SearchBar;