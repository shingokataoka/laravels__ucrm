/** @jsxImportSource @emotion/react */

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { defaultTheme } from '@/Components/DefaultThemeProvider';
import { css } from '@emotion/react';

import {useForm} from '@inertiajs/react';

import Pagination from '@mui/material/Pagination';

import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import { Link } from '@inertiajs/react';

import { TextField } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Flash from '@/Components/Flash';


export default function CustomerIndex({ auth, customers, urlParameters }) {
    const palette = defaultTheme().palette

    // 検索キーワードがあれば渡す、なければ空文字
    const searchForm = useForm({
        search: (urlParameters.search !== undefined)? urlParameters.search : '',
    })
    // URLクエリパラメータ全てとpageを渡す
    const pageForm = useForm({
        ...urlParameters,
        page: urlParameters.page || 1,
    })

    const allProcessing = searchForm.processing || pageForm.processing

    const pageChange = (e, currentPage) => {
        // dataにクリックしたpageをを加える
        pageForm.transform( data => ({
            ...data,
            ['page']: currentPage
        }) )
        // get送信
        pageForm.get(
            route('customers.index'),
            // ページ転移後もスクロール位置を維持
            { preserveScroll: true }
        )
    }

    const searchSubmit = () => {
        // get送信
        searchForm.get(
            route('customers.index'),
             // ページ転移後もスクロール位置を維持
            { preserveScroll: true }
        )
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">顧客一覧</h2>}
        >
            <Head title="顧客一覧" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">



                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>

                        <div className="p-6 text-gray-900 max-w-[700px] m-auto">

                            <div css={css`display:flex; align-items:center`}>
                                <div css={css`display:flex; align-items:center;`}>
                                    <TextField
                                        label="キーワード（カナ or かな）"
                                        variant="filled"
                                        name="search"
                                        value={searchForm.data.search}
                                        css={css`width: 250px;`}
                                        onChange={e => searchForm.setData('search', e.target.value)}
                                    />
                                    { searchForm.errors.search && <div className="text-red-500">{ searchForm.errors.search }</div> }
                                    <LoadingButton
                                        variant="contained"
                                        color="secondary"
                                        css={css`margin-left:8px;`}
                                        onClick={searchSubmit}
                                        loading={searchForm.processing}
                                        disabled={allProcessing}
                                    >検索</LoadingButton>
                                </div>
                                <Button href={ route('customers.create') }
                                    variant="contained"
                                    color="primary" component={ Link }
                                    css={css`margin-left:auto;`}
                                >顧客登録</Button>
                            </div>
                            <BasicTable customers={customers} />

                            <Pagination
                                count={customers.last_page}
                                page={customers.current_page}
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



function BasicTable({customers}) {
    const theme = defaultTheme().palette
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{width:'20%'}}>id</TableCell>
            <TableCell align="left" sx={{width:'20%'}}>氏名</TableCell>
            <TableCell align="left" sx={{width:'20%'}}>カナ</TableCell>
            <TableCell align="left" sx={{width:'20%'}}>電話番号</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.data.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell align="left" sx={{width:'20%'}}>
                    {row.id}
                </TableCell>
              <TableCell align="left" sx={{width:'20%'}}>{row.name}</TableCell>
              <TableCell align="left" sx={{width:'20%'}}>{row.kana}</TableCell>
              <TableCell align="left" sx={{width:'20%'}}>{row.tel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
