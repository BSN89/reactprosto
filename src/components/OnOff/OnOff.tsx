import React, {useState} from 'react';
import s from './OnOff.module.css'




export const OnOff = () => {

let [state, setState] = useState(false)

    return (
        <div className={s.main}>
            <span onClick={ () => {setState(true)} } className={state ? s.on : s.neutral}>ON</span>
            <span onClick={ () => {setState(false)} } className={!state ? s.off : s.neutral}>OFF</span>
            <span className={state ? s.neutralOn : s.neutralOff}></span>

        </div>
    );
};