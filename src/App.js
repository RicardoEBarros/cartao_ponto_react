import React from 'react'
import { Box, Paper } from '@mui/material'
import './css/style.css'
import NewTimeCard from './components/NewTimeCard.tsx'
import FilterData from './components/FilterData.tsx';

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
            padding: "10px"
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
