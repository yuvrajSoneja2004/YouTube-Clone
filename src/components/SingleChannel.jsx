import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from '../contexts/globalContext'
import { TiTickOutline } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import Loader from './Loader';
// import Card from '../components/Card';
import VideoCard from '../components/Card';

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
                            <div>
                                <Manage>
                                    <img src={first.meta.thumbnail[1].url} alt={first.meta.title} />
                                    <ChannelDet>
                                        <h4>{first.meta.title}</h4>
                                        <label>{first.meta.subscriberCount} Subscribers</label>
                                    </ChannelDet>
                                </Manage>
                                <FamilyFriendlyBanner>
                                    {
                                        first.meta.isFamilySafe ? (
                                            <MainFamily>
                                                <CorrectIcon /><span>Family Friendly</span>
                                            </MainFamily>
                                        ) : (
                                            <MainFamily>
                                                <ImCross /><span>Not Family Friendly</span>
                                            </MainFamily>
                                        )
                                    }
                                </FamilyFriendlyBanner>
                            </div>
                        </ChannelDetails>
                        <ChannelVideos>
                            <h2>{first.meta.title}'s Videos</h2>
                            <Grid>
                                {
                                    first.data.map((video, i) => {
                                        return <VideoCard key={i} videoInfo={video} />
                                    })
                                }
                            </Grid>
                        </ChannelVideos>
                    </>
                ) : <Loader />
            }
        </Wrapper>
    )
}



const Wrapper = styled.div`

`;


const Grid = styled.div`
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




const Banner = styled.img`
        width: 100%;
        height: 200px;
        object-fit: cover;
`;
const ChannelDetails = styled.div`
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 7px;
        }
        padding:  0 80px;

`;
const ChannelVideos = styled.div`
        padding:  0 80px;
        margin-top: 70px;
`;



const ChannelDet = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start !important;
align-items: flex-start !important;
`;



const Manage = styled.div`
display: flex;
align-items: flex-start !important;
gap: 10px;
img {
    border-radius: 50%;

}
h4 {
        margin-top: 10px;
}
`;
const CorrectIcon = styled(TiTickOutline)`
    font-size: 30px;
    fill: #90EE90;
`;
const MainFamily = styled.div`
display: flex;
align-items: center;
`;

const FamilyFriendlyBanner = styled.div`
    
`
export default SingleChannel