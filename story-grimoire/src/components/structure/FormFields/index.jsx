import * as React from 'react'

const labelClasses = 'block text-500 font-mono text-sm pl-1 pb-2'
const inputClasses =
    'border-gray-300 block w-full text-theme-light-ink-light rounded-md border p-2 focus:border-gray-500'

const TextInput = ({ label, id, className, ...props }) => (
    <label>
        <span className={labelClasses}>{label}</span>
        <input
            type="text"
            id={id}
            name={id}
            className={`${inputClasses} ${className || ''}`}
            {...props}
        />
    </label>
)

const NumberInput = ({ label, id, className, ...props }) => (
    <label>
        <span className={labelClasses}>{label}</span>
        <input
            type="number"
            id={id}
            name={id}
            className={`${inputClasses} ${className || ''}`}
            {...props}
        />
    </label>
)

export { TextInput, NumberInput }
