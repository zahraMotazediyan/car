import carsData from "../data/carsData";
import CarsPage from "../components/tempelets/CarsPage";
import Categories from "../components/module/Categories";
import SearchBar from "../components/module/SearchBar";
import ButtonAll from "../components/module/ButtonAll";

 function Home() {

     const cars=carsData.slice(0,3);

  return (
    <div >
      <SearchBar/>
        <ButtonAll/>
      <Categories/>
      <CarsPage data={cars}/>
    </div>
  )
}

export default Home;

