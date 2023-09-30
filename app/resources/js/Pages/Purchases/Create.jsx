/** @jsxImportSource @emotion/react */

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { defaultTheme } from '@/Components/DefaultThemeProvider';
import { css } from '@emotion/react';

import axios from 'axios';
import dayjs from 'dayjs';
// プラグインが必要
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
// tzを有効にする記述
dayjs.extend(utc);
dayjs.extend(timezone);

import { useState } from 'react';
import { useEffect } from 'react';
import {usePage} from '@inertiajs/react';
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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import MuiModal from '@/Components/MuiModal';

export default function PurchaseCreate({ auth, items }) {

    const palette = defaultTheme().palette
    const breackpoints = defaultTheme().breakpoints.values

    const [openModal, setOpenModal] = useState(false)
    const [page, setPage] = useState(1);

    const [processing, setProcessing] = useState(false)
    const [search, setSearch] = useState('')
    const [searchCustomers, setSearchCustomers] = useState({data:{data:[]}})
    const errors = usePage().props.errors


    const [formData, setFormData] = useState({
        date: dayjs().tz('Asia/Tokyo').format('YYYY-MM-DD'),
        customer_id: null,
        status: true,
        items: [],
    })
    const [itemList, setItemList] = useState( () => (
        items.map( item => ({...item, quantity:0}) )
     ) )

    const buttonCss = css`
        display: block;
        margin: 16px auto;
    `

    const textFieldCss = css`
        width:100%;
        margin-top: 16px;
        input {
            &:focus{
                background:${palette.bg.color2};
            }
            border-radius: 3px;
            transition: all 0.25s;
        }
    `
    const dateFieldCssNull = css`
        ${textFieldCss}
        input {
         &:focus { color: ${palette.text.primary}; }
            color: rgba(0,0,0,0);
        }
    `
    const [dateFieldCss, setDateFieldCss] = useState(dateFieldCssNull)

    const changeDate = ({name, value}) => {
        handleChange({name, value})
        if (value === '') setDateFieldCss(data => (dateFieldCssNull))
        else setDateFieldCss(data => (textFieldCss))
    }

    const handleChange = ({name, value}) => {
        setFormData(data => ({ ...data, [name]:value }))
    }

    // 非同期でsearchワードのcustomersを(paginateデータで)取得
    const handleSearchCustomers = async (search, page) => {
        setProcessing(data => true)
        const resData = await axios.get(
            route('api.customers.search',{search:search, page:page}),
        )
        setSearchCustomers(data => (resData))
        setOpenModal(data => (true))
        setProcessing(data => false)
    }

    // 購入するボタンを押した送信処理
    const handleSubmit = e => {
        // 購入数のあるitemだけformData.itemsに{itemId, quantity}を入れる
        const newItems = []
        itemList.map(item => {
            if (item.quantity > 0) newItems.push({
                id: item.id,
                quantity: item.quantity
            })
        })
        const newFormData = {
            ...formData,
            ['items']: newItems
        }
        setFormData(newFormData)
        console.log(formData)
        router.post( route('purchases.store'), newFormData )
    }


    useEffect(() => {
        changeDate({name:'date', value:formData.date})
    }, [])


    return (<>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">購入画面</h2>}
        >
            <Head title="購入画面" />
            {errors.article_ids &&
                <div css={css`color:${palette.error.main};`}>{errors.article_ids}</div>
            }

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>
                        <div className="p-6">
                            <Container css={css`width:${breackpoints.sm}px;`}>

                                <TextField label="購入日" type="date" variant="outlined"
                                    css={dateFieldCss}
                                    name="date"
                                    value={formData.date}
                                    onChange={ e => changeDate(e.target) }
                                />
                                {errors.date &&
                                    <div css={css`color:${palette.error.main};`}>{errors.date}</div>
                                }

                                <TextField label="会員名（カナか電話番号を入力して「検索する」）" variant="outlined"
                                    css={textFieldCss}
                                    name="customer_info"
                                    value={search}
                                    onChange={ e => setSearch(e.target.value) }
                                />
                                {errors.customer_id &&
                                    <div css={css`color:${palette.error.main};`}>{errors.customer_id}</div>
                                }
                                <LoadingButton
                                    loading={processing}
                                    variant="contained"
                                    css={buttonCss}
                                    color="secondary"
                                    onClick={ e => {
                                        setPage(1)
                                        handleSearchCustomers(search, 1)
                                    }}
                                >
                                    検索する
                                </LoadingButton>

                                <BasicTable
                                    items={items}
                                    textFieldCss={textFieldCss}
                                    buttonCss={buttonCss}
                                    palette={palette}
                                    setFormData={setFormData}
                                    itemList={itemList} setItemList={setItemList}
                                    handleSubmit={handleSubmit}
                                />
                                {errors.items &&
                                    <div css={css`color:${palette.error.main};`}>{errors.items}</div>
                                }
                                {errors['items.0.id'] &&
                                    <div css={css`color:${palette.error.main};`}>{errors['items.0.id']}</div>
                                }
                                {errors['items.0.quantity'] &&
                                    <div css={css`color:${palette.error.main};`}>{errors['items.0.quantity']}</div>
                                }

                                <LoadingButton
                                        loading={processing}
                                        variant="contained"
                                        css={buttonCss}
                                        color="primary"
                                        onClick={handleSubmit}
                                    >
                                        購入する
                                </LoadingButton>

                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>


        <MuiModal
            openModal={openModal} setOpenModal={setOpenModal}
            formData={formData}
            setFormData={setFormData}
            search={search} setSearch={setSearch}
            searchCustomers={searchCustomers} setSearchCustomers={setSearchCustomers}
            handleSearchCustomers={handleSearchCustomers}
            page={page} setPage={setPage}
            processing={processing} setProcessing={setProcessing}
        >
        </MuiModal>


    </>);

}




function BasicTable({ palette, itemList, setItemList }) {
    const [totalPrice, setTotalPrice] = useState(0)

    const quantityChange = ({id, quantity}) => {
        // itemListの数量を変更
        setItemList(data => {
            const newItemList = data.map(item => {
                if (id !== item.id) return item
                item.quantity = quantity
                return item
            })
            return newItemList
        })
        // 変更後のitemListに合わせて合計金額を変更
        let total = 0
        itemList.map(item => {
            total += item.price * item.quantity
        })
        setTotalPrice(total)
    }

    return (<>
    <TableContainer component={Paper}
        css={css`
            margin-bottom: 48px;
        `}
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
          {itemList.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{item.id}</TableCell>
              <TableCell >{item.name}</TableCell>
              <TableCell align="right">{item.price.toLocaleString()} 円</TableCell>
              <TableCell align="right">
                <FormControl >
                    <InputLabel></InputLabel>
                    <Select
                        id={item.id + ''}
                        value={item.quantity}
                        label=""
                        onChange={ e => quantityChange({
                            id:item.id,
                            quantity: e.target.value
                        }) }
                    >
                    { [0,1,2,3,4,5,6,7,8,9].map(value => (
                        <MenuItem key={value} value={value}>{value} 個</MenuItem>
                    )) }
                    </Select>
                </FormControl>
              </TableCell>
              <TableCell align="right">{ (item.price * item.quantity).toLocaleString() } 円</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <div
        css={css`
            margin-bottom: 24px;
            text-align: center;
            background: ${palette.bg.color2};
            padding: 8px;
            border-radius: 3px;
            border-bottom: 2px ${palette.bg.color3} solid;
        `}
    >合計　{totalPrice.toLocaleString()} 円</div>

  </>);
}
