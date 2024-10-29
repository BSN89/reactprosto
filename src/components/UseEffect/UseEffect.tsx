

import { useEffect, useState } from "react";

type Props = {
    cityState: number;
};

export const UseEffect = ({ cityState }: Props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [cityState]);

    const formatTime = (date: Date) => {

        let hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        if(cityState === 1){
            hours = (date.getHours() + 3).toString().padStart(2, '0');
        }
        if(cityState === 3){
            hours = (date.getHours() + 2).toString().padStart(2, '0');
        }

        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <>
            <h1>{formatTime(date)}</h1>
        </>
    );
};