import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { defaultTheme } from '@/Components/defaultThemeProvider';
import { css } from '@emotion/react';

/** @jsxImportSource @emotion/react */
export default function Dashboard({ auth }) {
    const palette = defaultTheme().palette
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg" css={css`background:${palette.bg.color1};`}>
                        <div className="p-6">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
