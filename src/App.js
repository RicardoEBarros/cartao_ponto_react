import { useState } from 'react'
import { Box, Paper} from '@mui/material'
import TimeCard from './components/TimeCard'
import FilterData from './components/FilterData';
import { DataGrid } from '@mui/x-data-grid'
import { columns } from './utils/index/gridConfig'
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
            <TimeCard />
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
