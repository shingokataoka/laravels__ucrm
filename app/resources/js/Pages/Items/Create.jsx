import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';


export default function ItemCreate({ auth }) {
    const _token = usePage().props._token

    const [textFieldColor1, setTextFieldColor1] = useState('#f7f7f7')
    const [textFieldColor2, setTextFieldColor2] = useState('#f7f7f7')
    const [textFieldColor3, setTextFieldColor3] = useState('#f7f7f7')
    const [form, setForm] = useState({})

    const errors = usePage().props.errors

    const handleSubmit = e => {
        e.preventDefault()
        const postForm = {
            ...form,
            _token: _token
        }
        console.log('送信', form, postForm)
        router.post(
            route('items.store'),
             postForm
        )
    }

    const handleChange = e => {
        const {name, value} = e.target
        setForm( (form) => {
            return {
                ...form,
                [name]: value
            }
        } )
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">商品登録</h2>}
        >
            <Head title="商品登録" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={ handleSubmit } className="w-[600px] mx-auto flex flex-col gap-y-[16px]">
                                <TextField
                                    // required
                                    label="商品名"
                                    name="name"
                                    sx={{
                                        width: '100%',
                                        background: textFieldColor1,
                                        transition: 'background 0.5s 0s ease'
                                    }}
                                    onFocus={ () => setTextFieldColor1('none') }
                                    onBlur={ () => setTextFieldColor1('#f7f7f7') }
                                    onChange={  e => handleChange(e)  }
                                />
                                { errors.name && <div className="text-red-500">{ errors.name }</div> }

                                <TextField
                                    label="メモ"
                                    name="memo"
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
                                    onBlur={ () => setTextFieldColor2('#f7f7f7') }
                                    onChange={ e => handleChange(e) }
                                />
                                { errors.memo && <div className="text-red-500">{ errors.memo }</div> }

                                <TextField
                                    // required
                                    type="number"
                                    label="商品価格"
                                    name="price"
                                    defaultValue={ 0 }
                                    sx={{
                                        width: '100%',
                                        background: textFieldColor3,
                                        transition: 'background 0.5s'
                                    }}
                                    onFocus={ () => setTextFieldColor3('none') }
                                    onBlur={ () => setTextFieldColor3('#f7f7f7') }
                                    onChange={ e => handleChange(e) }
                                />
                                { errors.price && <div className="text-red-500">{errors.price}</div> }

                                <Button type="submit" variant="contained" sx={{
                                    margin: '16px auto',
                                    fontSize: '16px'
                                }}>商品登録</Button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
