import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

import { defaultTheme, DefaultThemeProvider } from '@/Components/DefaultThemeProvider';

export default function Guest({ children }) {
    const palette = defaultTheme().palette
    return (<DefaultThemeProvider>
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0" style={{ background: palette }}>
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-auto h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 shadow-md overflow-hidden sm:rounded-lg" style={{ background: palette.bg.color1 }}>
                {children}
            </div>
        </div>
    </DefaultThemeProvider>);
}
