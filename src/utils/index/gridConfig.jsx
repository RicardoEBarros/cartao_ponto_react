const columns = () => {
    return [
        { field: 'id', headerName: '#', width: 30 },
        { field: 'date_time', headerName: 'Data/Hora', width: 180 },
        { field: 'start_office', headerName: 'Início Exp.', width: 100 },
        { field: 'start_interval', headerName: 'Início Intervalo', width: 150 },
        { field: 'end_interval', headerName: 'Fim Intervalo', width: 150 },
        { field: 'end_office', headerName: 'Fim Expediente', width: 150 },
    ]
}

const getColumnNameByTimeCardType = (typeId) => {
    let columnName = ''

    switch (typeId) {
        case 2:
            columnName = 'start_interval'
            break
        case 3:
            columnName = 'end_interval'
            break
        case 4:
            columnName = 'end_office'
            break
        default:
            columnName = 'start_office'
            break
    }

    return columnName
}

const getNextId = (rows) => {
    return rows.length + 1
}

export {
    columns,
    getColumnNameByTimeCardType,
    getNextId
}

