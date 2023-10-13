import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Typography } from '@mui/material';


import { defaultTheme } from '@/Components/DefaultThemeProvider';
import { css } from '@emotion/react';

import nl2br from '@/Functions/nl2br';

/** @jsxImportSource @emotion/react */
export default function Dashboard({ auth }) {
    const palette = defaultTheme().palette
    const spacing = defaultTheme().spacing
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">サイト説明</h2>}
        >
            <Head title="サイト説明" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>
                        <div className="p-6">

                            <div
                                css={css`
                                    h5, h6 {
                                        margin-top: ${spacing(4)}
                                    }
                                    p {
                                        margin-top: ${spacing(1)}
                                    }
                                `}
                            >
                                <Typography variant="h5">
                                    サイト内容
                                </Typography>
                                <p>{nl2br(
                                    `このサイトは、顧客管理システムの練習兼ポートフォリオとして制作したものです。
                                    そのため、商品購入はシンプルにしています。(ECサイトは別サイトで制作済みです。)
                                    （時間と環境の都合上、macパソコンでGoogle Chromeのみ動作確認済みです。）`
                                )}</p>

                                <Typography variant="h5">
                                    サイト内のデータについて
                                </Typography>
                                <p>{nl2br(
                                    `データベース内は全てダミーデータです。
                                    よって不自然な部分があります。ご了承ください。
                                    （例えば、顧客情報の「氏名」と「カナ」が合わないなど）

                                    商品のダミーデータは、美容院をイメージしています。
                                    `
                                )}</p>

                                <Typography variant="h5">
                                    ダークモードについて
                                </Typography>
                                <p>{nl2br(
                                    `当サイトはデバイスの外観モードに合わせて、ライトモード配色やダークモード配色に切り替わります。
                                    この実装には、ReactのMUIのdefaultThemeの機能を使いました。`
                                )}</p>

                                <hr css={css`
                                    margin: ${spacing(3)} 0;
                                    border-color: ${palette.bg.color4};
                                `}/>

                                <Typography variant="h6">
                                購入画面
                                </Typography>
                                <p>{nl2br(
                                    `顧客管理のデータ解析に加えたい、商品購入情報を追加できます。`
                                )}</p>

                               <Typography variant="h6">
                                    購買履歴
                                </Typography>
                                <p>{nl2br(
                                    `購入の履歴情報（購入者、金額、購入orキャンセル、購入日）が確認できます。
                                    （ダミーデータのため、氏名とカナは合っていません。）
                                    また、編集画面で「購入数の変更」や「購入のキャンセル」を更新できます。`
                                )}</p>

                                <Typography variant="h6">
                                商品管理
                                </Typography>
                                <p>{nl2br(
                                    `商品を追加や編集、販売停止の切り替え、削除が行えます。
                                    `
                                )}</p>

                                <Typography variant="h6">
                                顧客管理
                                </Typography>
                                <p>{nl2br(
                                    `顧客の検索と追加ができます。`
                                )}</p>

                                <Typography variant="h6" css={css`font-weight:bold;`}>
                                データ分析
                                </Typography>
                                <p>
                                    <span
                                        css={css`
                                            text-decoration:underline;
                                            font-weight: bold;
                                        `}
                                    >このサイトのメインの機能</span>
                                    {nl2br(
                                    `になります。

                                    各日付別の購入金額をグラフ表示。

                                    デシル分析による10グループに分けた購入金額のグラフ表示。

                                    RFM分析によるR、F、Mごとにランク分けした顧客の人数を表で表示。
                                    　R（recency：最新購買日）いつ買ったか、最近購入しているか
                                    　F（frequency：累計購買回数）　どのくらいの頻度で買っているか
                                    　M（monetary：累計購買金額）　いくら使っているか`
                                )}</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
