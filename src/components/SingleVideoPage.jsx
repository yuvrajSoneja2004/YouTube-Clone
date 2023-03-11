import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { useGlobalContext } from '../contexts/globalContext';
import { RxVideo } from 'react-icons/rx'
import { AiOutlineEye } from 'react-icons/ai'
import { MdSystemUpdateAlt } from 'react-icons/md'

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
        <>


            <SinglePage>

                {
                    first ? (
                        <>

                            <DRow>
                                <VideoIcon />
                                <h2>{first.title}</h2>
                            </DRow>
                            <DRow>
                                <DurationIcon />
                                <h4>{first.viewCount}</h4>
                            </DRow>
                            <DRow>
                                <UploadDate />
                                <h4>{first.uploadDate}</h4>
                            </DRow>
                        </>
                    ) : (
                        <h1>Loading.</h1>
                    )
                }
            </SinglePage>


        </>
    )

}

const SinglePage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 60px;
    padding: 20px;
    @media screen and (max-width:467px) {
        padding: 5px;
        margin-left: 5px;
    }

   
`

const VideoIcon = styled(RxVideo)`
    color: #ff0000;
    font-size: 30px;
`

const DurationIcon = styled(AiOutlineEye)`
    font-size: 30px;
    color: #ff0000;


`
const UploadDate = styled(MdSystemUpdateAlt)`
    color: #ff0000;

    font-size: 30px;
`

const DRow = styled.div`
display: flex;
align-items: center;
gap: 15px;
margin: 20px 0;


h2 {
    margin: 0 !important;
    @media screen and (max-width:467px) {
    
    font-size: 15px;

}
}h4 {
    margin: 0 !important;
    @media screen and (max-width:467px) {
    
    font-size: 15px;

}
}
`

export default SingleVideoPage