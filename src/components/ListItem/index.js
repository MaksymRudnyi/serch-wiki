import React from 'react';

import './styles.scss';

const ListItem = ({id, label}) => {
    return (
        <div className="list-item">
            <a href={id} target="_blank">
                {label}
            </a>
            <p>{id}</p>
        </div>
    )
};

export default ListItem