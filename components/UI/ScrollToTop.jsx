import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";

function ScrollToTop({ href, children, className, ariaLabel, onClick }) {
    const router = useRouter();

    const buildUrl = () => {
        if (href !== "/contact-us/vendor-registration" && href !== "/contact-us/customer-registration") return href;
        const cookie = Cookies.get("mahy_company");
        if (!cookie) return href;

        try {
            const company = JSON.parse(cookie);
            const url = new URL(href, window.location.origin);
            if (company?.id) url.searchParams.set("company", company.id);
            return url.pathname + url.search;
        } catch {
            return href;
        }
    };

    const scrollToTop = (event) => {
        if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.altKey ||
            event.ctrlKey ||
            event.shiftKey
        ) {
            return;
        }

        event.preventDefault();
        if (onClick) onClick();

        const finalUrl = buildUrl();

        router.push(finalUrl, { scroll: false });
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        });
    };

    return (
        <Link href={href} className={className} onClick={scrollToTop} aria-label={ariaLabel}>
            {children}
        </Link>
    );
}

export default ScrollToTop;
