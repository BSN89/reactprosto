import React, { useEffect, useRef, useState } from 'react';
import styles from './Clock.module.css'; // Подключаем стили

type Props = {
    clockStyle: boolean;
};

export const Clock: React.FC<Props> = ({ clockStyle }) => {
    const [time, setTime] = useState<string>('');
    const deg = 6;
    const hrRef = useRef<HTMLDivElement | null>(null);
    const mnRef = useRef<HTMLDivElement | null>(null);
    const scRef = useRef<HTMLDivElement | null>(null);




    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');

            if (clockStyle) {
                setTime(`${hours}:${minutes}:${seconds}`);
            } else {
                const hh = now.getHours() * 30;
                const mm = now.getMinutes() * deg;
                const ss = now.getSeconds() * deg;

                if (hrRef.current && mnRef.current && scRef.current) {
                    hrRef.current.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
                    mnRef.current.style.transform = `rotateZ(${mm}deg)`;
                    scRef.current.style.transform = `rotateZ(${ss}deg)`;
                }
            }
        };

        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, [clockStyle]);

    return (
        <>
            {clockStyle ? (
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
            ) : (
                <div className={styles.body1}>
                    <div className={styles.clock1}>
                        <div className={styles.digitalDisplay1}>
                            {time}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};