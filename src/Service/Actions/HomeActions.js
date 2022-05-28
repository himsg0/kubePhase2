import {
    CLEAR_ERROR,
    LOCALITY_BANNER_FAIL,
    LOCALITY_BANNER_REQUEST,
    LOCALITY_BANNER_SUCCESS,
    ALL_CAT_FAIL,
    ALL_CAT_REQUEST,
    ALL_CAT_SUCCESS,
    DAY_OFFER_FAIL,
    DAY_OFFER_REQUEST,
    DAY_OFFER_SUCCESS,
} from "../Constants/HomeConstant";
import axios from "axios"


export const getBanner = (city, locality) => async (dispatch) => {
    try {
        console.log("api iNfo", city, locality)
        dispatch({ type: LOCALITY_BANNER_REQUEST })
        let link="";
        if(city && !locality){
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/getbanner?city=${city}&locality=null`;
        }
        else if(city && locality)
        {
           link=` https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/getbanner?city=${city}&locality=${locality}`;

        }

        const { data } = await axios.get(link)
        console.log("banner Action",data)
        dispatch({
            type: LOCALITY_BANNER_SUCCESS,
            payload: data.products[0].images[0].url
        })

    } catch (error) {
        dispatch({
            type: LOCALITY_BANNER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getCat = () => async (dispatch) => {

    try {
        dispatch({ type: ALL_CAT_REQUEST });

        const { data } = await axios.get(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/subcategories`);
        console.log("cat Action",data)
        dispatch({
            type: ALL_CAT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: ALL_CAT_FAIL,
            payload: error.response.data.message,
        });

    }
};

//Featured Offer
export const getOffer =(city,locality)=>async(dispatch)=>{

    try {
        dispatch({type: DAY_OFFER_REQUEST});

        let link = ``;
        if(city && !locality)
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&featured=true`;
        }
        else if(city && locality)
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&locality=${locality}&featured=true`;
        }

    
        const {data} =await axios.get(link);
        console.log("offer action props",data);
        
        dispatch({
            type:DAY_OFFER_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: DAY_OFFER_FAIL,
            payload: error.response.data.message,
        });
        
    }
    };



//clearings error
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERROR,
    })
}