import React, {useState} from 'react';

type AccordionTitleProps = {
    title: string
    changeCollapsed: () => void
}
const AccordionTitle = ({title, changeCollapsed}: AccordionTitleProps) => {

    return (
        <h3 onClick={ changeCollapsed }>{title}</h3>
    )
}
const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

type AccordionProps = {
    titleValue: string
}
export const UncontrolledAccordion = ({titleValue}: AccordionProps) => {
    let [collapsed, setCollapsed] = useState(true)
    const changeCollapsed = () => {
      setCollapsed(!collapsed)
    }

    return (
        <>
            <AccordionTitle title={titleValue} changeCollapsed={changeCollapsed}/>
            {!collapsed && <AccordionBody/>}
        </>
    )


    // if(!collapsed){
    //     return (
    //         <>
    //             <AccordionTitle title={titleValue}/>
    //         </>
    //     )
    // }
    // return (
    //     <>
    //         <AccordionTitle title={titleValue}/>
    //         <AccordionBody/>
    //     </>
    // )
}

