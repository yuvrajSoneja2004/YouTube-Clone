import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from '../contexts/globalContext';
import VideoCard from '../components/Card';
import Loader from '../components/Loader';
import ResponseError from '../components/ResponseError';

function Home() {

    let { type } = useParams();
    const { getData, searchQuery, currVideos, isLoading, isError, errorMsg } = useGlobalContext();

    useEffect(() => {
        getData(`${searchQuery}`);
    }, [searchQuery])

    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        return <ResponseError msg={errorMsg} />
    }


    return (
        <WholeContent>
            {type === "explore" ? null :
                <ContentType>New <span>{type}</span> Videos</ContentType>
            }
            <Grid>
                {
                    currVideos === undefined ? <h1>FUCK</h1> : currVideos.map((video, i) => {
                        return <VideoCard key={i} videoInfo={video} />
                    })
                }
            </Grid>
        </WholeContent>
    )
}
const WholeContent = styled.div`
 
    width: 100%;
`

const Grid = styled.div`
    /* width: 100%; */
    /* margin-left: 30px; */
    padding: 40px;
    min-height: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    place-items: center;

    @media screen and (max-width: 1438px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 873px) {
        grid-template-columns: 1fr;
    }
     @media screen and (max-width: 489px) {
        padding: 20px;
    }
`

const ContentType = styled.h1`

        padding-left: 60px;
        padding-top: 30px;
        padding-bottom: 30px;
        font-weight: bolder;

    span {
        color: #FF0000;
        text-transform: capitalize;
    }
`
export default Home