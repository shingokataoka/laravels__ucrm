import { Link } from '@inertiajs/react';

import { css } from '@emotion/react';
import { defaultTheme } from './defaultThemeProvider';

/** @jsxImportSource @emotion/react */
export default function NavLink({ active = false, className = '', children, ...props }) {
    const palette = defaultTheme().palette
    // アクティブ
    //      テキスト白色
            // border info.main
    //     hoverとfocusで border info.dark
    // Noあくてぃぶ
    //     テキスト灰色
    //     hoverとfocusで border灰色
    const activeCss = css`
        color: ${ palette.text.primary };
        border-bottom: 2px ${ palette.primary.main } solid;
        &:hover{ border-bottom: 2px ${ palette.primary.dark } solid; }
        &:focus{ border-bottom: 2px ${ palette.primary.dark } solid; }
    `
    const noActiveCss = css`
        color: ${palette.text.disabled};
        &:hover{
            color: ${palette.text.primary};
            border-bottom: 2px ${palette.bg.color5} solid;
        }
        &:focus{
            color: ${palette.text.primary};
            border-bottom: 2px ${palette.bg.color5} solid;
        }
    `
    const cssStyle = css`
        ${ active? activeCss : noActiveCss }
    `
    // ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 '
    // : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ') +

    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +

                    className
            }
            css={cssStyle}
        >
            {children}
        </Link>
    );
}
