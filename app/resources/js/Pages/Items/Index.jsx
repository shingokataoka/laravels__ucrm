/** @jsxImportSource @emotion/react */

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import Button from '@mui/material/Button';
import { Link } from '@inertiajs/react';

import { defaultTheme } from '@/Components/DefaultThemeProvider';
import { css } from '@emotion/react';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Flash from '@/Components/Flash';

export default function ItemIndex({ auth, items }) {
    const palette = defaultTheme().palette
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">商品管理</h2>}
        >
            <Head title="商品管理" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">



                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>

                        <div className="p-6 text-gray-900 max-w-[700px] m-auto">
                            <div className="text-right">
                                <Button href={ route('items.create') } variant="contained"
                                color="primary" component={ Link }>新規登録</Button>
                            </div>
                            <BasicTable items={items} />

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}



function BasicTable({items}) {
    const theme = defaultTheme().palette
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{width:'20%'}}>id</TableCell>
            <TableCell align="left" sx={{width:'20%'}}>商品名</TableCell>
            <TableCell align="left" sx={{width:'20%'}}>価格</TableCell>
            <TableCell align="left" sx={{width:'20%'}}>ステータス</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell align="left" sx={{width:'20%'}}>
                <Link
                    href={ route('items.show', row.id) }
                    style={{
                        color: theme.primary.main
                    }}
                >
                    {row.id}
                </Link>
                </TableCell>
              <TableCell align="left" sx={{width:'20%'}}>{row.name}</TableCell>
              <TableCell align="left" sx={{width:'20%'}}>{row.price}</TableCell>
              { row.is_selling === 1 && <TableCell align="left" sx={{width:'20%' }}>販売中</TableCell> }
              { row.is_selling === 0 && <TableCell align="left" sx={{width:'20%' }}>停止中</TableCell> }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
