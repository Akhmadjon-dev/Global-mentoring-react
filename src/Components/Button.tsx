import React from 'react'

interface IButton  {
    handleClick: () => void;
    label : string;
}

export default function Button({handleClick, label}: IButton)  {
    return (
        <div>
            <button onClick={handleClick}>
                {label}
            </button>
        </div>
    )
}
