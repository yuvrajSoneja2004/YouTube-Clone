import React from 'react'
import { useParams } from 'react-router-dom'

function SingleVideoPage() {

    const { videoID } = useParams();
    return (
        <div>{videoID}</div>
    )
}

export default SingleVideoPage