import{j as e,a as r}from"./emotion-react-jsx-runtime.browser.esm-afc7ad78.js";import{c,a as s}from"./app-8b3e4287.js";import{d as o,c as t,D as l}from"./DefaultThemeProvider-a3a1dc0a.js";import{A as d}from"./ApplicationLogo-e9c0f09a.js";import{C as h}from"./Container-257d708b.js";import{B as g}from"./Button-d01e99ff.js";import{T as i}from"./Typography-7be4fd55.js";import"./ButtonBase-38d11eb1.js";import"./styled-a0985b3d.js";function L(){const{palette:n,spacing:a}=o();return e(l,{children:[r(s,{title:"トップページ"}),r(d,{className:"w-auto h-20 fill-current text-gray-500 mx-auto"}),e(h,{css:t`
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
