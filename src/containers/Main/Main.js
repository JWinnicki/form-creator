import React from 'react';

import './Main.scss';
import Icon from '../../components/Icon/Icon';

const Main = () => {
    return (
        <div className='Main'>
            <div className='Main-header'>
                <p className='Main-p'>Create</p>
                <p className='Main-p'>And</p>
                <p className='Main-p'>Customize</p>
                <p className='Main-p'>Your Form</p>
            </div>
            <div className='Main-icon'>
                <Icon icon='form' size='huge' color='red' />
            </div>
        </div>
    );
}

export default Main;

//SVG authors:
//Form <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>