/** @jsxImportSource @emotion/react */

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { defaultTheme } from '@/Components/DefaultThemeProvider';
import { css } from '@emotion/react';

import emotionCss from '@/CssInJs/emotionCss';

import { useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';

import Chart from '@/Components/Chart';
import DecileTable from '@/Components/DecileTable';
import RfmPrmTable from '@/Components/RfmPrmTable';
import RfmResTable from '@/Components/RfmResTable';

export default function Analysis({ auth }) {
    const palette = defaultTheme().palette

    const [processing, setProcessing] = useState(false)
    const [startDate, setStartDate] = useState( dayjs().format('YYYY-MM-DD') )
    const [endDate, setEndDate] = useState( dayjs().format('YYYY-MM-DD') )
    const [type, setType] = useState('perDay')
    const [resData, setResData] = useState(null);

    const [rPrms, setRPrms] = useState([ 14, 28, 60, 90])
    const [fPrms, setFPrms] = useState([7, 5, 3, 2])
    const [mPrms, setMPrms] = useState([300000, 200000, 100000, 30000])
    const [xLabel, setXLabel] = useState('日付')

    const textFieldDate = css`
        ${emotionCss(palette).textFieldDate}
        margin: 0;
        width: 150px;
    `

    const handleSubmit = async e => {
        setProcessing(true)
        let nowXlabel = '日付'
        // if (type === 'perDay') { nowXlabel = '日付' }
        if (type === 'perMonth') { nowXlabel = '月' }
        else if (type === 'perYear') { nowXlabel = '年' }
        else if (type === 'decile') { nowXlabel = 'グループ' }

        const res = await axios.post(
            route('api.analysis'),
            { startDate, endDate, type, rPrms, fPrms, mPrms }
        )
        setResData(res.data)
        setXLabel(nowXlabel)
        setProcessing(false)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">データ分析</h2>}
        >
            <Head title="データ分析" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>
                        <div className="p-6">



                            <FormControl
                                css={emotionCss(palette).formControl}
                            >
                                <FormLabel id="demo-row-radio-buttons-group-label">分析方法</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="type"
                                    value={type}
                                    onChange={ e => setType(e.target.value) }
                                >
                                    <FormControlLabel value="perDay" control={<Radio />} label="日別" />
                                    <FormControlLabel value="perMonth" control={<Radio />} label="月別" />
                                    <FormControlLabel value="perYear" control={<Radio />} label="年別" />
                                    <FormControlLabel value="decile" control={<Radio />} label="デシル分析" />
                                    <FormControlLabel value="rfm" control={<Radio />} label="RFM分析" />
                                </RadioGroup>
                            </FormControl>

                            <div
                                css={css`
                                    padding:8px;
                                    display:flex;
                                    align-items: center;
                                    gap: 8px;
                                `}
                            >
                                <div>From:</div>
                                <TextField label="" variant="outlined" type="date"
                                    css={textFieldDate}
                                    value={startDate}
                                    onChange={ e => setStartDate(e.target.value) }
                                />
                                <div>To:</div>
                                <TextField label="" variant="outlined" type="date"
                                    css={textFieldDate}
                                    value={ endDate }
                                    onChange={ e => setEndDate(e.target.value) }
                                />
                            </div>

                            <div css={css`
                                text-align:center;
                                margin:16px 0 ;
                            `}>
                                <LoadingButton
                                    variant="contained"
                                    color="secondary"
                                    loading={ processing }
                                    onClick={handleSubmit}
                                >
                                    分析する
                                </LoadingButton>
                            </div>



                            {type === 'rfm' &&
                            <RfmPrmTable
                                rPrms={rPrms} setRPrms={setRPrms}
                                fPrms={fPrms} setFPrms={setFPrms}
                                mPrms={mPrms} setMPrms={setMPrms}
                            />
                            }

                            <RfmResTable resData={resData} />


                            <Chart resData={resData} xLabel={xLabel} />

                            <DecileTable resData={resData} />

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
