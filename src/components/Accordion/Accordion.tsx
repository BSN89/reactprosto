import React from 'react';

type AccordionTitleProps = {
    title: string
    collapsed: boolean
    onClick: (newStatus: boolean) => void

}
const AccordionTitle = ({title, onClick, collapsed}: AccordionTitleProps) => {

    return (
        <h3 onClick={ () =>  onClick(!collapsed) }>{title}</h3>
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
    onClick: (newStatus: boolean) => void
}
export const Accordion = ({titleValue, collapsed, onClick}: AccordionProps) => {
    return (
        <>
            <AccordionTitle title={titleValue} onClick={ onClick} collapsed={collapsed}/>
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

