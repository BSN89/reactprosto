import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
const App = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(false)

    const changeRating = (newValue: RatingValueType) => {
        setRatingValue(newValue)
    }

    console.log('App rendering')
    return (
        <div className="App">

            <UncontrolledOnOff onChange={ () =>  setSwitchOn(!switchOn)}/>{switchOn.toString()}

            <Rating value={ratingValue} setRatingValue={changeRating}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <Accordion
                titleValue={'USER'}
                collapsed={accordionCollapsed}
                onClick={ () => setAccordionCollapsed(!accordionCollapsed) }
            />


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
