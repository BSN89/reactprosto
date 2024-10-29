import React, { useEffect, useRef } from 'react';
import styles from './Clock.module.css';

type Props = {
    cityState: number;
};

export const ClockAnalog: React.FC<Props> = ({ cityState }) => {
    const deg = 6;
    const hrRef = useRef<HTMLDivElement | null>(null);
    const mnRef = useRef<HTMLDivElement | null>(null);
    const scRef = useRef<HTMLDivElement | null>(null);

    const getHoursWithOffset = (hours: number, offset: number): number => {
        return (hours + offset) % 24;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            let day = new Date();
            let offset = cityState === 1 ? 3 : cityState === 3 ? 2 : 0;
            let hh = getHoursWithOffset(day.getHours(), offset) * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            if (hrRef.current && mnRef.current && scRef.current) {
                hrRef.current.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
                mnRef.current.style.transform = `rotateZ(${mm}deg)`;
                scRef.current.style.transform = `rotateZ(${ss}deg)`;
            }
        }, 1000);

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, [cityState]);

    return (
        <div className={styles.body}>
            <div className={styles.clock}>
                <div className={styles.hour}>
                    <div className={styles.hr} id="hr" ref={hrRef}></div>
                </div>
                <div className={styles.min}>
                    <div className={styles.mn} id="mn" ref={mnRef}></div>
                </div>
                <div className={styles.sec}>
                    <div className={styles.sc} id="sc" ref={scRef}></div>
                </div>
            </div>
        </div>
    );
};