import React from "react";
import styled from "styled-components";

const UnderConstruction = styled.div`
    display: flex;
    justify-content: center;
    font-size: 21px;
    height: 100vh;
    align-items: center;
`

export default function Home(props) {
    return (<UnderConstruction>
        Under construction!
    </UnderConstruction>)
}