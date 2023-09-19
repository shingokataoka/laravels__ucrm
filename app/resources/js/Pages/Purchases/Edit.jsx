/** @jsxImportSource @emotion/react */

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { defaultTheme } from '@/Components/defaultThemeProvider';
import { css } from '@emotion/react';

import dayjs from 'dayjs';

import { useState } from 'react';
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

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


export default function Create({ auth, items, order }) {

    const palette = defaultTheme().palette
    const breackpoints = defaultTheme().breakpoints.values

    const [processing, setProcessing] = useState(false)
    const errors = usePage().props.errors

    const [formData, setFormData] = useState({
        status: order.status,
        items: items,
    })
    const [total, setTotal] = useState(order.total)

    const buttonCss = css`
        display: block;
        margin: 16px auto;
    `
    const textFieldCss = css`
        width:100%;
        margin-top: 32px;
        input {
            &:focus{
                background:${palette.bg.color2};
            }
            border-radius: 3px;
            transition: all 0.25s;
        }
    `
    const textFieldDisabledCss = css`
        ${textFieldCss}
        fieldset { border: 1px ${palette.bg.color3} solid !important; }
    `


    const handleChange = ({name, value}) => {
        setFormData(data => ({ ...data, [name]:value }))
    }


    // 購入するボタンを押した送信処理
    const handleSubmit = e => {
        router.put(
            route('purchases.update', {id: order.id}),
            formData,
        )
    }


    return (<>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">購買履歴 編集画面</h2>}
        >
            <Head title="購買履歴 編集画面" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>
                        <div className="p-6">
                            <Container css={css`width:${breackpoints.sm}px;`}>

                                <TextField label="購入日" type="date" variant="outlined"
                                    css={textFieldDisabledCss}
                                    inputProps={{ disabled:true }}
                                    name="date"
                                    value={ dayjs(order.date).format('YYYY-MM-DD') }
                                />

                                <TextField label="会員名" variant="outlined"
                                    css={textFieldDisabledCss}
                                    inputProps={{ disabled:true }}
                                    name="customer_info"
                                    value={order.customer_name}
                                />

                                <BasicTable
                                    items={items}
                                    textFieldCss={textFieldCss}
                                    buttonCss={buttonCss}
                                    palette={palette}
                                    formData={formData}
                                    setFormData={setFormData}
                                    total={total}
                                    setTotal={setTotal}
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


                                <RadioButtonsGroup
                                    palette={palette}
                                    formData={formData}
                                    handleChange={handleChange}
                                />
                                {errors['status'] &&
                                    <div css={css`color:${palette.error.main};`}>{errors['status']}</div>
                                }


                                <LoadingButton
                                        loading={processing}
                                        variant="contained"
                                        css={buttonCss}
                                        color="primary"
                                        onClick={handleSubmit}
                                    >
                                        更新する
                                </LoadingButton>

                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    </>);

}




function BasicTable({ palette, formData, setFormData, total, setTotal }) {

    const changeQuantity = ({index, quantity}) => {
        const newItems = formData.items
        newItems[index].quantity = quantity
        setFormData( { ...formData, ['items']: newItems } )
        changeTotal(newItems)
    }

    const changeTotal = (items) => {
        let newTotal = 0;
        items.map(item => {
            newTotal += item.price * item.quantity
        })
        setTotal(newTotal);
    }


    return (<>
    <TableContainer component={Paper}
        css={css`
            margin: 48px 0 16px 0;
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
          {formData.items.map((item, index) => (
            <TableRow
              key={index}
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
                        onChange={ e => changeQuantity({
                            index:index,
                            quantity: e.target.value
                        }) }
                    >
                    { [0,1,2,3,4,5,6,7,8,9,10].map(value => (
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
    >合計　{(total-0).toLocaleString()} 円</div>

  </>);
}



function RadioButtonsGroup({palette, formData, handleChange}) {

  return (
    <FormControl
        css={css`
            border: 1px ${palette.bg.color3} solid;
            border-radius: 5px;
            background: ${palette.bg.color1};
            transition: background 0.25s;
            &:hover {
                outline: 1px ${palette.text.primary} solid;
                background: ${palette.bg.color2};
            }
            padding: 8px;
        `}
    >
    <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
    <RadioGroup
        css={css`
            display:flex;
            align-items: center;
        `}
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="status"
      value={formData.status}
      onChange={ e => handleChange(e.target) }

    >
        <div css={css`margin:0 16px 0 8px;`}>ステータス</div>
      <FormControlLabel value={1} control={<Radio />} label="未キャンセル" />
      <FormControlLabel value={0} control={<Radio />} label="キャンセルする" />
    </RadioGroup>
  </FormControl>  );
}
