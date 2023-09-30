import { Link } from '@inertiajs/react';

import { css } from '@emotion/react';
import { defaultTheme } from './DefaultThemeProvider';

/** @jsxImportSource @emotion/react */
export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    const palette = defaultTheme().palette
    const activeCss = css`
        background: ${palette.bg.color2};
    `
    const noActiveCss = css`
        &:hover{
            border-color: ${palette.bg.color4};
        }
    `
    const cssStyle = css`
        ${active ? activeCss : noActiveCss}
        color: ${palette.text.secondary};
        &:hover {
            background: ${palette.bg.color3};
            color: ${palette.text.primary};
        }
    `
    return (
        <Link
            {...props}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? 'border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
            css={cssStyle}
        >
            {children}
        </Link>
    );
}
