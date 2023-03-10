export const videosReducer = (state, action) => {
    switch (action.type) {
        case "VIDEOS_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "VIDEOS_DATA":
            return {
                ...state,
                isLoading: false,
                currVideos: action.payload
            }

        case "VIDEOS_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload
            }
        case "UPDATE_TYPE":
            return {
                ...state,
                searchQuery: action.payload
            }

        case "SINGLE_DATA":
            return {
                ...state,
                isLoading: false,
                singlePage: action.payload
            }
        case "UPDATE_VIDEO_ID":
            return {
                ...state,
                isLoading: false,
                singleVideoID: action.payload
            }

        default:
            return state
    }
}

// Theme Reducer

export const themeReducer = (state, action) => {
    switch (action.type) {
        case "SET_DARK_MODE":
            return {
                isDarkMode: true,
                background: "#121212 !important",
                color: '#ffffff !important'
            }

        case "SET_LIGHT_MODE":
            return {
                isDarkMode: false,
                background: "#ffffff !important",
                color: 'black !important'



            }


        default:
            return state;
    }
}