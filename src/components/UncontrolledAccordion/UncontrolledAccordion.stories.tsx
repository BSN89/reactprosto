import {UncontrolledAccordion} from "./UncontrolledAccordion";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions"



export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
}
const actionClick = action("Accordion changing collapsed")


export const CollapsedModeChanging = () => {

    return <UncontrolledAccordion titleValue={'Menu'} />
};