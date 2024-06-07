import {OnOff} from "./OnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions"


export default {
    title: 'OnOff stories',
    component: OnOff,
}
const actionClick = action("on or off clicked")
export const OnMode = () => <OnOff state={true} onClick={ actionClick }/>
export const OffMode = () => <OnOff state={false} onClick={ actionClick }/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff state={value} onClick={ () => {setValue(!value)} } />
}