import React from 'react';

import './ValuesListItem.scss';

const ValuesListItem = ({value, index}) => {
    return (
        <div className='ValuesListItem'>
            <p className='ValuesListItem-Text'>{`${index + 1}. ${value}`}</p>
        </div>
    );
}

export default ValuesListItem;