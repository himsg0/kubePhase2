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
    HOME_STORE_FAIL,
    HOME_STORE_REQUEST,
    HOME_STORE_SUCCESS,
    HOME_NEWSTORE_FAIL,
    HOME_NEWSTORE_REQUEST,
    HOME_NEWSTORE_SUCCESS,
    HBLOG_FAIL,
    HBLOG_REQUEST,
    HBLOG_SUCCESS
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


// HOME STORE LISTING

export const getHStore = (city, locality, category, sub_category, onlineShop = "", homeDelivery = "",search) => async (dispatch) => {


    try {
        dispatch({ type: HOME_STORE_REQUEST });

        let link = "";
        if(search)
        {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?keyword=${search}`;
        }
        else{

        if (!category && !sub_category && !homeDelivery && !onlineShop && city && !locality ) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}`;
        }

        else if (category && !sub_category && !homeDelivery && !onlineShop && city && !locality ) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&city=${city}`;
        }

        else if (category && sub_category && !homeDelivery && !onlineShop && city && !locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&city=${city}`;
        }
        else if (category && sub_category && onlineShop && !homeDelivery && city && !locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&onlineShop=${onlineShop}&city=${city}`;
        }
        else if (category && sub_category && homeDelivery && !onlineShop && city && !locality ) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&homeDelivery=${homeDelivery}&onlineShop=${onlineShop}&city=${city}`;
        }
        else if (category && sub_category && onlineShop && homeDelivery && city && !locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&onlineShop=${onlineShop}&homeDelivery=${homeDelivery}&city=${city}`;

        }
        else if (!category && !sub_category && !onlineShop && homeDelivery && city && !locality ) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?homeDelivery=${homeDelivery}&city=${city}`;

        }
        else if (!category && !sub_category && !homeDelivery && onlineShop && city && !locality ) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?onlineShop=${onlineShop}&city=${city}`;

        }

        else if (!category && !sub_category && homeDelivery && onlineShop && city && !locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?homeDelivery=${homeDelivery}&onlineShop=${onlineShop}&city=${city}`;
        }

        else if (category && !sub_category && homeDelivery && onlineShop && city && !locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&homeDelivery=${homeDelivery}&onlineShop=${onlineShop}&city=${city}`;
        }
        else if (category && !sub_category && !homeDelivery && onlineShop && city && !locality ) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&onlineShop=${onlineShop}&city=${city}`;
        }
        else if (category && !sub_category && homeDelivery && !onlineShop && city && !locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&homeDelivery=${homeDelivery}&city=${city}`;
        }
        //2 set

       else if (!category && !sub_category && !homeDelivery && !onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&locality=${locality}`;
        }

        else if (category && !sub_category && !homeDelivery && !onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&city=${city}&locality=${locality}`;
        }

        else if (category && sub_category && !homeDelivery && !onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&city=${city}&locality=${locality}`;
        }
        else if (category && sub_category && onlineShop && !homeDelivery && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&onlineShop=${onlineShop}&city=${city}&locality=${locality}`;
        }
        else if (category && sub_category && homeDelivery && !onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&homeDelivery=${homeDelivery}&onlineShop=${onlineShop}&city=${city}&locality=${locality}`;
        }
        else if (category && sub_category && onlineShop && homeDelivery && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&onlineShop=${onlineShop}&homeDelivery=${homeDelivery}&city=${city}&locality=${locality}`;

        }
        else if (!category && !sub_category && !onlineShop && homeDelivery && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?homeDelivery=${homeDelivery}&city=${city}&locality=${locality}`;

        }
        else if (!category && !sub_category && !homeDelivery && onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?onlineShop=${onlineShop}&city=${city}&locality=${locality}`;

        }

        else if (!category && !sub_category && homeDelivery && onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?homeDelivery=${homeDelivery}&onlineShop=${onlineShop}&city=${city}&locality=${locality}`;
        }

        else if (category && !sub_category && homeDelivery && onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&homeDelivery=${homeDelivery}&onlineShop=${onlineShop}&city=${city}&locality=${locality}`;
        }
        else if (category && !sub_category && !homeDelivery && onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&onlineShop=${onlineShop}&city=${city}&locality=${locality}`;
        }
        else if (category && !sub_category && homeDelivery && !onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&homeDelivery=${homeDelivery}&city=${city}&locality=${locality}`;
        }
    }
        const { data } = await axios.get(link);

        dispatch({
            type: HOME_STORE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: HOME_STORE_FAIL,
            payload: error.response.data.message,
        });

    }
};



// Home New Listing


export const getHNewStore = () => async (dispatch) => {


    try {
        dispatch({ type: HOME_NEWSTORE_REQUEST });

        let link = "http://localhost:8080/api/v1/rl7nuo0GNHFAvhTL/brand/all";
    
        const { data } = await axios.get(link);

        dispatch({
            type: HOME_NEWSTORE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: HOME_NEWSTORE_FAIL,
            payload: error.response.data.message,
        });

    }
};

// Home Blog post

export const getHBlog = (category) => async (dispatch) => {


    try {
        dispatch({ type: HBLOG_REQUEST });

        let link = "";
        if(!category){
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/blog/all`;
        }
        else if(category){
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/blog/all?category=${category}`
        }
        
        
        

        const { data } = await axios.get(link);
        
        
        dispatch({
            type: HBLOG_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: HBLOG_FAIL,
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