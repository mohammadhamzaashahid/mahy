import FullScreenLoader from '@/components/FullScreenLoader'
import React from 'react'

export const metadata = {
    robots: { index: false, follow: false },
};

function LoaderPage() {
    return (
        <main>
            <FullScreenLoader />
        </main>
    )
}

export default LoaderPage