import { SELECTED_CITY, SELECTED_LOCALITY,HEADER_SEARCH,LISTCITY_REQUEST,LISTCITY_SUCCESS,LISTCITY_FAIL,
        LISTLOCALITY_SUCCESS,LISTLOCALITY_FAIL,LISTLOCALITY_REQUEST} from "../Constants/constants"
   
import axios from "axios";

export const selectedCity=(city)=>{
    console.log("action",city)
    return{
        type:SELECTED_CITY,
        payload:city
}
}

export const selectedLocality=(locality)=>{
    console.log("action",locality)
    return{
        type:SELECTED_LOCALITY,
        payload:locality
}
}
export const headerSearch=(search)=>{
    console.log("search action",search)
    return{
        type:HEADER_SEARCH,
        payload:search
    }
}

export const getCity = () => async (dispatch) => {

    try {
        dispatch({ type: LISTCITY_REQUEST });
        let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/city`;
        const { data } = await axios.get(link);

        dispatch({
            type: LISTCITY_SUCCESS,
            payload: data.products,
        })

    } catch (error) {
        dispatch({
            type: LISTCITY_FAIL,
            payload: error.response.data.message,
        });

    }
};

export const getLocality = (City) => async (dispatch) => {

    try {
        
        dispatch({ type: LISTLOCALITY_REQUEST });

        let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/locality?city=${City}`;
        const { data } = await axios.get(link);

        dispatch({
            type: LISTLOCALITY_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: LISTLOCALITY_FAIL,
            payload: error.response.data.message,
        });

    }
};