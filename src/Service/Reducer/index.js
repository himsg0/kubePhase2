import { combineReducers } from "redux";
import Headerdata from "./Reducer";
import {getCityReducer,getLocalityReducer} from "../Reducer/Reducer"
import { localityBannerReducer,catReducer, offerReducer,storeHReducer,storeHNewReducer,blogHReducer } from "../Reducer/HomeReducers";
import { getCatReducer, getSubcatReducer, storeReducer } from "../Reducer/StoreListReducers";
import { storePageReducer , storePageOfferReducer,storePageProductReducer , storePageAboutReducer } from "./StorePageReducer";
import {offersReducer} from "./OfferPageReducer";
import {blogReducer,blogCategoryReducer,SingleBlogReducer,RelatedBlogReducer} from "./BlogReducer";

export default combineReducers({
    Headerdata , localityBannerReducer ,catReducer , offerReducer ,getCatReducer,getSubcatReducer,
    storeReducer,storePageReducer,storePageOfferReducer,storePageProductReducer,storePageAboutReducer,
    getCityReducer,getLocalityReducer,blogReducer,blogCategoryReducer,SingleBlogReducer,RelatedBlogReducer,
    offersReducer,storeHReducer,storeHNewReducer,blogHReducer
})