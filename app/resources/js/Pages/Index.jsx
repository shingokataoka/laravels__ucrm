import { router } from "@inertiajs/react";

import { css } from "@mui/material"
import { defaultTheme, DefaultThemeProvider } from "@/Components/DefaultThemeProvider"

import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head } from "@inertiajs/react"
import { Container } from "@mui/material"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"


/** @jsxImportSource @emotion/react */
export default function Index () {
    const {palette, spacing} = defaultTheme()

    return (<DefaultThemeProvider>
        <Head title="トップページ" />

        <ApplicationLogo className="w-auto h-20 fill-current text-gray-500 mx-auto" />

        <Container
            css={css`
                padding: ${spacing(2)};
                background:${palette.bg.color1};
                text-align:center;
            `}
        >

            <Typography variant="h4">
                uCRM（顧客管理）サイト
            </Typography>
            <Typography variant="h5">
                Laravel breeze + Inertia + Reactで制作
            </Typography>

            <p css={css`margin-top: ${spacing(4)}`}>
                過去に講座での学習で作成した、Laravel breeze + Inertia + Vue3 によるSPAのサイトとほぼ同じ内容のサイトです。
                <br />
                <br />
                LaravelとReactでSPAサイト作成を習得するため、練習目的で作りました。
            </p>

            <div css={css`
                    width: 400px;
                    margin: ${spacing(4)} auto;
                    padding: ${spacing(2)};
                    background: ${palette.bg.color2};
                `}>
                <Typography
                    variant="h5"
                >
                    テスト用ユーザー
                </Typography>

                <p
                    css={css`
                        padding: ${spacing(2)} 0;
                    `}
                >
                    当サイトはポートフォリオです。<br />
                    <span css={css`text-decoration: underline;`}>遠慮なくログイン</span>していただければ幸いです。
                </p>

                <table css={css`
                    display: inline-block;
                `}>
                    <tbody>
                        <tr>
                            <td css={css`text-align:right;`}>{ __('Email') } : </td>
                            <td css={css`text-align:left;`}>user1@test.com</td>
                        </tr>
                        <tr>
                            <td css={css`text-align:right;`}>{ __('Password') } : </td>
                            <td css={css`text-align:left;`}>user1111</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Button variant="contained"
                css={css`font-weight:bold;`}
                onClick={ e => router.get( route('login') ) }
            >
                { __('Log in') }ページ
            </Button>
        </Container>
    </DefaultThemeProvider>)
}
