import React from "react";
import {RatingValueType} from "../../App";


type RatingProps = {
    value: RatingValueType
    setRatingValue: (newValue: RatingValueType) => void
}
export const Rating = ({value, setRatingValue}: RatingProps) => {

    return (
        <div>
            <Star value={1} selected={value > 0} setRatingValue={setRatingValue}/>
            <Star value={2} selected={value > 1} setRatingValue={setRatingValue}/>
            <Star value={3} selected={value > 2} setRatingValue={setRatingValue}/>
            <Star value={4} selected={value > 3} setRatingValue={setRatingValue}/>
            <Star value={5} selected={value > 4} setRatingValue={setRatingValue}/>
        </div>
    )
}

type StarProps = {
    value: RatingValueType
    selected: boolean
    setRatingValue: (newValue: RatingValueType) => void
}
const Star = ({selected, setRatingValue, value}: StarProps) => {

    return (
        <>
             <span onClick={ () =>  setRatingValue(value) }>{selected ? <b>star </b> : 'star '} </span>
        </>


    )
}