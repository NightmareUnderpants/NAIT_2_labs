import SettingChart from "./SettingChart";
import { tGroup }  from "../chartdata";

import { BarChart} from '@mui/x-charts/BarChart'; 
import { LineChart} from '@mui/x-charts/LineChart'; 
import Container from '@mui/material/Container'; 

import * as React from 'react'; 

type GroupProps = { 
    data: tGroup; 
};

function GroupChart({ data }: GroupProps) {
    const [series, setSeries] = React.useState({ 
        'Максимальная производительность': true, 
        'Средняя производительность': false, 
        'Минимальная производительность': false, 
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
        yAxis: [{ label: 'Производительность (к/сек)' }], 
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
