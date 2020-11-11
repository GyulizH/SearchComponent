import React from 'react'

const Input = ({className, type, onKeyUp}) => {
    return (<input
        className={className}
        type={type}
        onKeyUp={onKeyUp}
    />)
}

export default Input