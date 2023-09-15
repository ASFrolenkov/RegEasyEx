import React from 'react';
import classNames from '../styles/Button.module.css';
import { useDispatch } from 'react-redux';
import { setExp } from '../../store/valueSlice';

const CustomBtn = ({children}: {children: string}) => {
    const dispath = useDispatch();
    const expSwitch = (string: string):string => {
        switch(string) {
            case 'Letters':
                return '[a-z]';
            case 'Numbers': 
                return '[0-9]';
            case 'Letter & Numbers':
                return '[a-z0-9]';
            default:
                return '';
        }
    }

    return (
        <button 
            className={classNames.btn} 
            onClick={() => {dispath(setExp(expSwitch(children)))}}>{children}</button>
    )
}

export default CustomBtn