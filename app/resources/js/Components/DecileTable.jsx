import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function DecileTable({resData}) {

    return (<>
    { resData
    && undefined !== resData.data[0]
    && undefined !== resData.data[0].decile &&
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell align="right">グループ</TableCell>
            <TableCell align="right">平均</TableCell>
            <TableCell align="right">合計金額</TableCell>
            <TableCell align="right">構成比</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {resData.data.map((row, index) => (
            <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="right">{row.decile}</TableCell>
                <TableCell align="right">{ (row.average - 0).toLocaleString() } 円</TableCell>
                <TableCell align="right">{ (row.totalPerDecile - 0).toLocaleString() } 円</TableCell>
                <TableCell align="right">{row.totalRatio} ％</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    }
  </>);
}
