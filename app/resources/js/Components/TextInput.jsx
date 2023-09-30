import { forwardRef, useEffect, useRef } from 'react';

import { defaultTheme } from './DefaultThemeProvider';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const palette = defaultTheme().palette
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            style={{ background: palette.bg.color2 }}
            ref={input}
        />
    );
});
