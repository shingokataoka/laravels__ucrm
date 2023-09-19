
import { css } from "@emotion/react"

const textFieldDate = css`
    input {
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


const Css = {
    textFieldDate,
}
export default Css
