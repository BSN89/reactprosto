// import {useEffect, useState} from "react";
//
//
// type Props = {
//     cityState: number
// }
//
// export const UseEffect = ({cityState}: Props) => {
//     const [date, setDate] = useState('')
//
//
//     useEffect(() => {
//         setInterval(() => {
//             const date = new Date()
//             if(cityState === 1){
//                 const date1 = new Date()
//                 const newHour = date1.setHours(date1.getHours() + 3)
//                 setDate(`${newHour}: ${date1.getMinutes()}: ${date1.getSeconds()}`)
//             }
//             if(cityState === 3){
//                 setDate(`${date.getHours() + 2}: ${date.getMinutes()}: ${date.getSeconds()}`)
//             }
//             setDate(`${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`)
//         },1000)
//     },[cityState])
//   return(
//       <>
//         <h1>{date}</h1>
//       </>
//   )
// }

import { useEffect, useState } from "react";

type Props = {
    cityState: number;
};

export const UseEffect = ({ cityState }: Props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            let newDate = new Date(currentDate);

            if (cityState === 1) {
                newDate.setHours(currentDate.getHours() + 3);
            } else if (cityState === 3) {
                newDate.setHours(currentDate.getHours() + 2);
            }

            setDate(newDate);
        }, 1000);

        // Очистка интервала при размонтировании компонента или при изменении зависимостей
        return () => clearInterval(intervalId);
    }, [cityState]);

    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <>
            <h1>{formatTime(date)}</h1>
        </>
    );
};