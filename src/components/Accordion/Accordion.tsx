import React from 'react';

type AccordionTitleProps = {
    title: string
    onClick: () => void

}
const AccordionTitle = ({title, onClick}: AccordionTitleProps) => {

    return (
        <h3 onClick={  onClick }>{title}</h3>
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
    collapsed: boolean
    onClick: () => void
}
export const Accordion = ({titleValue, collapsed, onClick}: AccordionProps) => {
    return (
        <>
            <AccordionTitle title={titleValue} onClick={ onClick} />
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

