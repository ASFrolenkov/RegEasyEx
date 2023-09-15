import React from 'react';
import classNames from '../assets/styles/InputComponent.module.css'
import OptionsWrapper from './OptionsWrapper';

const InputComponent = () => {
    return (
        <div className={classNames.component}>
            <OptionsWrapper 
                            className={classNames.options}/>
            <div className={classNames.modifier}>

            </div>
        </div>
    )
}

export default InputComponent