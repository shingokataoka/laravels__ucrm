import { defaultTheme } from "./DefaultThemeProvider";

export default function InputLabel({ value, className = '', children, ...props }) {
    const palette = defaultTheme().palette
    return (
        <label {...props} className={`block font-medium text-sm text-gray-700 ` + className} style={{ color: palette.text.primary }}>
            {value ? value : children}
        </label>
    );
}
