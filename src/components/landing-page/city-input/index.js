import React from 'react';
import styles from './cityInput.module.css'

function cityInput({value, placeholder, onChange}) {
    return (
        <div className="relative">
            <input className={`${styles.input} focus:outline-none p-2 w-full bg-transparent`} placeholder={placeholder} value={value} onChange={onChange} />
            <div className={`${styles.input__after} w-full`}></div>
        </div>
    )
}

export default cityInput