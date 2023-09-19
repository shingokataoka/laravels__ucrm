/** @jsxImportSource @emotion/react */
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import {useForm} from '@inertiajs/react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import {Link} from '@inertiajs/react';

import { defaultTheme } from '@/Components/defaultThemeProvider';
import { css } from '@emotion/react';

import Flash from '@/Components/Flash';

export default function ItemShow({ auth, item }) {
    const palette = defaultTheme().palette
    const form = useForm()

    const handleSubmit = e => {
        e.preventDefault()
        form.delete( route('items.destroy', item.id) )
    }



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">商品詳細</h2>}
        >
            <Head title="商品詳細" />

            <Flash />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="w-[600px] mx-auto flex flex-col gap-y-[16px]">
                                <TextField
                                    inputProps={{ readOnly: true }}
                                    label="商品名"
                                    name="name"
                                    value={item.name}
                                    sx={{
                                        width: '100%',
                                        background: palette.bg.color2,
                                    }}
                                />

                                <TextField
                                    label="メモ"
                                    name="memo"
                                    multiline
                                    minRows={2}
                                    maxRows={4}
                                    // rows={3}
                                    value={item.memo}
                                    sx={{
                                        width: '100%',
                                        background: palette.bg.color2,
                                        textarea: {
                                            '&:focus': {
                                                boxShadow: 'none'
                                            }
                                        }
                                    }}
                                />

                                <TextField
                                    // required
                                    type="number"
                                    label="商品価格"
                                    name="price"
                                    value={ item.price }
                                    sx={{
                                        width: '100%',
                                        background: palette.bg.color2,
                                    }}
                                />

                                <TextField
                                    // required
                                    type="text"
                                    label="ステータス"
                                    name="is_selling"
                                    value={ item.is_selling ? '販売中' : '停止中' }
                                    sx={{
                                        width: '100%',
                                        background: palette.bg.color2,
                                    }}
                                />

                                <Link href={ route('items.edit',{id: item.id}) } style={{margin: '16px auto'}} >
                                    <Button  type="submit" variant="contained" sx={{
                                        fontSize: '16px'
                                    }}>編集する</Button>
                                </Link>
                                <LoadingButton loading={form.processing} type="submit" variant="contained" color="warning" sx={{margin: '64px auto', fontSize: '16px'}}>削除する</LoadingButton>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
