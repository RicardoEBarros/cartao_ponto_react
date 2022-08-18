import React from 'react'
import { Box, Paper } from '@mui/material'
import NewTimeCard from './components/NewTimeCard.tsx'
import FilterData from './components/FilterData.tsx';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import './css/style.css'

function App() {
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
        </Paper>        
      </Box>
    </div>
  );
}

export default App;
