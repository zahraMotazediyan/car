import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Sport from "../icons/Sport";
import Link from "next/link";

function Categories(){
    return(
        <div className="shadow-boxDetail w-max m-mCategories flex justify-between items-center rounded min:w-[320px] min:flex-wrap">
            <Link href="/categories/sedan">
            <div className="text-center	m-1.5 p-1.5 bg-colorP pb-0 rounded w-[100px] min:w-[150px]">
                <p>Sedan</p>
                <Sedan/>
            </div>
            </Link>
            <Link href="/categories/suv">
            <div className="text-center	m-1.5 p-1.5 bg-colorP pb-0 rounded w-[100px]">
                <p>SUV</p>
                <Suv/>
            </div>
            </Link>
            <Link href="/categories/sport">
            <div className="text-center	m-1.5 p-1.5 bg-colorP pb-0 rounded w-[100px]">
                <p>Sport Cars</p>
                <Sport/>
            </div>
            </Link>
            <Link href="/categories/hatchback">
            <div className="text-center	m-1.5 p-1.5 bg-colorP pb-0 rounded w-[100px]">
                <p>Hatchback</p>
                <Hatchback/>
            </div>
            </Link>
        </div>
    )
}

export default Categories;