import { DataGrid, GridRowsProp, GridColDef  } from "@mui/x-data-grid"; 
import { tGroup }  from "../groupdata"; 
import Container from "@mui/material/Container";
import { ruRU } from "@mui/x-data-grid/locales";

type GroupProps = { 
    data: tGroup; 
};

function GroupGrid({ data }: GroupProps) {
    
    const rows: GridRowsProp = data; 
 
    const columns: GridColDef[] = Object.keys(data[0]).map((key) => ({ field: key, headerName: key, flex: 0.5 }));

    columns.shift();
    columns[0].flex = 1;

    return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}> 
            <DataGrid  
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText} 
                rows={rows}  
                columns={columns} 
            /> 
        </Container>  
    );
}

export default GroupGrid;