import { createContext, useContext, useEffect, useReducer, useState } from "react";

import axios from 'axios';
import { themeReducer, videosReducer } from "../reducers/globalReducer";


const GlobalContext = createContext();



export const GlobalProvider = ({ children }) => {


    let videosState = {
        currVideos: [],
        isLoading: false,
        isError: false,
        errorMsg: "",
        searchQuery: "popular",
        singleVideoID: "fM_zZ61GmOk",
        singlePage: {}
    }

    let initialThemeState = {

        background: "#ffffff !important",
        color: '#000 !important'
    }





    const [vState, vDispatch] = useReducer(videosReducer, videosState)
    const [single, setSingle] = useState({})






    let BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com/search';
    let SINGLE_BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com/video';



    // Theme
    const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)

    const handleDarkMode = () => {
        if (!themeState.isDarkMode) {
            themeDispatch({ type: "SET_DARK_MODE" });
            console.log("TRUE")
        }
        else {
            themeDispatch({ type: "SET_LIGHT_MODE" });
            console.log("FLASE")


        }
    }


    const getData = async (EXTRA) => {
        vDispatch({ type: "VIDEOS_LOADING" });

        // Deprecated 

        // const options = {
        //     url: BASE_URL,
        //     params: {
        //         q: EXTRA,
        //         part: 'snippet,id',
        //         regionCode: 'US',
        //         maxResults: '50',
        //         order: 'date'
        //     },
        //     headers: {
        //         'X-RapidAPI-Key': '6b72ba7c1bmsh78a0d051a825ed7p16de1ejsn42ebcacfb77a',
        //         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        //     }
        // };


        const options = {
            url: BASE_URL,
            params: { query: EXTRA, geo: 'US', lang: 'en' },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        };

        try {
            const fetch = await axios.get(`${BASE_URL}`, options);
            let res = await fetch.data.data;
            vDispatch({ type: "VIDEOS_DATA", payload: res });


        } catch (error) {
            vDispatch({ type: "VIDEOS_ERROR", payload: error.response.data.message });
            console.log(error)
        }
    }


    const getSingleVideoData = (EXTRA) => {
        vDispatch({ type: "VIDEOS_LOADING" });


        const options = {
            url: SINGLE_BASE_URL,
            params: { id: EXTRA },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        };

        axios.get(SINGLE_BASE_URL, options).then((response) => {
            setSingle(response)
            // console.log(response.data)
            setSingle({ ...response.data })
        }).catch((e) => {
            console.log(e);
        })

    }

    return <GlobalContext.Provider value={{ getData, ...vState, vDispatch, getSingleVideoData, single, themeState, handleDarkMode }}>{children}</GlobalContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}