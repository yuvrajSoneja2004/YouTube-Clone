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

        default:
            return state
    }
}