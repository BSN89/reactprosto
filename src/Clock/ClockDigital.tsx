import React, { useEffect, useRef, useState } from 'react';
import styles from './Clock.module.css'; // Подключаем стили

type Props = {
    cityState: number;
};

export const ClockDigital : React.FC<Props> = ({ cityState }: Props) => {

    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            let hours = (cityState === 1 ? now.getHours() + 3 : cityState === 3 ? now.getHours() + 2 : now.getHours()).toString().padStart(2, '0')
            const minutes = now.getMinutes().toString().padStart(2, '0')
            const seconds = now.getSeconds().toString().padStart(2, '0')
            setTime(`${hours}:${minutes}:${seconds}`)
        }, 1000)

        return () => clearInterval(interval) // Очистка интервала при размонтировании компонента
    }, [cityState])

    return (
        <div className={styles.body1}>
            <div className={styles.clock1}>
                <div className={styles.digitalDisplay1}>
                    {time}
                </div>
            </div>
        </div>
    );
};