import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from '../contexts/globalContext'
import Loader from './Loader';

function SingleChannel() {

    const { isLoading } = useGlobalContext();
    let { channelID } = useParams();

    const [first, setfirst] = useState(null)

    const fetchData = async (EXTRA) => {
        const options = {
            method: 'GET',
            url: 'https://youtube-v3-alternative.p.rapidapi.com/channel',
            params: { id: EXTRA },
            headers: {
                'X-RapidAPI-Key': '6b72ba7c1bmsh78a0d051a825ed7p16de1ejsn42ebcacfb77a',
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        }
        const [res1, res2] = await Promise.all([
            axios.request(options).then(function (response) {
                console.log(response.data);
                setTimeout(() => {
                    setfirst(response.data);
                }, 4000);
            }).catch(function (error) {
                console.error(error);
            })
        ])
    }
    useEffect(() => {
        // document.title = `${first.meta.title} - YourTube`


        fetchData(channelID)
    }, [])
    useEffect(() => {
        first ? document.title = `${first.meta.title} - YourTube`
            : "Loading...";

        window.scroll(0, 0);
    }, [first])



    return (
        <Wrapper>

            {
                first ? (
                    <>
                        <Banner src={first.meta.image.banner[4].url} alt={"j.u"} />
                        <ChannelDetails>
                            <img src={first.meta.thumbnail[1].url} alt={first.meta.title} />
                            <h4>{first.meta.title}</h4>
                        </ChannelDetails>
                        <ChannelVideos></ChannelVideos>
                    </>
                ) : <Loader />
            }
        </Wrapper>
    )
}



const Wrapper = styled.div``;
const Banner = styled.img`
        width: 100%;
        height: 200px;
        object-fit: cover;
`;
const ChannelDetails = styled.div``;
const ChannelVideos = styled.div``;
export default SingleChannel