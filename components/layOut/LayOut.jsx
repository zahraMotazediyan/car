import Link from "next/link";

function LayOut({children}) {
    return (
        <>
            <header
                className="bg-bColor flex items-center flex-col m-marH w-[440px] rounded p-Pad  max-w-screen-sm-w-[320px] ">
                <Link href="/">
                    <h2 className="text-4xl  underline decoration-1 leading-8 border-b-1 border-b-indigo-700 mb-2.5 w-fit">TAKINCAR</h2>
                    <p>Choose and Bye your Car</p>
                </Link>
            </header>
            <div className="min-h-[1000px]">{children}</div>
            <footer className="text-center text-colorF bg-rgb p-padF mt-8"><a className="no-underline text-cF"
                                                                              href="https://botostart.ir">FATA TAK
                CAR </a>| Fara tak car project
            </footer>
        </>
    )
}

export default LayOut;