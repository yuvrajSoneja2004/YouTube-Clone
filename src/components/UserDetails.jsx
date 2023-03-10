import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import styled from 'styled-components';
import Loader from './Loader';

function UserDetails() {

    const { user, isLoading, isAuthenticated, logout, loginWithRedirect } = useAuth0();

    if (isLoading) {
        return <Loader />
    }
    if (!isAuthenticated) {
        return <>
            <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                <h4>You need to Sign up or Sign in </h4>
                <LogoutBtn onClick={() => { loginWithRedirect() }}>Sign up</LogoutBtn>
            </div>
        </>
    }
    return (
        <WholeUserDetails>
            <img src={user.picture} alt={user.name} />
            <h1>{user.name}</h1>
            <b>{user.nickname}</b>
            <b>{user.email}</b>
            <LogoutBtn onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</LogoutBtn>
        </WholeUserDetails>
    )
}


const WholeUserDetails = styled.div`

padding: 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
img {
    border-radius: 50%;
}
`

const LogoutBtn = styled.button`
 border: none;
    outline: none;
    background-color: #FF0000;
    color: #fff;
    padding: 8px 20px;
    border-radius: 3px;
    transition: all .3s;
    margin-top: 20px;
`
export default UserDetails