import { GridColDef } from '@mui/x-data-grid'

const columns = (): GridColDef[] => {
    return [
        { field: 'id', headerName: '#', width: 30 },
        { field: 'date_time', headerName: 'Data/Hora', width: 150 },
        { field: 'start_office', headerName: 'Início Exp.', width: 120 },
        { field: 'start_interval', headerName: 'Início Intervalo', width: 150 },
        { field: 'end_interval', headerName: 'Fim Intervalo', width: 150 },
        { field: 'end_office', headerName: 'Fim Expediente', width: 150 },
    ]
}

export {
    columns
}

