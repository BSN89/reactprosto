import React, {useState} from 'react';
import './App.css';
import {Selected} from "./Select/Select";
import {ClockMode} from "./ClockMode/ClockMode";
import {ClockAnalog} from "./Clock/ClockAnalog";
import {ClockDigital} from "./Clock/ClockDigital";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
const App = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState(false)
    const [state, setState] = useState(false)
    const [cityState, setCityState] = useState(0)
    const [clockStyle, setClockStyle] = useState<boolean>(true)

    const changeRating = (newValue: RatingValueType) => {
        setRatingValue(newValue)
    }


    return (
        <div className="App">

            <Selected setCityState={setCityState}/>
            {clockStyle
                ? <ClockAnalog cityState={cityState}/>
                : <ClockDigital cityState={cityState}/>
            }

            <ClockMode clockStyle={clockStyle} setClockStyle={setClockStyle}/>

        </div>

    );
}


type PageTitleProps = {
    title: string
}
const PageTitle = ({title}: PageTitleProps) => {
    console.log('AppTitle rendering')
    return (
        <h1>
            {title}
        </h1>
    )
}


export default App;
