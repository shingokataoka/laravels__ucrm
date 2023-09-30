/** @jsxImportSource @emotion/react */

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { css } from '@emotion/react';
import { defaultTheme } from '@/Components/DefaultThemeProvider';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

    const [textFieldColor1, setTextFieldColor1] = useState(palette.bg.color2)
    const [textFieldColor2, setTextFieldColor2] = useState(palette.bg.color2)
    const [textFieldColor3, setTextFieldColor3] = useState(palette.bg.color2)

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
                            <form onSubmit={ handleSubmit } className="w-[600px] mx-auto flex flex-col gap-y-[32px]">
                                <TextField
                                    // required
                                    label="商品名"
                                    name="name"
                                    value={form.data.name}
                                    sx={{
                                        width: '100%',
                                        background: textFieldColor1,
                                        transition: 'background 0.5s 0s ease'
                                    }}
                                    onFocus={ () => setTextFieldColor1('none') }
                                    onBlur={ () => setTextFieldColor1(palette.bg.color2) }
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
                                    sx={{
                                        width: '100%',
                                        background: textFieldColor2,
                                        transition: 'background 0.5s',
                                        textarea: {
                                            '&:focus': {
                                                boxShadow: 'none'
                                            }
                                        }
                                    }}
                                    onFocus={ () => setTextFieldColor2('none') }
                                    onBlur={ () => setTextFieldColor2(palette.bg.color2) }
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
                                        background: textFieldColor3,
                                        transition: 'background 0.5s'
                                    }}
                                    onFocus={ () => setTextFieldColor3('none') }
                                    onBlur={ () => setTextFieldColor3(palette.bg.color2) }
                                    onChange={ e => form.setData('price', e.target.value) }
                                />
                                { form.errors.price && <div className="text-red-500">{form.errors.price}</div> }


                                <FormControl  css={css`background:${palette.bg.color2}; padding:8px;`}>
                                    <FormLabel id="demo-row-radio-buttons-group-label">ステータス</FormLabel>
                                    <RadioGroup
                                        onChange={e => form.setData('is_selling', e.target.value)}
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="is_selling"
                                        value={form.data.is_selling}
                                        css={css`color:${palette.text.primary};`}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="販売中" />
                                        <FormControlLabel value="0" control={<Radio />} label="停止中" />
                                    </RadioGroup>
                                </FormControl>


                                <Button type="submit" variant="contained" sx={{
                                    margin: '16px auto',
                                    fontSize: '16px'
                                }}>更新する</Button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
