const columns = () => {
    return [
        { field: 'id', headerName: '#', width: 30 },
        { field: 'type', headerName: 'Tipo', width: 200 },
        { field: 'date_time', headerName: 'Data/Hora', width: 175 },
        { field: 'action', headerName: 'Action', width: 120 },
    ]
}

export default columns