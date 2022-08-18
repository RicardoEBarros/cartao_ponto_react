import { GridColDef } from '@mui/x-data-grid'

const columns = (): GridColDef[] => {
    return [
        { field: 'id', headerName: '#' },
        { field: 'date_time', headerName: 'Data/Hora' },
        { field: 'start_office', headerName: 'Início Exp.' },
        { field: 'start_interval', headerName: 'Início Intervalo' },
        { field: 'end_interval', headerName: 'Fim Intervalo' },
        { field: 'end_office', headerName: 'Fim Expediente' },
    ]
}

export {
    columns
}

