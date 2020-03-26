import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';
import Icon from '../../components/Icon/Icon';
import MainButton from '../../components/MainButton/MainButton';

const Main = () => {
    return (
        <div className='Main'>
            <div className='Main-headerDiv'>
                <div className='Main-header'>
                    <p className='Main-p'>Create</p>
                    <p className='Main-p'>And</p>
                    <p className='Main-p'>Customize</p>
                    <p className='Main-p'>Your Form</p>
                </div>
                <div className='Main-icon'>
                    <Icon icon='form' size='huge' color='#cf0000' />
                </div>
            </div>
            <div className='Main-buttonDiv'>
                <Link to='/create-form'>
                    <MainButton fontColor='white' colorPrimary='#cf0000' colorSecondary='black' size='big'>Start</MainButton>
                </Link>
            </div>
        </div>
    );
}

export default Main;

//SVG authors:
//Form <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
//Arrow <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>