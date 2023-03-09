import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from '../contexts/globalContext'
import { categoryData } from '../utils/CategoryData'

function MobileCateogry() {

    let { vDispatch } = useGlobalContext();
    const navigate = useNavigate();
    return (
        <WholeCategory>
            <Grid>
                {
                    categoryData.map((cat, i) => {
                        return <div key={i} to={`type/${cat.title}`} onClick={() => {
                            vDispatch({ type: "UPDATE_TYPE", payload: cat.title })
                            navigate(`type/${cat.title}`)
                        }}>
                            <CategoryBox style={{ background: `${cat.color}` }}>
                                <img src={cat.icon} alt={cat.title} width={50} />
                                <span>{cat.title}</span>
                            </CategoryBox>
                        </div>
                    })
                }
            </Grid>
        </WholeCategory>
    )
}

const WholeCategory = styled.div``

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

// const CateogryLink = styled(Link)`
//     color: black;
//     text-transform: capitalize;
//     text-decoration: none;


// `
const CategoryBox = styled.div`
    /* border: 2px solid orange; */
    margin: 10px;
    display: flex;
    text-transform: capitalize;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    padding: 20px;
    border-radius: 20px;
    color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


    img {
        filter: invert(1);
    }

    

`

export default MobileCateogry