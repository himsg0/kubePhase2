import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./Components/Layouts/Header/Header"
import Categories from "./Components/Pages/Categories/Categories"
import SubCategories from "./Components/Pages/SubCategories/SubCategories";
import BestOffers from "./Components/Pages/BestOffers/BestOffer"
import LatestBlogs from "./Components/Pages/LatestBlogs/LatestBlogs";
import SingleBlog from "./Components/Pages/SingleBlog/SingleBlog"
import Test from "./Components/testing/test"
import {BrowserRouter as Router, Routes, Route, useRoutes} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/LatestBlogs" element={<LatestBlogs />}/>
    <Route path="/LatestBlogs/:title/*" element={<SingleBlog/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;

