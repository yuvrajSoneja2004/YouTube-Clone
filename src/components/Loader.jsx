import React from 'react';
import styled from 'styled-components';
import './Loader.css';

function Loader() {
    return (
        <WholeLoader>
            <span class="loader"></span>
        </WholeLoader>
    )
}


const WholeLoader = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`

export default Loader