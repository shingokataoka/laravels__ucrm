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

export default function RfmPrmTable({rPrms, fPrms, mPrms, setRPrms, setFPrms, setMPrms}) {

    const ranks = [5,4,3,2]

    const textFieldCss = css`
        width:100px;
        input{
            padding:8px;
            text-align:right;
        }
    `

    const handleChangeRPrms = (value, index) => {
        setRPrms(data => {
            const newData = [...data]
            newData[index] = value
            return newData
        })
    }

    const handleChangeFPrms = (value, index) => {
        setFPrms(data => {
            const newData = [...data]
            newData[index] = value
            return newData
        })
    }

    const handleChangeMPrms = (value, index) => {
        setMPrms(data => {
            const newData = [...data]
            newData[index] = value
            return newData
        })
    }

    return (<>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow
              sx={{ 'th': { border: 0 } }}
            >
            <TableCell align="right">ランク</TableCell>
            <TableCell align="right">R（○日以内）</TableCell>
            <TableCell align="right">F（○回以上）</TableCell>
            <TableCell align="right">M（○円以上）</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {ranks.map((rank, index) => (
            <TableRow
                key={index}
                sx={{ 'td': { border: 0 } }}
                css={css`
                align-items:center;
                td > div{vertical-align: middle;}
                    td{ padding-top:0; padding-bottom:0; }
                `}
            >
                <TableCell align="right">{rank}</TableCell>
                <TableCell align="right">
                    <TextField
                        css={textFieldCss}
                        type="number"
                        value={rPrms[index]}
                        onChange={ e => handleChangeRPrms(e.target.value, index) }
                    />
                    日以内
                </TableCell>
                <TableCell align="right">
                   <TextField
                        css={textFieldCss}
                        type="number"
                        value={fPrms[index]}
                        onChange={ e => handleChangeFPrms(e.target.value, index) }
                   />
                    回以上
                    </TableCell>
                <TableCell align="right">
                    <TextField
                        css={textFieldCss}
                        type="number"
                        value={mPrms[index]}
                        onChange={ e => handleChangeMPrms(e.target.value, index) }
                    />
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
  </>);
}
