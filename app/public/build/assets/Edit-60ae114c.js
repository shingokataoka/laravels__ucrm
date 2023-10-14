import{j as l,a as e}from"./emotion-react-jsx-runtime.browser.esm-82d40a37.js";import{A as p}from"./AuthenticatedLayout-924b535f.js";import{W as u,a as g}from"./app-8d50cb58.js";import{d as x,c as h}from"./DefaultThemeProvider-0fd7a1ea.js";import{e as s}from"./emotionCss-c172018a.js";import{T as i,F as b,a as f}from"./TextField-f85dbad1.js";import{R as v,F as m,a as n}from"./RadioGroup-b004ed16.js";import{L as w}from"./LoadingButton-6ca0e37c.js";import"./ApplicationLogo-ed67c61e.js";import"./transition-78265c55.js";import"./ButtonBase-45d064b0.js";import"./useControlled-3c235d74.js";import"./Typography-d428fdaf.js";import"./styled-06825ed8.js";import"./Button-6410230f.js";function G({auth:d,item:t}){const o=x().palette,a=u({name:t.name,memo:t.memo,price:t.price,is_selling:t.is_selling}),c=r=>{r.preventDefault(),a.put(route("items.update",{id:t.id}))};return l(p,{user:d.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"商品編集"}),children:[e(g,{title:"商品編集"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"overflow-hidden shadow-sm sm:rounded-lg",css:h`background:${o.bg.color1};`,children:e("div",{className:"p-6 text-gray-900",children:l("form",{onSubmit:c,className:"w-[600px] mx-auto flex flex-col",children:[e(i,{label:"商品名",name:"name",value:a.data.name,css:s(o).textField,onChange:r=>a.setData("name",r.target.value)}),a.errors.name&&e("div",{className:"text-red-500",children:a.errors.name}),e(i,{label:"メモ",name:"memo",value:a.data.memo,multiline:!0,minRows:2,maxRows:4,css:s(o).textFieldMulti,onChange:r=>a.setData("memo",r.target.value)}),a.errors.memo&&e("div",{className:"text-red-500",children:a.errors.memo}),e(i,{type:"number",label:"商品価格",name:"price",value:a.data.price,sx:{width:"100%",transition:"background 0.5s"},css:s(o).textField,onChange:r=>a.setData("price",r.target.value)}),a.errors.price&&e("div",{className:"text-red-500",children:a.errors.price}),l(b,{css:s(o).formControl,children:[e(f,{id:"demo-row-radio-buttons-group-label",children:"ステータス"}),l(v,{onChange:r=>a.setData("is_selling",r.target.value),row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"is_selling",value:a.data.is_selling,children:[e(m,{value:"1",control:e(n,{}),label:"販売中"}),e(m,{value:"0",control:e(n,{}),label:"停止中"})]})]}),e(w,{type:"submit",variant:"contained",sx:{margin:"16px auto",fontSize:"16px"},loading:a.processing,children:"更新する"})]})})})})})]})}export{G as default};