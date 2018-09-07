import React from 'react';
import styled from "styled-components"

const PanelStyle = styled.div`
color: red;
text-align: center;
width: 100px;
background-color: #FFF111;
height: 100px;
display: flex;
align-items: center;
`

const Panel = ({location}) => {
    return (
        <div>
            <PanelStyle>
                Go to {location}
            </PanelStyle>
        </div>
    );
};

export default Panel;