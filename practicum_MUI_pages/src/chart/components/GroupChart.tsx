import SettingChart from "./SettingChart";
import { tGroup }  from "../groupdata";

import { BarChart} from '@mui/x-charts/BarChart'; 
import { LineChart} from '@mui/x-charts/LineChart'; 
import Container from '@mui/material/Container'; 

import Stack from '@mui/material/Stack'; 
import Divider from '@mui/material/Divider'; 
import RadioGroup from '@mui/material/RadioGroup'; 
import Radio from '@mui/material/Radio';

import * as React from 'react'; 

type GroupProps = { 
    data: tGroup; 
};

function GroupChart({ data }: GroupProps) {
    const [series, setSeries] = React.useState({ 
        'Максимальная высота': true, 
        'Средняя высота': false, 
        'Минимальная высота': false, 
    });

    const [isBar, setIsBar] = React.useState(true);

    let seriesY = Object.entries(series) 
        .filter(item => item[1] === true) 
        .map(item => { 
            return {"dataKey": item[0], "label": item[0]} 
        }); 

    if (seriesY.length === 1) {
        seriesY = seriesY.map((item) => ({ ...item, barLabel: "value" }));
    }

    const chartSetting = { 
        yAxis: [{ label: 'Высота (м)' }], 
        height: 400, 
    };

    return (
        <Container maxWidth="lg">
            {isBar &&
                <BarChart 
                    dataset={ data } 
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]} 
                    series={ seriesY }
                    slotProps={{ 
                        legend: { 
                            position: { vertical: 'bottom', horizontal: 'center' }, 
                        }, 
                    }} 
                    {...chartSetting}
                />
            }
            {!isBar &&
                <LineChart 
                    dataset={ data } 
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]} 
                    series={ seriesY} 
                    slotProps={{ 
                    legend: { 
                        position: { vertical: 'bottom', horizontal: 'center' }, 
                    }, 
                    }} 
                    {...chartSetting} 
                />
            }
            <SettingChart series={ series } setSeries={ setSeries } isBar={isBar} setIsBar={ setIsBar }/>
        </Container>
    );
}

export default GroupChart;
