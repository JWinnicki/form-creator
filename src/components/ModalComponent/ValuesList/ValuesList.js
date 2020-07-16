import React from 'react';

import './ValuesList.scss';
import ValuesListItem from '../ValuesListItem/ValuesListItem';

const ValuesList = ({values}) => {

    const renderItems = () => {
        const valuesArr = [];
        for (const el in values) {
            valuesArr.push(values[el]);
        }

        console.log(valuesArr)

        return valuesArr.map((el, index) => {
            return <ValuesListItem key={index} value={el} index={index}/>
        });
    }

    return (
        <div className='ValuesList'>
            {renderItems()}
        </div>
    );
}

export default ValuesList;