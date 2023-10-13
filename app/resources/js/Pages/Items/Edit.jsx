/** @jsxImportSource @emotion/react */

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { css } from '@emotion/react';
import { defaultTheme } from '@/Components/DefaultThemeProvider';
import emotionCss from '@/CssInJs/emotionCss';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {useForm} from '@inertiajs/react';

export default function ItemCreate({ auth, item }) {
    const palette = defaultTheme().palette
    const form = useForm({
        name: item.name,
        memo: item.memo,
        price: item.price,
        is_selling: item.is_selling
    })

    const handleSubmit = e => {
        e.preventDefault()
        form.put(
            route('items.update', {id: item.id}),
        )
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">商品編集</h2>}
        >
            <Head title="商品編集" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>
                        <div className="p-6 text-gray-900">
                            <form onSubmit={ handleSubmit } className="w-[600px] mx-auto flex flex-col">
                                <TextField
                                    // required
                                    label="商品名"
                                    name="name"
                                    value={form.data.name}
                                    css={emotionCss(palette).textField}
                                    onChange={  e => form.setData('name', e.target.value)  }
                                />
                                { form.errors.name && <div className="text-red-500">{ form.errors.name }</div> }

                                <TextField
                                    label="メモ"
                                    name="memo"
                                    value={form.data.memo}
                                    multiline
                                    minRows={2}
                                    maxRows={4}
                                    css={emotionCss(palette).textFieldMulti}
                                    onChange={ e => form.setData('memo', e.target.value) }
                                />
                                { form.errors.memo && <div className="text-red-500">{ form.errors.memo }</div> }

                                <TextField
                                    // required
                                    type="number"
                                    label="商品価格"
                                    name="price"
                                    value={form.data.price}
                                    sx={{
                                        width: '100%',
                                        transition: 'background 0.5s'
                                    }}
                                    css={emotionCss(palette).textField}
                                    onChange={ e => form.setData('price', e.target.value) }
                                />
                                { form.errors.price && <div className="text-red-500">{form.errors.price}</div> }


                                <FormControl  css={emotionCss(palette).formControl}>
                                    <FormLabel id="demo-row-radio-buttons-group-label">ステータス</FormLabel>
                                    <RadioGroup
                                        onChange={e => form.setData('is_selling', e.target.value)}
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="is_selling"
                                        value={form.data.is_selling}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="販売中" />
                                        <FormControlLabel value="0" control={<Radio />} label="停止中" />
                                    </RadioGroup>
                                </FormControl>


                                <LoadingButton
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        margin: '16px auto',
                                        fontSize: '16px'
                                    }}
                                    loading={form.processing}
                                >更新する</LoadingButton>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
