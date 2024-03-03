import{j as r,a as e}from"./emotion-react-jsx-runtime.browser.esm-282f9dc3.js";import{A as v}from"./AuthenticatedLayout-68b72068.js";import{W as h,d as w,a as T}from"./app-05e31e95.js";import{d as p,c as s}from"./DefaultThemeProvider-60793f61.js";import{T as C}from"./TextField-48441db3.js";import{L as y}from"./LoadingButton-2d899ee9.js";import{B as N}from"./Button-78efd340.js";import{P as B}from"./Pagination-ffa42521.js";import{T as j,a as m,b as i,c as k,d as F,e as S}from"./TableRow-e0b4d0ab.js";import"./ApplicationLogo-b0999648.js";import"./transition-c4df1b13.js";import"./ButtonBase-4b7997c0.js";import"./useControlled-0ab8a7c5.js";function K({auth:n,customers:a,urlParameters:l}){const g=p().palette,t=h({search:l.search!==void 0?l.search:""}),d=h({...l,page:l.page||1}),c=t.processing||d.processing,x=(o,u)=>{d.transform(b=>({...b,page:u})),d.get(route("customers.index"),{preserveScroll:!0})},f=()=>{t.get(route("customers.index"),{preserveScroll:!0})};return r(v,{user:n.user,header:e("h2",{className:"font-semibold text-xl leading-tight",children:"顧客一覧"}),children:[e(T,{title:"顧客一覧"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",css:s`background:${g.bg.color1};`,children:r("div",{className:"p-6 text-gray-900 max-w-[700px] m-auto",children:[r("div",{css:s`display:flex; align-items:center`,children:[r("div",{css:s`display:flex; align-items:center;`,children:[e(C,{label:"キーワード（カナ or かな）",variant:"filled",name:"search",value:t.data.search,css:s`width: 250px;`,onChange:o=>t.setData("search",o.target.value)}),t.errors.search&&e("div",{className:"text-red-500",children:t.errors.search}),e(y,{variant:"contained",color:"secondary",css:s`margin-left:8px;`,onClick:f,loading:t.processing,disabled:c,children:"検索"})]}),e(N,{href:route("customers.create"),variant:"contained",color:"primary",component:w,css:s`margin-left:auto;`,children:"顧客登録"})]}),e(A,{customers:a}),e(B,{count:a.last_page,page:a.current_page,onChange:x,disabled:c,siblingCount:2,boundaryCount:2})]})})})})]})}function A({customers:n}){return p().palette,e(S,{children:r(F,{sx:{minWidth:650},"aria-label":"simple table",children:[e(j,{children:r(m,{children:[e(i,{align:"left",sx:{width:"20%"},children:"id"}),e(i,{align:"left",sx:{width:"20%"},children:"氏名"}),e(i,{align:"left",sx:{width:"20%"},children:"カナ"}),e(i,{align:"left",sx:{width:"20%"},children:"電話番号"})]})}),e(k,{children:n.data.map(a=>r(m,{children:[e(i,{align:"left",sx:{width:"20%"},children:a.id}),e(i,{align:"left",sx:{width:"20%"},children:a.name}),e(i,{align:"left",sx:{width:"20%"},children:a.kana}),e(i,{align:"left",sx:{width:"20%"},children:a.tel})]},a.id))})]})})}export{K as default};