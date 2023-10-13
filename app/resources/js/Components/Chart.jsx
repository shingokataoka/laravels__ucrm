import { css } from '@mui/material';
import { defaultTheme } from './DefaultThemeProvider';

import { useState } from 'react';

import { BarChart } from '@mui/x-charts/BarChart';

export default function Chart({resData, xLabel}) {
    const palette = defaultTheme().palette
    // グラフの幅を取得
    const getWidth = () => {
        const w = window.innerWidth - 128
        return (w < 1168) ? w : 1168
    }
    const [chartWidth, setChartWidth] = useState(() => getWidth())

    window.addEventListener('resize', e => {
        setChartWidth( getWidth() )
    })

    /** @jsxImportSource @emotion/react */
    return (<>
        {resData && !resData.eachCount && <>
            <div
                css={css`
                    background: ${palette.bg.color2};
                    padding-left: 16px;
                `}
            >
                <BarChart
                    sx={{
                        // background: palette.bg.color3,
                        marginLeft: '64px',
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
                    width={chartWidth - 64}
                    height={400}
                />
                <div
                    css={css`
                        // background: red;
                        display: inline-block;
                        position: absolute;
                        transform:
                            rotate(-90deg)
                            translateX(200px)
                        ;
                        font-size: 15px;
                    `}
                >
                    金額
                </div>
                <div css={css`
                    // background: red;
                    margin: -32px 0 0 -16px;
                    padding-bottom: 16px;
                    text-align: center;
                    font-size: 15px;
                `}>{ xLabel }</div>
            </div>
        </>}
    </>);
}
