import React, { useState, createContext, useEffect } from 'react'

export const TimeCardDataContext = createContext({
    rowsIndex: [],
    setRowsIndex: (item) => { },
    deleteRowIndex: (item) => { }
})

const TimeCardDataProvider = ({ children }) => {

    const [rowsIndex, setRowsIndex] = useState([])

    return (
        <TimeCardDataContext.Provider value={{ rowsIndex, setRowsIndex }}>
            {children}
        </TimeCardDataContext.Provider>
    )

}

export default TimeCardDataProvider