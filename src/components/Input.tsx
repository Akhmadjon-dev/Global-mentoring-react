import { Field } from 'formik'
import React from 'react'
import { StyledInput } from '../styles/Input.styled'
import { IInput } from './types'

export default function Input({
    type,
    placeholder,
    value,
    onchange,
    label,
    id,
    name,
    width,
    marginRight,
    height,
}: IInput) {
    if (type === 'select') {
        return (
            <StyledInput margin={marginRight} height={height} width={width}>
                <label htmlFor={id}>
                    {label}
                </label>
                 <Field 
                    as="select" 
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onchange}
                    >
                    <option value="documentary">Documentary</option>
                    <option value="comedy">Comedy</option>
                    <option value="horror">Horror</option>
                    <option value="crime">Crime</option>
                </Field>
                    {/* 
                    <select
    
                        name={name}
                        id={id}
                        placeholder={placeholder}
                        value={value}
                        onChange={onchange}
                    >
                        <option value="documentary">Documentary</option>
                        <option value="comedy">Comedy</option>
                        <option value="horror">Horror</option>
                        <option value="crime">Crime</option>
                    </select> */}
            </StyledInput>
        )
    }
    return (
        <StyledInput margin={marginRight} height={height} width={width}>
            <label htmlFor={id}>
                {label}
            </label>
            <Field
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onchange}
                />
            {/* <input
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onchange}
            /> */}
        </StyledInput>
    )
}
