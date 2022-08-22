const columns = () => {
    return [
        { field: 'id', headerName: '#', width: 30 },
        { field: 'typeName', headerName: 'Tipo', width: 200 },
        { field: 'time', headerName: 'Hora', width: 175 },
        { field: 'action', headerName: 'Action', width: 120 },
    ]
}

export default columns