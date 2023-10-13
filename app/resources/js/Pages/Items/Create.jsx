
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';

import { useForm } from '@inertiajs/react';

import { defaultTheme } from '@/Components/DefaultThemeProvider';
import { css } from '@emotion/react';
import emotionCss from '@/CssInJs/emotionCss';

/** @jsxImportSource @emotion/react */
export default function ItemCreate({ auth }) {
    const palette = defaultTheme().palette
    const form = useForm({
        name: '',
        memo: '',
        price: 0
    })


    const handleSubmit = e => {
        e.preventDefault()
        form.post(
            route('items.store'),
            { preserveScroll: true }
        )
    }






    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">商品登録</h2>}
        >
            <Head title="商品登録" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>
                        <div className="p-6 text-gray-900">
                            <form className="w-[600px] mx-auto flex flex-col gap-y-[16px]">
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
                                    // rows={3}
                                    inputProps={{
                                        // maxLength: 20,
                                    }}
                                    css={emotionCss(palette).textFieldMulti}
                                    onChange={ e => form.setData('memo', e.target.value) }
                                />
                                { form.errors.memo && <div className="text-red-500">{ form.errors.memo }</div> }

                                <TextField
                                    // required
                                    type="number"
                                    label="商品価格"
                                    name="price"
                                    inputProps={{min:0}}
                                    value={form.data.price}
                                    css={emotionCss(palette).textField}
                                    onChange={ e => form.setData('price', e.target.value) }
                                />
                                { form.errors.price && <div className="text-red-500">{form.errors.price}</div> }

                                <LoadingButton
                                    type="button"
                                    variant="contained"
                                    sx={{
                                        margin: '16px auto',
                                        fontSize: '16px'
                                    }}
                                    loading={form.processing}
                                    onClick={handleSubmit}
                                    >商品登録</LoadingButton>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
