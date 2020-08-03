import React from 'react';

import './InputOptionsContainer.scss';
import InputOption from '../InputOption/InputOption';

const InputOptionsContainer = ({options, deleteHandler, addHandler, change, latestOption}) => {

    const renderOptionsList = () => {
        if(options.length > 0) {
            return options.map(el => {
                return (
                    <InputOption 
                        text={el.option}
                        key={el.id}
                        id={el.id}
                        click={deleteHandler} //onDeleteOptionHandler
                    />
                )
            });
        }
    }

    return (
            <>
                <h1 className='InputOptionsContainer-sectionTitle'>Input Options</h1>
                <div className='InputOptionsContainer-inlineInputDiv'>
                    <label htmlFor='selectInputOptions' className='InputOptionsContainer-inlineInputLabel'>
                        <p className='InputOptionsContainer-labelText'>Please add input's options:</p>
                    </label>
                    <input
                        type='text'
                        id='selectInputOptions'
                        name='selectInputOptions'
                        onChange={change} //onOptionsInputHandler
                        value={latestOption}
                        className='InputOptionsContainer-optionsInput'
                    />
                    <button type='button' className='addOptionsButton' disabled={latestOption.length === 0} onClick={addHandler}>+</button>
                </div>
                <div className='InputOptionsContainer-optionsContainer'>
                    <ul className='InputOptionsContainer-optionsList'>
                        {renderOptionsList()}
                    </ul>
                </div>
            </>
    );
}

export default InputOptionsContainer;
