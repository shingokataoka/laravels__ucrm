import { useState } from "react";
import { defaultTheme } from "./defaultThemeProvider";

export default function Checkbox({ className = '', ...props }) {
    // const [isChecked, setIsChecked] = useState(props.remember)
    const palette = defaultTheme().palette

    const handleChange = () => setIsChecked(value => !value)
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 shadow-sm focus:ring-indigo-500 ' +
                className
            }
            style={{
                background: !props.checked && palette.bg.color3, // チェックなし時の色
                color:  palette.primary.main  // チェック時の背景色
             }}
        />
    );
}
