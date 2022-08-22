import React, { useState, createContext } from 'react'

export const TimeCardDataContext = createContext({
    rows: [],
    setRow: (item) => { },
    deleteRow: (item) => { }
})

const TimeCardDataProvider = ({ children }) => {

    const [rows, setRows] = useState([])
    const setRow = (newItem) => setRows({ ...rows, newItem })
    // const deleteRow = (newItem) => setRows({ ...rows, newItem })

    return (
        <TimeCardDataContext.Provider value={{ rows, setRow }}>
            {children}
        </TimeCardDataContext.Provider>
    )

}

export default TimeCardDataProvider