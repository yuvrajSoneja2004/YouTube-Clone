import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { useGlobalContext } from '../contexts/globalContext';

function SingleVideoPage() {

    let { getSingleVideoData, singlePage, vDispatch, singleVideoID, single } = useGlobalContext();

    const { videoID } = useParams();

    const [first, setfirst] = useState({
        thumbnail: { url: "https://i.ytimg.com/vi_webp/QTKv9JSy25Y/maxresdefault.webp" },
        thumbnail: { url: "https://i.ytimg.com/vi_webp/QTKv9JSy25Y/maxresdefault.webp" },
        thumbnail: { url: "https://i.ytimg.com/vi_webp/QTKv9JSy25Y/maxresdefault.webp" },
        thumbnail: { url: "https://i.ytimg.com/vi_webp/QTKv9JSy25Y/maxresdefault.webp" },
        thumbnail: { url: "https://i.ytimg.com/vi_webp/QTKv9JSy25Y/maxresdefault.webp" },
        thumbnail: { url: "https://i.ytimg.com/vi_webp/QTKv9JSy25Y/maxresdefault.webp" }
    })

    // useEffect(() => {
    //     vDispatch({ type: "UPDATE_VIDEO_ID", payload: videoID })
    //     getSingleVideoData(videoID)
    //     console.log(videoID)
    // }, [videoID])


    useEffect(() => {


        const fetchData = async (EXTRA) => {
            const options = {
                url: 'https://youtube-v3-alternative.p.rapidapi.com/video',
                params: { id: EXTRA },
                headers: {
                    'X-RapidAPI-Key': '6b72ba7c1bmsh78a0d051a825ed7p16de1ejsn42ebcacfb77a',
                    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
                }
            };
            const [res1, res2] = await Promise.all([
                axios.request(options).then(function (response) {
                    console.log(response.data);
                    setfirst(response.data);
                }).catch(function (error) {
                    console.error(error);
                })
            ])
        }


        fetchData(videoID)
    }, [])
    return (
        <SinglePage>
            <div>
                {/* <h1>{videoID}</h1> */}
            </div>

            <h1>{first.title}</h1>
            <p>Desc  here</p>

        </SinglePage>
    )

}

const SinglePage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    div {
        width: 40%;
        height: 500px;
        border: 2px solid red;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
`

export default SingleVideoPage