import Reactfrom, {useState} from "react";

import {UncontrolledRating} from "./UncontrolledRating";
import {RatingValueType} from "../../App";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
}
const actionClick = action("rating changed inside component")
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={ () => action }/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={ () => action }/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={ () => action }/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={ () => action }/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={ () => action }/>
