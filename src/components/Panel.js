import React from 'react';
import PanelStyle from './PanelStyle'

const Panel = ({location}) => {
    return (
        <div>
            <PanelStyle>
                Go to X {location}
            </PanelStyle>
        </div>
    );
};

export default Panel;