import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'


type OnOffType = {
    state: boolean
    onClick: () => void
}

export const UncontrolledOnOff = ({state, onClick}: OnOffType) => {



    return (
        <div className={s.main}>
            <span onClick={ onClick } className={state ? s.on : s.neutral}>ON</span>
            <span onClick={ onClick } className={!state ? s.off : s.neutral}>OFF</span>
            <span className={state ? s.neutralOn : s.neutralOff}></span>

        </div>
    );
};