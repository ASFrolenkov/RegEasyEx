import React from 'react';
import CustomBtn from '../assets/UI/CustomBtn';
import classNames from '../assets/styles/Options.module.css'

interface IProps {
    className: string
}

const OptionsWrapper = ({className}: IProps) => {
    return (
        <div className={className}>
            <div className={classNames.section}>
                <CustomBtn>Letters</CustomBtn>
                <CustomBtn>Numbers</CustomBtn>
                <CustomBtn>Letter & Numbers</CustomBtn>
            </div>
            <div className={classNames.section}>
                <CustomBtn>And</CustomBtn>
                <CustomBtn>Or</CustomBtn>
                <CustomBtn>Not</CustomBtn>
            </div>

        </div>
    )
}

export default OptionsWrapper