import{c as r}from"./DefaultThemeProvider-6dfc8fb6.js";function b(o){const i=r`
        width:100%;
        margin-top: 32px;
        input {
            &:focus{
                background:${o.bg.color2};
            }
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            border-radius: 3px;
            transition: all 0.25s;
        }
    `,n=r`
        width:100%;
        margin-top: 32px;
        > div{
            transition: background 0.25s;
            // 結果的に0pxでスクロールバーの右余白を消せる。
            padding-right: 8px;
            &:focus-within{
                background:${o.bg.color2};
            }
        }
        textarea {
            box-shadow: none !important;
            // スクロールバー全体にCSSを指定できる。
            &::-webkit-scrollbar{
                width: 10px;
            }
            //  スクロールバーの動かない部分にCSSを指定できる。
            &::-webkit-scrollbar-track{
                // スクロールバーと枠divとの隙間を消せる。
                // margin: -16px 0;
                background-color: ${o.bg.color2};
                border-radius: 5px;
            }
            // スクロールバーの動く部分にCSSを指定できる。
            &::-webkit-scrollbar-thumb{
                background-color: ${o.bg.color4};
                border-radius: 5px;
            }

        }
    `,t=r`
        ${i}
        // requiredを付けるとlabelに表示される「*」を非表示
        label span{ display: none; }
        input {
            // inputの値が正しくない時（requiredを付けて、空の時のcss）
            &:invalid {
                color: transparent;
            }
            // input自体のフォーカス時（tabキーでフォーカスできる）に
            // 入力文字を見えるようにする
            &:focus { color: ${o.text.primary}; }
            // カレンダーアイコンのフォーカス時、inputの背景色を変更
            transition: background 0.25s;
            &:focus-within {
                background:${o.bg.color2};
            }
            // カレンダーアイコンを透明にして、縦横100%で埋める。
            // これでinputのどこをクリックしてもカレンダー選択になる。
            &::-webkit-calendar-picker-indicator{
                background:none;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: auto;
                height: auto;
            }
        }
    `,a=r`
        ${i}
        label {color: ${o.text.disabled} !important; }
        fieldset { border: 1px ${o.bg.color3} solid !important; }
        background: ${o.bg.color2};
    `,d=r`
        width: 100%;
        margin-top: 32px;
        outline: none !important;
        border: 1px ${o.bg.color4} solid !important;
        border-radius: 5px;
        background: ${o.bg.color1};
        transition: background 0.25s;
        &:hover {
            outline: 1px ${o.text.primary} solid;
            background: ${o.bg.color2};
        }
        padding: 8px;
        color: ${o.text.primary} !important;
    `;return{textField:i,textFieldMulti:n,textFieldDate:t,textFieldDisabled:a,formControl:d}}export{b as e};
