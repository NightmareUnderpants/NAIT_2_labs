import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from "@mui/x-data-grid/locales";
import Container from "@mui/material/Container";

import { games } from "../tabledata";

function TableGrid() {
    const rows: GridRowsProp = games.map((game, index) => ({
        id: index + 1,
        ...game,
    }));

    const columns: GridColDef[] = [
        { field: "playerId", headerName: "ID игрока", flex: 0.3 },
        { field: "game", headerName: "Название игры", flex: 1 },
        { field: "duration", headerName: "Продолжительность", flex: 0.3 },
        { field: "performance", headerName: "Производительность", flex: 0.3 },
        { field: "version", headerName: "Версия", flex: 0.5 },
    ];

    return (
        <Container maxWidth="lg" sx={{ height: "700px", mt: "20px" }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                showToolbar={true}
            />
        </Container>
    );
}

export default TableGrid;
