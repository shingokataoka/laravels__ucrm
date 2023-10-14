import{j as c,a as r}from"./emotion-react-jsx-runtime.browser.esm-82d40a37.js";import{n as e,A as h}from"./AuthenticatedLayout-924b535f.js";import{a as o}from"./app-8d50cb58.js";import{d as t,c as i}from"./DefaultThemeProvider-0fd7a1ea.js";import{T as a}from"./Typography-d428fdaf.js";import"./ApplicationLogo-ed67c61e.js";import"./transition-78265c55.js";import"./ButtonBase-45d064b0.js";function b({auth:d}){const l=t().palette,n=t().spacing;return c(h,{user:d.user,header:r("h2",{className:"font-semibold text-xl leading-tight",children:"サイト説明"}),children:[r(o,{title:"サイト説明"}),r("div",{className:"py-12",children:r("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:r("div",{className:"overflow-hidden shadow-sm sm:rounded-lg",css:i`background:${l.bg.color1};`,children:r("div",{className:"p-6",children:c("div",{css:i`
                                    h5, h6 {
                                        margin-top: ${n(4)}
                                    }
                                    p {
                                        margin-top: ${n(1)}
                                    }
                                `,children:[r(a,{variant:"h5",children:"サイト内容"}),r("p",{children:e(`このサイトは、顧客管理システムの練習兼ポートフォリオとして制作したものです。
                                    そのため、商品購入はシンプルにしています。(ECサイトは別サイトで制作済みです。)
                                    （時間と環境の都合上、macパソコンでGoogle Chromeのみ動作確認済みです。）`)}),r(a,{variant:"h5",children:"サイト内のデータについて"}),r("p",{children:e(`データベース内は全てダミーデータです。
                                    よって不自然な部分があります。ご了承ください。
                                    （例えば、顧客情報の「氏名」と「カナ」が合わないなど）

                                    商品のダミーデータは、美容院をイメージしています。
                                    `)}),r(a,{variant:"h5",children:"ダークモードについて"}),r("p",{children:e(`当サイトはデバイスの外観モードに合わせて、ライトモード配色やダークモード配色に切り替わります。
                                    この実装には、ReactのMUIのdefaultThemeの機能を使いました。`)}),r("hr",{css:i`
                                    margin: ${n(3)} 0;
                                    border-color: ${l.bg.color4};
                                `}),r(a,{variant:"h6",children:"購入画面"}),r("p",{children:e("顧客管理のデータ解析に加えたい、商品購入情報を追加できます。")}),r(a,{variant:"h6",children:"購買履歴"}),r("p",{children:e(`購入の履歴情報（購入者、金額、購入orキャンセル、購入日）が確認できます。
                                    （ダミーデータのため、氏名とカナは合っていません。）
                                    また、編集画面で「購入数の変更」や「購入のキャンセル」を更新できます。`)}),r(a,{variant:"h6",children:"商品管理"}),r("p",{children:e(`商品を追加や編集、販売停止の切り替え、削除が行えます。
                                    `)}),r(a,{variant:"h6",children:"顧客管理"}),r("p",{children:e("顧客の検索と追加ができます。")}),r(a,{variant:"h6",css:i`font-weight:bold;`,children:"データ分析"}),c("p",{children:[r("span",{css:i`
                                            text-decoration:underline;
                                            font-weight: bold;
                                        `,children:"このサイトのメインの機能"}),e(`になります。

                                    各日付別の購入金額をグラフ表示。

                                    デシル分析による10グループに分けた購入金額のグラフ表示。

                                    RFM分析によるR、F、Mごとにランク分けした顧客の人数を表で表示。
                                    　R（recency：最新購買日）いつ買ったか、最近購入しているか
                                    　F（frequency：累計購買回数）　どのくらいの頻度で買っているか
                                    　M（monetary：累計購買金額）　いくら使っているか`)]})]})})})})})]})}export{b as default};
