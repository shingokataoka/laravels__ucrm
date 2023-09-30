/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { TextField } from '@mui/material';

export default function RfmResTable({resData}) {

    const ranks = [5,4,3,2]

    if (!resData) return
    if (!resData.eachCount) return


    return (<>
    <div css={css`
        margin-top: 40px;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap: 8px;
    `}>
        <h2 css={css`font-size:24px;`}>RFM 分析結果</h2>
        <div css={css`font-size:18px;`}>合計：{resData.totalCount} 人</div>
        <h3 css={css`font-size: 24px;`}>RFMランク毎の人数</h3>

    </div>

    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow
            >
                <TableCell align="right">Rank</TableCell>
                <TableCell align="right">R</TableCell>
                <TableCell align="right">F</TableCell>
                <TableCell align="right">M</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {resData.eachCount.map((row, index) => (
            <TableRow
                key={index}
                css={css`
                    *{
                        font-size:18px;
                    }
                `}
            >
                <TableCell align="right">{row.rank}</TableCell>
                <TableCell align="right">{row.r}</TableCell>
                <TableCell align="right">{row.f}</TableCell>
                <TableCell align="right">{row.m}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>



    <h3
        css={css`
            margin-top: 56px;
            font-size:24px;
            text-align: center;
        `}
    >
        RとFの集計表
    </h3>

    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow
            >
                <TableCell align="right">rRank</TableCell>
                <TableCell align="right">f_5</TableCell>
                <TableCell align="right">f_4</TableCell>
                <TableCell align="right">f_3</TableCell>
                <TableCell align="right">f_2</TableCell>
                <TableCell align="right">f_1</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {resData.data.map((row, index) => (
            <TableRow
                key={index}
                css={css`
                    *{
                        font-size:18px;
                    }
                `}
            >
                <TableCell align="right">{row.r_rank}</TableCell>
                <TableCell align="right">{row.f_5}</TableCell>
                <TableCell align="right">{row.f_4}</TableCell>
                <TableCell align="right">{row.f_3}</TableCell>
                <TableCell align="right">{row.f_2}</TableCell>
                <TableCell align="right">{row.f_1}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>

  </>);
}
