import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ImSearch } from 'react-icons/im'
import axios from 'axios'
import VideoCard from './Card';
import Loader from './Loader';


function Searchpage() {

    const [searchResult, setSearchResult] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    const fetchData = async (EXTRA) => {
        const options = {
            method: 'GET',
            url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
            params: { query: EXTRA, geo: 'US', lang: 'en' },
            headers: {
                'X-RapidAPI-Key': '6b72ba7c1bmsh78a0d051a825ed7p16de1ejsn42ebcacfb77a',
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        };
        const [res1, res2] = await Promise.all([
            axios.request(options).then(function (response) {
                console.log(response.data.data);

                setSearchResult(response.data.data);

            }).catch(function (error) {
                console.error(error);
            })
        ])
    }
    const searchVids = () => {

        fetchData(searchInput)
    }




    return (
        <Wrapper>
            <SearchInput >
                <input type="text" placeholder='Search Videos' onChange={e => setSearchInput(e.target.value)} value={searchInput} />
                <button onClick={searchVids}><SearchIcon></SearchIcon></button>
            </SearchInput>

            <Grid>
                {
                    searchResult ? (
                        <>
                            {
                                searchResult.map((result, i) => {
                                    return <VideoCard key={i} videoInfo={result} />
                                })
                            }
                        </>
                    ) : (
                        <StaticSearch>
                            <h2>Search something to get result here.</h2>
                        </StaticSearch>
                    )
                }
            </Grid>
        </Wrapper>
    )
}


const Wrapper = styled.div`
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
`
const SearchInput = styled.div`
        width: 50%;
        display: flex;
        align-items: center;

        @media screen and (max-width: 586px) {
            width: 96%;
        }
        input {
            width: 100%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        padding: 9px 14px;
        border: none;
        outline: 1px solid lightgray;
        transition: .3s;

          &:focus {
            transition: .4s;
          }
        }

        button {
            padding: 9px 14px;
            padding-right: 30px;
            border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border: none;
        border: 1px solid lightgray;

        }



`


const Grid = styled.div`
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

const SearchIcon = styled(ImSearch)`
margin-left: 10px;
font-size: 20px;

`


const StaticSearch = styled.div`
text-align: center;
/* width: 100%; */
position: absolute;
padding: 15px;

`
export default Searchpage