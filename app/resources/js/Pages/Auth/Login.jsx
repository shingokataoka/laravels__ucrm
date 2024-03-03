import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

import { css } from '@emotion/react';
import { defaultTheme } from '@/Components/DefaultThemeProvider';

import { LoadingButton } from '@mui/lab';

/** @jsxImportSource @emotion/react */
export default function Login({ status, canResetPassword }) {
    const palette = defaultTheme().palette
    const theme = defaultTheme()

    const { data, setData, post, processing, errors, reset } = useForm({
        email: 'user1@test.com',
        password: 'user1111',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value={__('Email')} />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value={ __('Password') } />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-sm">{ __('Remember me') }</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {/* {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            css={css`
                                transition: color 0.25s;
                                &:hover{
                                    color: ${ palette.info.light };
                                }
                            `}
                        >
                            { __('Forgot your password?') }
                        </Link>
                    )} */}

                    <LoadingButton
                        type="submit"
                        variant='contained'
                        css={css`
                            margin-left: ${theme.spacing(2)} ;
                        `}
                        loading={processing}
                    >
                        { __('Log in') }
                    </LoadingButton>
                </div>
            </form>
        </GuestLayout>
    );
}
