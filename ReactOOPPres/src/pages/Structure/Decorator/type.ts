import React from 'react'

export type SelectComponent = (props: SelectProps) => React.ReactNode

export type SelectProps = {
    label?: string
    options?: string[]
}

export type DecoratorSelectComponent = (
    component: SelectComponent
) => SelectComponent
