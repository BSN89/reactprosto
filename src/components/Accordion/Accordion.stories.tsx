import {Accordion} from "./Accordion";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions"



export default {
    title: 'Accordion stories',
    component: Accordion,
}
const actionClick = action("Accordion changing collapsed")
export const OnCollapsedMode = () =>  <Accordion titleValue={'USER'} collapsed={true} onClick={  actionClick }/>
export const OffCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={false} onClick={  actionClick }/>


export const CollapsedModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Menu'} collapsed={value} onClick={() => setValue(!value)}/>
};