import { css } from '@mui/material';
import { DefaultThemeProvider, defaultTheme } from '@/Components/DefaultThemeProvider';

import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Flash from '@/Components/Flash';


/** @jsxImportSource @emotion/react */
export default function Authenticated({ user, header, children }) {
    const palette = defaultTheme().palette
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (<DefaultThemeProvider>

        <Flash />

        <div className="min-h-screen ">
            <nav className="border-b border-gray-100" css={css`background:${ palette.bg.color1 }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    サイト説明
                                </NavLink>
                                <NavLink href={route('purchases.create')} active={route().current('purchases.create')}>
                                    購入画面
                                </NavLink>
                                <NavLink href={route('purchases.index')} active={route().current('purchases.index')}>
                                    購買履歴
                                </NavLink>
                                <NavLink href={route('items.index')} active={route().current('items.index')}>
                                    商品管理
                                </NavLink>
                                <NavLink href={route('customers.index')} active={route().current('customers.index')}>
                                    顧客管理
                                </NavLink>
                                <NavLink href={route('analysis')} active={route().current('analysis')}>
                                    データ分析
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md  hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                css={css`
                                                    background: ${ palette.bg.color2 }; &:hover{ color:${palette.text.disabled} }
                                                `}
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        {/* <Dropdown.Link href={route('profile.edit')}>{ __('Profile') }</Dropdown.Link> */}
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                        { __('Log Out') }
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                css={css`
                                    color: ${palette.text.disabled};
                                    &:hover{background:${palette.bg.color2}; }
                                    &:focus{background:${palette.bg.color2}; }
                                `}
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                        サイト説明
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('purchases.create')} active={route().current('purchases.create')}>
                            購入画面
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('purchases.index')} active={route().current('purchases.index')}>
                            購買履歴
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('items.index')} active={route().current('items.index')}>
                            商品管理
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('customers.index')} active={route().current('customers.index')}>
                            顧客管理
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('analysis')} active={route().current('analysis')}>
                            データ分析
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800" css={css`color:${palette.text.primary};`}>{user.name}</div>
                            <div className="font-medium text-sm text-gray-500" css={css`color:${palette.text.secondary};`}>{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            {/* <ResponsiveNavLink href={route('profile.edit')}>{ __('Profile') }</ResponsiveNavLink> */}
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            { __('Log Out') }
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className=" shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main css={css`background:${ palette.background.default };`}>{children}</main>
        </div>
    </DefaultThemeProvider>);
}
