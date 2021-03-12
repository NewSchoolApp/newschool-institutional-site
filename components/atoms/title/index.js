import React from "react"
import { Label } from "./styles.js"
import { COLORS } from "../../../styles/colors"

export const Title = (props) => {
    return <Label size={props.size} color={props.color || COLORS.primary}>
        {props.children}
        </Label>
}