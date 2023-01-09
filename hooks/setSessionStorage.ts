import { useState, useEffect } from 'react';

const setSessionStorage = (name: string, valueItem: string): void => {
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(sessionStorage.setItem(name, valueItem))
    }, [])

    return
}

export default setSessionStorage