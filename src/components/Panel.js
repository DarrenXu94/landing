import React from 'react';
import PanelStyle from './PanelStyle'

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