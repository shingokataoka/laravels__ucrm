import{j as a,a as e}from"./emotion-react-jsx-runtime.browser.esm-282f9dc3.js";import{A as c}from"./AuthenticatedLayout-68b72068.js";import{d as r,a as h}from"./app-05e31e95.js";import{d as n,c as m}from"./DefaultThemeProvider-60793f61.js";import{B as o}from"./Button-78efd340.js";import{T as x,a as s,b as l,c as p,d as f,e as g}from"./TableRow-e0b4d0ab.js";import"./ApplicationLogo-b0999648.js";import"./transition-c4df1b13.js";import"./ButtonBase-4b7997c0.js";function C({auth:t,items:d}){const i=n().palette;return a(c,{user:t.user,header:e("h2",{className:"font-semibold text-xl leading-tight",children:"商品管理"}),children:[e(h,{title:"商品管理"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",css:m`background:${i.bg.color1};`,children:a("div",{className:"p-6 text-gray-900 max-w-[700px] m-auto",children:[e("div",{className:"text-right",children:e(o,{href:route("items.create"),variant:"contained",color:"primary",component:r,children:"新規登録"})}),e(u,{items:d})]})})})})]})}function u({items:t}){const d=n().palette;return e(g,{children:a(f,{sx:{minWidth:650},"aria-label":"simple table",children:[e(x,{children:a(s,{children:[e(l,{align:"left",sx:{width:"20%"},children:"id"}),e(l,{align:"left",sx:{width:"20%"},children:"商品名"}),e(l,{align:"left",sx:{width:"20%"},children:"価格"}),e(l,{align:"left",sx:{width:"20%"},children:"ステータス"})]})}),e(p,{children:t.map(i=>a(s,{children:[e(l,{align:"left",sx:{width:"20%"},children:e(r,{href:route("items.show",i.id),style:{color:d.primary.main},children:i.id})}),e(l,{align:"left",sx:{width:"20%"},children:i.name}),e(l,{align:"left",sx:{width:"20%"},children:i.price}),i.is_selling===1&&e(l,{align:"left",sx:{width:"20%"},children:"販売中"}),i.is_selling===0&&e(l,{align:"left",sx:{width:"20%"},children:"停止中"})]},i.id))})]})})}export{C as default};