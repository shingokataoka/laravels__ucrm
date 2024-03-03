import{j as s,a as e}from"./emotion-react-jsx-runtime.browser.esm-282f9dc3.js";import{A as c}from"./AuthenticatedLayout-68b72068.js";import{W as p,d as u,a as x}from"./app-05e31e95.js";import{d as b,c as n}from"./DefaultThemeProvider-60793f61.js";import{e as a}from"./emotionCss-ede0ef7a.js";import{T as r}from"./TextField-48441db3.js";import{B as h}from"./Button-78efd340.js";import{L as g}from"./LoadingButton-2d899ee9.js";import"./ApplicationLogo-b0999648.js";import"./transition-c4df1b13.js";import"./ButtonBase-4b7997c0.js";import"./useControlled-0ab8a7c5.js";function B({auth:l,item:o}){const t=b().palette,i=p();n`
         *{
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
        }
        fieldset {border: 1px ${t.bg.color5} solid !important;}
    `;const d=m=>{m.preventDefault(),i.delete(route("items.destroy",o.id))};return s(c,{user:l.user,header:e("h2",{className:"font-semibold text-xl leading-tight",children:"商品詳細"}),children:[e(x,{title:"商品詳細"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"overflow-hidden shadow-sm sm:rounded-lg",css:n`background:${t.bg.color1};`,children:e("div",{className:"p-6 text-gray-900",children:s("form",{onSubmit:d,className:"w-[600px] mx-auto flex flex-col gap-y-[16px]",children:[e(r,{inputProps:{readOnly:!0},label:"商品名",name:"name",value:o.name,sx:{width:"100%",background:t.bg.color2},css:a(t).textFieldDisabled}),e(r,{inputProps:{readOnly:!0},label:"メモ",name:"memo",multiline:!0,minRows:2,maxRows:4,value:o.memo,sx:{width:"100%",background:t.bg.color2,textarea:{"&:focus":{boxShadow:"none"}}},css:a(t).textFieldDisabled}),e(r,{inputProps:{readOnly:!0},type:"number",label:"商品価格",name:"price",value:o.price,sx:{width:"100%",background:t.bg.color2},css:a(t).textFieldDisabled}),e(r,{inputProps:{readOnly:!0},type:"text",label:"ステータス",name:"is_selling",value:o.is_selling?"販売中":"停止中",sx:{width:"100%",background:t.bg.color2},css:a(t).textFieldDisabled}),e(u,{href:route("items.edit",{id:o.id}),style:{margin:"16px auto"},children:e(h,{type:"submit",variant:"contained",sx:{fontSize:"16px"},children:"編集する"})}),e(g,{loading:i.processing,type:"submit",variant:"contained",color:"warning",sx:{margin:"64px auto",fontSize:"16px"},children:"削除する"})]})})})})})]})}export{B as default};