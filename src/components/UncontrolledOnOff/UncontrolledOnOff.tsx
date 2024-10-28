

import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'

type UncontrolledOnProps = {
    onChange: (state: boolean) => void
    defaultOn: boolean
}

export const UncontrolledOnOff  = ({onChange, defaultOn}: UncontrolledOnProps) => {

    let [state, setState] = useState(defaultOn ? defaultOn : false)
    const onClicked = () => {
        setState(true)
        onChange(state)
    }
    const offClicked = () => {
        setState(false)
        onChange(state)
    }

    return (
        <div className={s.main}>
            <span onClick={ onClicked } className={state ? s.on : s.neutral}>ON</span>
            <span onClick={ offClicked } className={!state ? s.off : s.neutral}>OFF</span>
            <span className={state ? s.neutralOn : s.neutralOff}></span>

        </div>
    );
};