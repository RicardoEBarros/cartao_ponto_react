import React, { useState, createContext, useEffect } from 'react'

export const DialogDataContext = createContext({
    rowsDialog: [],
    setRowsDialog: (item) => { },
    deleteRowDialog: (item) => { }
})

const DialogDataProvider = ({ children }) => {

    const [rowsDialog, setRowsDialog] = useState([])

    return (
        <DialogDataContext.Provider value={{ rowsDialog, setRowsDialog }}>
            {children}
        </DialogDataContext.Provider>
    )

}

export default DialogDataProvider