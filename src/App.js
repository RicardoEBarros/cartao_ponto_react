import React from 'react'
import { Box, Paper, Stack } from '@mui/material'
import TimeCard from './pages/TimeCard'
import FilterData from './pages/FilterData';
import { DataGrid } from '@mui/x-data-grid'
import './css/style.css'
import TimeCardGridDataIndex from './pages/TimeCardGridDataIndex';
import TimeCardDataProvider from './components/Context/TimeCardDataContext';

function App() {
  return (
    <TimeCardDataProvider>
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
              <TimeCard />
              <FilterData />
            </div>
            <TimeCardGridDataIndex />
          </Paper>        
        </Box>
      </div>
    </TimeCardDataProvider>    
  );
}

export default App;
