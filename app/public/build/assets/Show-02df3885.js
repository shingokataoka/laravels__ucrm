import{a,j as s,F as x}from"./emotion-react-jsx-runtime.browser.esm-82d40a37.js";import{P as f,A as v}from"./AuthenticatedLayout-924b535f.js";import{r as T,a as C,c as P}from"./app-8d50cb58.js";import{d,c as l}from"./DefaultThemeProvider-0fd7a1ea.js";import{d as c}from"./dayjs.min-3666db3b.js";import{C as Y}from"./Container-d4780e8b.js";import{T as o}from"./TextField-f85dbad1.js";import{e as k,d as w,T as _,a as p,b as e,c as $}from"./TableRow-a2876801.js";import{L as y}from"./LoadingButton-6ca0e37c.js";import"./ApplicationLogo-ed67c61e.js";import"./transition-78265c55.js";import"./ButtonBase-45d064b0.js";import"./styled-06825ed8.js";import"./useControlled-3c235d74.js";import"./Button-6410230f.js";function I({auth:m,items:h,order:t}){const n=d().palette,u=d().breakpoints.values;T.useState(!1);const b=l`
        width:100%;
        margin-top: 32px;
        input {
            &:focus{
                background:${n.bg.color2};
            }
            border-radius: 3px;
            transition: all 0.25s;
        }
    `,r=l`
        ${b}
        fieldset {
            border: 1px ${n.bg.color3} solid!important;
        }
    `;return a(x,{children:s(v,{user:m.user,header:a("h2",{className:"font-semibold text-xl leading-tight",children:"購買履歴 詳細"}),children:[a(C,{title:"購買履歴 詳細"}),a("div",{className:"py-12",children:a("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:a("div",{className:"overflow-hidden shadow-sm sm:rounded-lg",css:l`background:${n.bg.color1};`,children:a("div",{className:"p-6",children:s(Y,{css:l`width:${u.sm}px;`,children:[a(o,{inputProps:{disabled:!0},css:r,label:"日付",value:c(t.created_at).format("YYYY-MM-DD")}),a(o,{inputProps:{disabled:!0},css:r,label:"会員名",value:`${t.customer_name}（${t.customer_kana}）`}),a(k,{component:f,css:l`margin: 48px 0;`,children:s(w,{children:[a(_,{children:s(p,{children:[a(e,{children:"id"}),a(e,{children:"商品名"}),a(e,{align:"right",children:"金額"}),a(e,{align:"right",children:"数量"}),a(e,{align:"right",children:"小計"})]})}),a($,{children:h.map((i,g)=>s(p,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[a(e,{component:"th",scope:"row",children:i.item_id}),a(e,{children:i.item_name}),s(e,{align:"right",children:[(i.item_price-0).toLocaleString()," 円"]}),s(e,{align:"right",children:[i.quantity," 個"]}),s(e,{align:"right",children:[(i.subtotal-0).toLocaleString()," 円"]})]},g))})]})}),a(o,{inputProps:{disabled:!0},css:r,label:"合計金額",value:(t.total-0).toLocaleString()+" 円"}),a(o,{inputProps:{disabled:!0},css:r,label:"ステータス",value:t.status===1?"購入":t.status===0&&"キャンセル済"}),a(o,{inputProps:{disabled:!0},css:r,label:"キャンセル日",value:t.status===0?c(t.updated_at).format("YYYY-MM-DD"):"　"}),t.status===1&&a(y,{variant:"contained",color:"secondary",css:l`
                                        display:block;
                                        margin:32px auto;
                                    `,onClick:i=>P.get(route("purchases.edit",{id:t.id})),children:"編集する"})]})})})})})]})})}export{I as default};
