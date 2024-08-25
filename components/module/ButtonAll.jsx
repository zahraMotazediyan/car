import Link from "next/link";


function ButtonAll(){
    return(
        <div className="w-[440px] m-mCategories max-w-screen-sm:w-[320px]">
            <Link className="bg-colorP block w-full text-center p-padF" href="/cars">See all</Link>
        </div>
    )
}

export default ButtonAll;