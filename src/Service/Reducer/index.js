import { combineReducers } from "redux";
import Headerdata from "./Reducer";
import {getCityReducer,getLocalityReducer} from "../Reducer/Reducer"
import { localityBannerReducer,catReducer, offerReducer  } from "../Reducer/HomeReducers";
import { getCatReducer, getSubcatReducer, storeReducer } from "../Reducer/StoreListReducers";
import { storePageReducer , storePageOfferReducer,storePageProductReducer , storePageAboutReducer } from "./StorePageReducer";
import {blogReducer,blogCategoryReducer,SingleBlogReducer} from "./BlogReducer"

export default combineReducers({
    Headerdata , localityBannerReducer ,catReducer , offerReducer ,getCatReducer,getSubcatReducer,
    storeReducer,storePageReducer,storePageOfferReducer,storePageProductReducer,storePageAboutReducer,
    getCityReducer,getLocalityReducer,blogReducer,blogCategoryReducer,SingleBlogReducer
})