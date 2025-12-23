import { cookies } from 'next/headers';

const getLocale = async () => {
    const cookieStore = await cookies()
    const locale = cookieStore.get("locale")?.value || "en";
    return locale;
}

export { getLocale }