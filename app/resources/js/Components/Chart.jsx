/** @jsxImportSource @emotion/react */

import { defaultTheme } from './defaultThemeProvider';

import { useState } from 'react';

import { BarChart } from '@mui/x-charts/BarChart';

export default function Chart({resData}) {
    const palette = defaultTheme().palette
    const [chartWidth, setChartWidth] = useState(window.innerWidth - 128)

    window.addEventListener('resize', e => {
        setChartWidth(window.innerWidth - 128)
    })

    return (<>
        {resData && !resData.eachCount &&
        <BarChart
            sx={{
                background: palette.bg.color2,
                padding: '24px 0 24px 0',
            }}
        xAxis={[
            {
            id: 'barCategories',
            data: resData.labels,
            scaleType: 'band',
            },
        ]}
        series={[
            {
            data: resData.totals.map(total => (total - 0)),
            },
        ]}
        width={chartWidth}
        height={400}
        />
        }
    </>);
}
