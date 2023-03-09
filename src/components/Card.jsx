import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function VideoCard({ videoInfo }) {
    return (
        <Card>
            <img src={videoInfo.thumbnails.medium.url} alt="mk" />
            <div>
                <strong>{videoInfo.title}</strong>
                <br />

            </div>
            <ChannelDetails>
                <span>Channel: </span><PathLink to={`/channel/${videoInfo.channelId}`}>{videoInfo.channelTitle}</PathLink>
            </ChannelDetails>
        </Card>
    )
}


const Card = styled.div`
    width: 330px;

    border-radius: 20px;
    min-height: 250px;

    box-shadow: rgba(99, 99, 99, 0.121) 0px 2px 8px 0px;

    img {
        border-radius: 13px;
        /* border-top-right-radius: 20px; */
        width: 100%;
        height:70%;
    }
    strong {
        /* padding-left: 10px;
        padding-top: 10px; */
        font-size: 14px;
    }
    div {
        padding: 16px;
    }
`

const PathLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const ChannelDetails = styled.div`
    
    
`
export default VideoCard