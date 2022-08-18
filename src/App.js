import { useState } from 'react'
import { Box, Paper, Dialog, DialogTitle } from '@mui/material'
import NewTimeCard from './components/NewTimeCard.tsx'
import FilterData from './components/FilterData.tsx';
import { DataGrid } from '@mui/x-data-grid'
import { columns } from './utils/index/gridConfig.ts'
import './css/style.css'

function App() {

  const [rows, setRows] = useState([])

  return (
    <div className="App">
      <Box>  
        <Paper 
          elevation={3} 
          sx={{
            width: "60%",
            margin: "20px auto",
            height: "500px",
            padding: "25px"
          }}
        >
          <div className='actions'>
            <NewTimeCard />
            <FilterData />
          </div>
          <div style={{ 
              marginTop: "10px",
              width: "100%",
              height: "400px" 
          }}>
            <DataGrid rows={rows} columns={columns()} />
          </div>
        </Paper>        
      </Box>
    </div>
  );
}

export default App;
