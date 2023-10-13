import { css } from "@emotion/react"

export default function emotionCss(palette) {

    const textField = css`
        width:100%;
        margin-top: 32px;
        input {
            &:focus{
                background:${palette.bg.color2};
            }
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            border-radius: 3px;
            transition: all 0.25s;
        }
    `

    const textFieldMulti = css`
        width:100%;
        margin-top: 32px;
        > div{
            transition: background 0.25s;
            // 結果的に0pxでスクロールバーの右余白を消せる。
            padding-right: 8px;
            &:focus-within{
                background:${palette.bg.color2};
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
                background-color: ${palette.bg.color2};
                border-radius: 5px;
            }
            // スクロールバーの動く部分にCSSを指定できる。
            &::-webkit-scrollbar-thumb{
                background-color: ${palette.bg.color4};
                border-radius: 5px;
            }

        }
    `

    // type="date"のtextField用のcss。
    // このtextFieldを押すと、カレンダー選択になる（カレンダーアイコン最大表示にしているから）。
    // 入力値が空の時、inputのテキストカラーを透明（requiredを付ける必要あり）。
    // requiredを付けるとlabelに表示される「*」を消す。
    const textFieldDate = css`
        width: 100%;
        margin-top: 32px;
        // requiredを付けるとlabelに表示される「*」を非表示
        label span{ display: none; }
        input {
            // inputの値が正しくない時（requiredを付けて、空の時のcss）
            &:invalid {
                color: transparent;
            }
            // カレンダーアイコンのフォーカス時、inputの背景色を変更
            transition: background 0.25s;
            &:focus-within {
                background:${palette.bg.color2};
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
    `

    const textFieldDisabled = css`
        ${textField}
        label {color: ${palette.text.disabled} !important; }
        fieldset { border: 1px ${palette.bg.color3} solid !important; }
        background: ${palette.bg.color2};
    `

    // muiのラジオボタンやセレクトボックスの枠
    const formControl = css`
        width: 100%;
        margin-top: 32px;
        outline: none !important;
        border: 1px ${palette.bg.color4} solid !important;
        border-radius: 5px;
        background: ${palette.bg.color1};
        transition: background 0.25s;
        &:hover {
            outline: 1px ${palette.text.primary} solid;
            background: ${palette.bg.color2};
        }
        padding: 8px;
        color: ${palette.text.primary} !important;
    `

    return {
        textField,
        textFieldMulti,
        textFieldDate,
        textFieldDisabled,
        formControl,
    }
}
