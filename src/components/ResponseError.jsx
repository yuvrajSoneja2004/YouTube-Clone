import React from 'react';
import styled from 'styled-components';
import ServerError from '../assets/server_error.png';

function ResponseError({ msg }) {
    return (
        <WholeError>
            <ErrorPic src={ServerError} alt='server-error-logo' />
            <ErrorMsg>Unable to get data from the server.</ErrorMsg>
            <p>Cause: {msg}.</p>
        </WholeError>
    )
}

const WholeError = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;

    p {
        text-align: center;
    }
`

const ErrorPic = styled.img`
    width: 40%;
`
const ErrorMsg = styled.h1`
    text-align: center;
    padding: 12px 0;
`

export default ResponseError