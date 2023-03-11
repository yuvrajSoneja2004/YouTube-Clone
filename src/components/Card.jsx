import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from '../contexts/globalContext';
import Loader from './Loader';
import ErrorImage from '../assets/thumb_not_found.jpg'

function VideoCard({ videoInfo }) {

    useEffect(() => {
        console.log(videoInfo)
    }, [])

    let { currVideos } = useGlobalContext();
    const navigate = useNavigate();

    const navigateToPath = () => {
        navigate(`/single-video-page/video/${videoInfo.videoId}`)
    }
    return (
        <>
            {


                currVideos ? (
                    <>
                        <Card>
                            <img src={videoInfo.thumbnail[0].url} alt="mk" onClick={navigateToPath}

                                onError={(e) => {
                                    e.target.onerror = null; // prevent infinite loop
                                    e.target.src = ErrorImage;
                                }}
                            />
                            <ChannelDetails >
                                {/* <img src={videoInfo.channelThumbnail[0] === undefined ? "" : videoInfo.channelThumbnail[0].url} alt="ha" /> */}
                                {/* <img src={videoInfo.channelThumbnail[0].url} /> */}
                                <Mor>
                                    <strong onClick={navigateToPath}>{videoInfo.title.slice(0, 80)}...</strong>
                                    <PathLink to={`/channel/${videoInfo.channelId}`}>{videoInfo.channelTitle}</PathLink>

                                    <Views>
                                        {/* <span>{videoInfo.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} views</span> */}
                                        <span>•</span>
                                        <span>{videoInfo.publishedText}</span>
                                    </Views>


                                </Mor>


                            </ChannelDetails>


                        </Card>
                    </>
                ) : <h1>WHy</h1>



            }
        </>
    )
}


const Card = styled.div`
    width: 330px;
    text-decoration: none;
    color: black;
    border-radius: 20px;
    min-height: 250px;

     
    &:hover {
        cursor: pointer;
    }

    /* box-shadow: rgba(99, 99, 99, 0.121) 0px 2px 8px 0px; */
        @media screen and (max-width: 1001px) {
            width: 270px;
        }

        @media screen and (max-width: 873px) {
            width: 100%;
        }
    img {
        border-radius: 13px;
        /* border-top-right-radius: 20px; */
        width: 100%;
        height:70%;
    }
    strong {
        /* padding-left: 10px;
        padding-top: 10px; */
        font-size: 12px;
    }
`

const Mor = styled.div`
     
        display: flex;
        flex-direction: column;
    
`

const Views = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: -8px;
    span {
        font-size: 12px;
    }
`

const PathLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 200;
    font-size: 12px;
    margin: 10px 0;
`

const ChannelDetails = styled.div`

        display: flex;
        padding: 16px;
        padding-left: 0;
        align-items: flex-start;
        gap: 10px;
    img {
        width: 40px;
        border-radius: 50%;
    }
    
`
export default VideoCard