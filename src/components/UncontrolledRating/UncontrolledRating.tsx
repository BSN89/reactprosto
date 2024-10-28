import React, {useState} from "react";
import {RatingValueType} from "../../App";

type RatingProps = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}
export const UncontrolledRating = ({defaultValue, onChange}: RatingProps) => {

    let [value, setValue] = useState<RatingValueType>(defaultValue ? defaultValue : 0)


    return (
        <div>
            <button onClick={() => setValue(0)}>reset</button>
            <Star selected={value > 0} changeValue={() => {setValue(1); onChange(1)}}/>
            <Star selected={value > 1} changeValue={() => {setValue(2); onChange(2)}}/>
            <Star selected={value > 2} changeValue={() => {setValue(3); onChange(2)}}/>
            <Star selected={value > 3} changeValue={() => {setValue(4); onChange(2)}}/>
            <Star selected={value > 4} changeValue={() => {setValue(5); onChange(2)}}/>

        </div>
    )
}

type StarProps = {
    selected: boolean

    changeValue: () => void
}
const Star = ({selected, changeValue}: StarProps) => {

    return (
        <>
            <span onClick={changeValue}>{selected ? <b>star </b> : 'star '} </span>
        </>


    )
}