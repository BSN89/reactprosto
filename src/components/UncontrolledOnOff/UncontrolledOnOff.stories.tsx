import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions"


export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
}
const actionClick = action("on or off clicked")
export const OnMode = () => <UncontrolledOnOff defaultOn={true}  onChange={ actionClick }/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false}  onChange={ actionClick }/>

