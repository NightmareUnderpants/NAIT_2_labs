import * as React from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GroupChart from "./components/GroupChart";
import GroupGrid from "./components/GroupGrid";
import { games, players, versions } from "./chartdata";

type tSelect = "Игра" | "Версия" | "Игрок";

function Chart() {
  const [group, setGroup] = React.useState<tSelect>("Игра");
  const [groupData, setGroupData] = React.useState(games);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedGroup = event.target.value as tSelect;

    setGroup(selectedGroup);

    if (selectedGroup === "Игра") {
      setGroupData(games);
    } else if (selectedGroup === "Версия") {
      setGroupData(versions);
    } else {
      setGroupData(players);
    }
  };

  return (
    <div>
      <Navbar active="3" />
      <Box sx={{ width: "200px", m: "auto" }}>
        <FormControl fullWidth>
          <InputLabel>Группировать по</InputLabel>
          <Select
            id="select-group"
            value={group}
            label="Группировать по"
            onChange={handleChange}
          >
            <MenuItem value="Игра">Игре</MenuItem>
            <MenuItem value="Версия">Версии</MenuItem>
            <MenuItem value="Игрок">Игроку</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <GroupChart data={groupData} />
      <GroupGrid data={groupData} />
      <Footer />
    </div>
  );
}

export default Chart;
