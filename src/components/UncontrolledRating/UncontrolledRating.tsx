import React, {useState} from "react";


export const UncontrolledRating = () => {

    let [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)


    return (
        <div>
            <button onClick={() => setValue(0)}>reset</button>
            <Star selected={value > 0} changeValue={() => setValue(1)}/>
            <Star selected={value > 1} changeValue={() => setValue(2)}/>
            <Star selected={value > 2} changeValue={() => setValue(3)}/>
            <Star selected={value > 3} changeValue={() => setValue(4)}/>
            <Star selected={value > 4} changeValue={() => setValue(5)}/>

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
            <span onClick={changeValue}>{selected ? <b>star </b> : 'start '} </span>
        </>


    )
}