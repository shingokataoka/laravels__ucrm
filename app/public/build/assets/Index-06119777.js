import{j as e,a as r}from"./emotion-react-jsx-runtime.browser.esm-282f9dc3.js";import{c,a as s}from"./app-05e31e95.js";import{d as o,c as t,D as l}from"./DefaultThemeProvider-60793f61.js";import{A as d}from"./ApplicationLogo-b0999648.js";import{C as h}from"./Container-6bb66e38.js";import{B as g}from"./Button-78efd340.js";import{T as i}from"./Typography-e3e33fd5.js";import"./ButtonBase-4b7997c0.js";import"./styled-0a882231.js";function L(){const{palette:n,spacing:a}=o();return e(l,{children:[r(s,{title:"トップページ"}),r(d,{className:"w-auto h-20 fill-current text-gray-500 mx-auto"}),e(h,{css:t`
                padding: ${a(2)};
                background:${n.bg.color1};
                text-align:center;
            `,children:[r(i,{variant:"h4",children:"uCRM（顧客管理）サイト"}),r(i,{variant:"h5",children:"Laravel breeze + Inertia + Reactで制作"}),e("p",{css:t`margin-top: ${a(4)}`,children:["過去に講座での学習で作成した、Laravel breeze + Inertia + Vue3 によるSPAのサイトとほぼ同じ内容のサイトです。",r("br",{}),r("br",{}),"LaravelとReactでSPAサイト作成を習得するため、練習目的で作りました。"]}),e("div",{css:t`
                    width: 400px;
                    margin: ${a(4)} auto;
                    padding: ${a(2)};
                    background: ${n.bg.color2};
                `,children:[r(i,{variant:"h5",children:"テスト用ユーザー"}),e("p",{css:t`
                        padding: ${a(2)} 0;
                    `,children:["当サイトはポートフォリオです。",r("br",{}),r("span",{css:t`text-decoration: underline;`,children:"遠慮なくログイン"}),"していただければ幸いです。"]}),r("table",{css:t`
                    display: inline-block;
                `,children:e("tbody",{children:[e("tr",{children:[e("td",{css:t`text-align:right;`,children:[__("Email")," : "]}),r("td",{css:t`text-align:left;`,children:"user1@test.com"})]}),e("tr",{children:[e("td",{css:t`text-align:right;`,children:[__("Password")," : "]}),r("td",{css:t`text-align:left;`,children:"user1111"})]})]})})]}),e(g,{variant:"contained",css:t`font-weight:bold;`,onClick:p=>c.get(route("login")),children:[__("Log in"),"ページ"]})]})]})}export{L as default};
