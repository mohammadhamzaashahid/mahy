import CustomerRegistration from '@/components/UI/form/CustomerRegistration'
import React from 'react'

export const metadata = {
    robots: { index: false, follow: false },
};

function CustomerRegistrationPage() {
    return (
        <main>
            <CustomerRegistration />
        </main>
    )
}

export default CustomerRegistrationPage