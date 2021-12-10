import React from 'react'
import { StyledBtn } from '../styles/Button.styled'

function Button({
    label,
    handler,
    bg,
    type
}: {
    label: string;
    handler?: any;
    bg?: string;
    type?: "button" | "submit" | "reset";
}) {
    return (
        <StyledBtn type={type} bg={bg} onClick={handler}>
            {label}
        </StyledBtn>
    )
}

export default Button
