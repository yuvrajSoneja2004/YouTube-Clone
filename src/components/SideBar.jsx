import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from '../contexts/globalContext'
import { categoryData } from '../utils/CategoryData'
import '../../global.css'

function SideBar() {


    let { vDispatch, themeState } = useGlobalContext();
    return (
        <Wrapper style={themeState}>            {
            categoryData.map((cate, i) => {
                return <CateLink key={i} to={`type/${cate.title}`} onClick={() => { vDispatch({ type: "UPDATE_TYPE", payload: cate.title }) }}>
                    <SideBarItem >
                        <img src={cate.icon} alt={cate.title} width={20} />
                        <span style={themeState}>{cate.title}</span>
                    </SideBarItem>
                </CateLink>
            })
        }
        </Wrapper>


    )
}


const SideBarItem = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    text-transform: capitalize;
    margin-left: 10px;
`
const CateLink = styled(NavLink)`
    
    color: ${props => !props.isDarkMode ? "#000" : "#fff"};
    text-decoration: none;

`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 30px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-right-radius: 13px;
    border-bottom-right-radius: 13px;

  
    height: 100vh;
    @media screen and (max-width: 587px) {
        display: none;
    }
`

export default SideBar