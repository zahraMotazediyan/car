import LayOut from "../components/layOut/LayOut";
import "/globals.css";


function MyApp({Component,pageProps}) {
    return (
        <div className="bg-bgColor w-full h-dvh">
            <LayOut className="h-screen w-full flex-col" >
                <Component {...pageProps} />
            </LayOut>
        </div>
    )
}

export default MyApp;


