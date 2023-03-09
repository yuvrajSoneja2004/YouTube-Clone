import { createContext, useContext, useEffect, useReducer, useState } from "react";

import axios from 'axios';
import { videosReducer } from "../reducers/globalReducer";


const GlobalContext = createContext();



export const GlobalProvider = ({ children }) => {


    let videosState = {
        currVideos: [],
        isLoading: false,
        isError: false,
        errorMsg: "",
        searchQuery: ""
    }


    const [isDarkMode, setIsDarkMode] = useState(true)



    const [vState, vDispatch] = useReducer(videosReducer, videosState)






    let BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';



    const [first, setFirst] = useState("Bano")


    const getData = async (EXTRA) => {
        vDispatch({ type: "VIDEOS_LOADING" });
        const options = {
            url: BASE_URL,
            params: {
                q: EXTRA,
                part: 'snippet,id',
                regionCode: 'US',
                maxResults: '50',
                order: 'date'
            },
            headers: {
                'X-RapidAPI-Key': '6b72ba7c1bmsh78a0d051a825ed7p16de1ejsn42ebcacfb77a',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const fetch = await axios.get(`${BASE_URL}`, options);
            let res = await fetch.data.items;
            vDispatch({ type: "VIDEOS_DATA", payload: res });
            console.log(res);

        } catch (error) {
            vDispatch({ type: "VIDEOS_ERROR", payload: error.response.data.message });
            console.log(error)
        }
    }




    useEffect(() => {




        getData("");
    }, [])


    return <GlobalContext.Provider value={{ getData, ...vState, vDispatch, isDarkMode }}>{children}</GlobalContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}