import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./Components/Layouts/Header/Header"
import Categories from "./Components/Pages/Categories/Categories"
import SubCategories from "./Components/Pages/SubCategories/SubCategories";
import BestOffers from "./Components/Pages/BestOffers/BestOffer"
import Test from "./Components/testing/test"

function App() {
  return(
    <div>
    <Header />
    <Categories />
    {/* <BestOffers /> */}
    </div>
  )
}

export default App;

