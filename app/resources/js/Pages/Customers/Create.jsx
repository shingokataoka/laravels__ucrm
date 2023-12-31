/** @jsxImportSource @emotion/react */

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { css } from '@emotion/react';
import { defaultTheme } from '@/Components/DefaultThemeProvider';
import emotionCss from '@/CssInJs/emotionCss';

import axios from 'axios';
import axiosJsonpAdapter from 'axios-jsonp'


import {usePage} from '@inertiajs/react';
import { useState } from 'react';
import { router } from '@inertiajs/react';

import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function ItemCreate({ auth }) {
    const palette = defaultTheme().palette

    const errors = usePage().props.errors
    const [processing, setProcessing] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        kana: '',
        tel: '',
        email: '',
        postcode: '',
        address: '',
        birthday: '',
        gender: '',
        memo: '',
    })

    const textFieldCss = css`
        width:100%;
        input {
            border-radius: 5px;
            background: ${palette.bg.color1};
            transition: background 0.25s;
            &:focus,
            &:hover {
                background: ${palette.bg.color2};
            }
        }
    `
    const multilineFieldCss = css`
        width: 100%;
        background: ${palette.bg.color1};
        div {padding: 0;}
        textarea {
            padding: 16.5px;
            margin-right: 2px;
            border-radius: 5px;
            transition: background 0.25s;
            &:focus,
            &:hover {
                background: ${palette.bg.color2};
            }
        }
    `

    const handleChange = ({name, value}) => {
        setFormData( formData => ({...formData, [name]:value}) )
    }

    const ChangeDate = (e) => {
        handleChange(e.target)
        e.target.focus()
        e.target.blur()
    }

    const changePostcode = async ({name, value}) => {
        handleChange({name, value})
        const res = await axios(
            `https://api.zipaddress.net/?zipcode=${value}`,
            {adapter: axiosJsonpAdapter}
        )
        if (res.data.fullAddress !== undefined) {
            handleChange({
                name: 'address',
                value: res.data.fullAddress
            })
        }
    }

    const handleSubmit = e => {
        setProcessing(true)
        router.post( route('customers.store'), formData, {
            onError: errors => { setProcessing(false) }
        } )
    }



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">顧客登録</h2>}
        >
            <Head title="顧客登録" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>
                        <div className="p-6 text-gray-900">
                            <form className="w-[600px] mx-auto flex flex-col">

                                <TextField
                                    // required
                                    label="顧客名"
                                    name="name"
                                    value={formData.name}
                                    css={emotionCss(palette).textField}
                                    onChange={  e => handleChange(e.target)  }
                                />
                                { errors.name && <div className="text-red-500">{ errors.name }</div> }

                                <TextField
                                    // required
                                    label="顧客名カナ"
                                    name="kana"
                                    value={formData.kana}
                                    css={emotionCss(palette).textField}
                                    onChange={  e => handleChange(e.target)  }
                                />
                                { errors.kana && <div className="text-red-500">{ errors.kana }</div> }

                                <TextField
                                    // required
                                    label="電話番号"
                                    name="tel"
                                    type="number"
                                    value={formData.tel}
                                    css={emotionCss(palette).textField}
                                    onChange={  e => handleChange(e.target)  }
                                />
                                { errors.tel && <div className="text-red-500">{ errors.tel }</div> }

                                <TextField
                                    // required
                                    label="メールアドレス"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    css={emotionCss(palette).textField}
                                    onChange={  e => handleChange(e.target)  }
                                />
                                { errors.email && <div className="text-red-500">{ errors.email }</div> }

                                <TextField
                                    // required
                                    label="郵便番号"
                                    name="postcode"
                                    type="number"
                                    value={formData.postcode}
                                    css={emotionCss(palette).textField}
                                    onChange={  e => changePostcode(e.target)  }
                                />
                                { errors.postcode && <div className="text-red-500">{ errors.postcode }</div> }

                                <TextField
                                    // required
                                    label="住所"
                                    name="address"
                                    value={formData.address}
                                    css={emotionCss(palette).textField}
                                    onChange={  e => handleChange(e.target)  }
                                />
                                { errors.address && <div className="text-red-500">{ errors.address }</div> }

                                <TextField
                                    label="誕生日"
                                    name="birthday"
                                    type="date"
                                    required
                                    value={formData.birthday}
                                    css={emotionCss(palette).textFieldDate}
                                    onChange={  e => ChangeDate(e)  }
                                />
                                { errors.birthday && <div className="text-red-500">{ errors.birthday }</div> }

                                <FormControl
                                    css={emotionCss(palette).formControl}
                                >
                                    <FormLabel id="demo-row-radio-buttons-group-label">性別</FormLabel>
                                    <RadioGroup
                                    onChange={  e => handleChange(e.target)  }
                                    row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="gender"
                                        value={formData.gender}
                                        css={css`color:${palette.text.primary};`}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="男性" />
                                        <FormControlLabel value="1" control={<Radio />} label="女性" />
                                        <FormControlLabel value="2" control={<Radio />} label="その他" />
                                    </RadioGroup>
                                </FormControl>
                                { errors.gender && <div className="text-red-500">{ errors.gender }</div> }

                                <TextField
                                    label="メモ"
                                    name="memo"
                                    value={formData.memo}
                                    multiline
                                    minRows={2}
                                    maxRows={4}
                                    // rows={3}
                                    inputProps={{
                                        // maxLength: 20,
                                    }}
                                    css={emotionCss(palette).textFieldMulti}
                                    onChange={  e => handleChange(e.target)  }
                                />
                                { errors.memo && <div className="text-red-500">{ errors.memo }</div> }


                                <LoadingButton
                                    type="button"
                                    variant="contained"
                                    sx={{
                                        margin: '16px auto',
                                        fontSize: '16px'
                                    }}
                                    onClick={ e => handleSubmit(e) }
                                    loading={processing}
                                >顧客登録</LoadingButton>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
