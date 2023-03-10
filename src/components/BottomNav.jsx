import React from 'react'
import styled from 'styled-components'
import { AiOutlineHome } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { RiUser6Line } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
function BottomNav() {

    const iconSize = 25;
    return (
        <WholeBottomNav>

            <TheLink to='/'>
                <div><AiOutlineHome size={iconSize} /> <span>Home</span></div>
            </TheLink>
            <TheLink to='/mobile/category'>
                <div><BiCategory size={iconSize} /> <span>Category</span></div>
            </TheLink>

            <TheLink to='/user-details'>
                <div><RiUser6Line size={iconSize} /> <span>Account</span></div>
            </TheLink>


        </WholeBottomNav>
    )
}
const WholeBottomNav = styled.div`
    width: 100%;
    height: 70px;
    /* border: 2px solid yellow; */
    position: fixed;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: white;

    bottom: 0;
    /* overflow: hidden; */
    /* z-index: 9999; */
    display: none;
    padding: 30px 0 ;
    
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        transition: .3s;
        &:hover {
            color: #FF0000;
        }
        
       
    }
    @media screen and (max-width: 587px) {
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    }
`

const TheLink = styled(Link)`
color: black;
text-decoration: none;
    
`
export default BottomNav