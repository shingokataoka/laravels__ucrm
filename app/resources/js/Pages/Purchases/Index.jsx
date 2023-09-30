/** @jsxImportSource @emotion/react */

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { defaultTheme } from '@/Components/defaultThemeProvider';
import { css } from '@emotion/react';

import { router } from '@inertiajs/react';
import { useState } from 'react';
import dayjs from 'dayjs';

import Pagination from '@mui/material/Pagination';

import { Link } from '@inertiajs/react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Flash from '@/Components/Flash';


export default function PurchaseIndex({auth, orders}) {
    const palette = defaultTheme().palette
    const [allProcessing, setAllProcessing] = useState(false)
    const pageChange = (e, currentPage) => {
        router.get(
            route('purchases.index'),
            {page: currentPage},
            {preserveScroll: true},
        )
    }

    return (
        <AuthenticatedLayout
            user={auth.user}ß
            header={<h2 className="font-semibold text-xl leading-tight">購買履歴</h2>}
        >
            <Head title="購買履歴" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <Flash />

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>

                        <div className="p-6 text-gray-900 max-w-[700px] m-auto">

                            <BasicTable orders={orders} />

                            <Pagination
                                count={orders.last_page}
                                page={orders.current_page}
                                onChange={pageChange}
                                disabled={allProcessing}
                                siblingCount={2} boundaryCount={2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}



function BasicTable({orders}) {
    const theme = defaultTheme().palette
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{width:'20%'}}>id</TableCell>
            <TableCell align="left" sx={{width:'20%'}}>氏名</TableCell>
            <TableCell align="left" sx={{width:'20%'}}>合計金額</TableCell>
            <TableCell align="left" sx={{width:'20%'}}>ステータス</TableCell>
            <TableCell align="left" sx={{width:'20%'}}>購入日</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.data.map((row, index) => (
            <TableRow
              key={index}
            >
                <TableCell align="left" sx={{width:'20%'}}>
                    <Link
                        href={ route('purchases.show', row.id) }
                        css={css`
                            padding: 8px 12px;
                            border-radius: 6px;
                            color: ${theme.primary.main};
                            &:hover {
                                background: ${theme.bg.color3};
                            }
                        `}
                    >
                        {row.id}
                    </Link>
                </TableCell>
                <TableCell align="left" sx={{width:'20%'}}>{row.customer_name}</TableCell>
                <TableCell align="left" sx={{width:'20%'}}>
                    {(row.total - 0).toLocaleString()} 円
                </TableCell>
                <TableCell align="left" sx={{width:'20%'}}>{
                    row.status === 1 ? '購入' : 'キャンセル'
                }</TableCell>
                <TableCell align="left" sx={{width:'20%'}}>{
                    dayjs(row.created_at).format('YYYY-MM-DD')
                }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
