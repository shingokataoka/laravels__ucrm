/** @jsxImportSource @emotion/react */

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { defaultTheme } from '@/Components/DefaultThemeProvider';
import { css } from '@emotion/react'
import emotionCss from '@/CssInJs/emotionCss';

import dayjs from 'dayjs';

import { useState } from 'react';
import { router } from '@inertiajs/react';

import { Container } from '@mui/material';
import {TextField} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function PurchaseCreate({ auth, items, order }) {
    const palette = defaultTheme().palette
    const breackpoints = defaultTheme().breakpoints.values

    const [processing, setProcessing] = useState(false)


    return (<>


        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">購買履歴 詳細</h2>}
        >
            <Head title="購買履歴 詳細" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>
                        <div className="p-6">
                            <Container css={css`width:${breackpoints.sm}px;`}>

                                <TextField
                                    inputProps={{ disabled: true }}
                                    css={emotionCss(palette).textFieldDisabled}
                                    label="日付"
                                    value={ dayjs(order.created_at).format('YYYY-MM-DD') }
                                />

                                <TextField
                                    inputProps={{ disabled: true }}
                                    css={emotionCss(palette).textFieldDisabled}
                                    label="会員名"
                                    value={ `${order.customer_name}（${order.customer_kana}）`}
                                />


                                <TableContainer component={Paper}
                                    css={ css`margin: 48px 0;` }
                                >
                                <Table>
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>id</TableCell>
                                        <TableCell>商品名</TableCell>
                                        <TableCell align="right">金額</TableCell>
                                        <TableCell align="right">数量</TableCell>
                                        <TableCell align="right">小計</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {items.map((item, index) => (
                                        <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row">{item.item_id}</TableCell>
                                        <TableCell >{ item.item_name }</TableCell>
                                        <TableCell align="right">{ (item.item_price - 0).toLocaleString() } 円</TableCell>
                                        <TableCell align="right">{ item.quantity } 個</TableCell>
                                        <TableCell align="right">{ (item.subtotal - 0).toLocaleString() } 円</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                                </TableContainer>

                                <TextField
                                    inputProps={{ disabled: true }}
                                    css={emotionCss(palette).textFieldDisabled}
                                    label="合計金額"
                                    value={ (order.total - 0).toLocaleString() + ' 円' }
                                />

                                <TextField
                                    inputProps={{ disabled: true }}
                                    css={emotionCss(palette).textFieldDisabled}
                                    label="ステータス"
                                    value={
                                        (order.status === 1)? '購入'
                                        : (order.status === 0) && 'キャンセル済'
                                    }
                                />

                                <TextField
                                    inputProps={{ disabled: true }}
                                    css={emotionCss(palette).textFieldDisabled}
                                    label="キャンセル日"
                                    value={
                                        (order.status === 0)?
                                        dayjs(order.updated_at).format('YYYY-MM-DD')
                                        : '　'
                                    }
                                />

                                { order.status === 1 &&
                                <LoadingButton variant="contained" color="secondary"
                                    css={css`
                                        display:block;
                                        margin:32px auto;
                                    `}
                                    onClick={ e => router.get( route('purchases.edit', {id: order.id}) ) }
                                >編集する</LoadingButton>
                                }


                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    </>);

}
