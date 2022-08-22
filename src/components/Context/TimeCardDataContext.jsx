import React, { useState, createContext, useEffect } from 'react'

export const TimeCardDataContext = createContext({
    rowsIndex: [],
    setRowsIndex: (item) => { },
    deleteRow: (item) => { }
})

const TimeCardDataProvider = ({ children }) => {

    const [rowsIndex, setRowsIndex] = useState([])
    // const setRow = (newItem) => setRowsIndex([])

    // useEffect(() => {
    //     console.log('teste')
    //     console.log(rows)
    // }, [rows])

    return (
        <TimeCardDataContext.Provider value={{ rowsIndex, setRowsIndex }}>
            {children}
        </TimeCardDataContext.Provider>
    )

}

export default TimeCardDataProvider