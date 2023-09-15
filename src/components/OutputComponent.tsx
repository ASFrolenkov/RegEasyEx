import React, {useRef, useState} from 'react';
import classNames from '../assets/styles/Output.module.css'
import { useSelector } from 'react-redux';

const OutputComponent = () => {
    const inputRef: any = useRef();
    const {exp, modifier} = useSelector((state: any) => state.regex);
    const [isShowModal, setIsShowModal] = useState(false)

    const showModal = async () => {
        setIsShowModal(true);

        await setTimeout(() => {
            setIsShowModal(false)
        }, 2000)
    }

    return (
        <div className={classNames.component}>
            <h2 className={classNames.title}>Your RegEx:</h2>
            <input 
                type="text" 
                className={classNames.input}
                value={`/${exp}/${modifier}`}
                ref={inputRef}
                readOnly/>
            <button
                className={classNames.copyBtn}
                onClick={() => {
                    navigator.clipboard.writeText(inputRef.current.value);
                    showModal()
                }}>                
            </button>
            {
                isShowModal && <div className={classNames.modal}>Copied</div>
            }
        </div>
    )
}

export default OutputComponent