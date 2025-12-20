import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    const store = await cookies();

    let locale;
    try {
        locale = store.get('locale')?.value || 'en';
    } catch (e) {
        locale = 'en'
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});