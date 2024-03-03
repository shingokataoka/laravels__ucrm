import{j as b,a as e}from"./emotion-react-jsx-runtime.browser.esm-282f9dc3.js";import{A as k}from"./AuthenticatedLayout-68b72068.js";import{g as N,q as F,r as w,b as A,c as P,a as R}from"./app-05e31e95.js";import{d as $,c as x}from"./DefaultThemeProvider-60793f61.js";import{e as l}from"./emotionCss-ede0ef7a.js";import{T as i,F as j,a as D}from"./TextField-48441db3.js";import{R as E,F as f,a as C}from"./RadioGroup-2e49942c.js";import{L as S}from"./LoadingButton-2d899ee9.js";import"./ApplicationLogo-b0999648.js";import"./transition-c4df1b13.js";import"./ButtonBase-4b7997c0.js";import"./useControlled-0ab8a7c5.js";import"./Typography-e3e33fd5.js";import"./styled-0a882231.js";import"./Button-78efd340.js";var T=1;function y(u){var t=[];for(var r in u)t.push(encodeURIComponent(r)+"="+encodeURIComponent(u[r]));return t.join("&")}var L=function(t){return new Promise(function(r,p){var o=document.createElement("script"),n=t.url;if(t.params){var h=y(t.params);h&&(n+=(n.indexOf("?")>=0?"&":"?")+h)}o.async=!0;function s(){o&&(o.onload=o.onreadystatechange=o.onerror=null,o.parentNode&&o.parentNode.removeChild(o),o=null)}var c="axiosJsonpCallback"+T++,v=window[c],g=!1;window[c]=function(d){if(window[c]=v,!g){var m={data:d,status:200};r(m)}};var a={_:new Date().getTime()};a[t.callbackParamName||"callback"]=c,n+=(n.indexOf("?")>=0?"&":"?")+y(a),o.onload=o.onreadystatechange=function(){(!o.readyState||/loaded|complete/.test(o.readyState))&&s()},o.onerror=function(){s(),p(new Error("Network Error"))},t.cancelToken&&t.cancelToken.promise.then(function(d){o&&(g=!0,p(d))}),o.src=n,document.head.appendChild(o)})};const z=N(L);function Y({auth:u}){const t=$().palette,r=F().props.errors,[p,o]=w.useState(!1),[n,h]=w.useState({name:"",kana:"",tel:"",email:"",postcode:"",address:"",birthday:"",gender:"",memo:""});x`
        width:100%;
        input {
            border-radius: 5px;
            background: ${t.bg.color1};
            transition: background 0.25s;
            &:focus,
            &:hover {
                background: ${t.bg.color2};
            }
        }
    `,x`
        width: 100%;
        background: ${t.bg.color1};
        div {padding: 0;}
        textarea {
            padding: 16.5px;
            margin-right: 2px;
            border-radius: 5px;
            transition: background 0.25s;
            &:focus,
            &:hover {
                background: ${t.bg.color2};
            }
        }
    `;const s=({name:a,value:d})=>{h(m=>({...m,[a]:d}))},c=a=>{s(a.target),a.target.focus(),a.target.blur()},v=async({name:a,value:d})=>{s({name:a,value:d});const m=await A(`https://api.zipaddress.net/?zipcode=${d}`,{adapter:z});m.data.fullAddress!==void 0&&s({name:"address",value:m.data.fullAddress})},g=a=>{o(!0),P.post(route("customers.store"),n,{onError:d=>{o(!1)}})};return b(k,{user:u.user,header:e("h2",{className:"font-semibold text-xl leading-tight",children:"顧客登録"}),children:[e(R,{title:"顧客登録"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"overflow-hidden shadow-sm sm:rounded-lg",css:x`background:${t.bg.color1};`,children:e("div",{className:"p-6 text-gray-900",children:b("form",{className:"w-[600px] mx-auto flex flex-col",children:[e(i,{label:"顧客名",name:"name",value:n.name,css:l(t).textField,onChange:a=>s(a.target)}),r.name&&e("div",{className:"text-red-500",children:r.name}),e(i,{label:"顧客名カナ",name:"kana",value:n.kana,css:l(t).textField,onChange:a=>s(a.target)}),r.kana&&e("div",{className:"text-red-500",children:r.kana}),e(i,{label:"電話番号",name:"tel",type:"number",value:n.tel,css:l(t).textField,onChange:a=>s(a.target)}),r.tel&&e("div",{className:"text-red-500",children:r.tel}),e(i,{label:"メールアドレス",name:"email",type:"email",value:n.email,css:l(t).textField,onChange:a=>s(a.target)}),r.email&&e("div",{className:"text-red-500",children:r.email}),e(i,{label:"郵便番号",name:"postcode",type:"number",value:n.postcode,css:l(t).textField,onChange:a=>v(a.target)}),r.postcode&&e("div",{className:"text-red-500",children:r.postcode}),e(i,{label:"住所",name:"address",value:n.address,css:l(t).textField,onChange:a=>s(a.target)}),r.address&&e("div",{className:"text-red-500",children:r.address}),e(i,{label:"誕生日",name:"birthday",type:"date",required:!0,value:n.birthday,css:l(t).textFieldDate,onChange:a=>c(a)}),r.birthday&&e("div",{className:"text-red-500",children:r.birthday}),b(j,{css:l(t).formControl,children:[e(D,{id:"demo-row-radio-buttons-group-label",children:"性別"}),b(E,{onChange:a=>s(a.target),row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"gender",value:n.gender,css:x`color:${t.text.primary};`,children:[e(f,{value:"0",control:e(C,{}),label:"男性"}),e(f,{value:"1",control:e(C,{}),label:"女性"}),e(f,{value:"2",control:e(C,{}),label:"その他"})]})]}),r.gender&&e("div",{className:"text-red-500",children:r.gender}),e(i,{label:"メモ",name:"memo",value:n.memo,multiline:!0,minRows:2,maxRows:4,inputProps:{},css:l(t).textFieldMulti,onChange:a=>s(a.target)}),r.memo&&e("div",{className:"text-red-500",children:r.memo}),e(S,{type:"button",variant:"contained",sx:{margin:"16px auto",fontSize:"16px"},onClick:a=>g(),loading:p,children:"顧客登録"})]})})})})})]})}export{Y as default};