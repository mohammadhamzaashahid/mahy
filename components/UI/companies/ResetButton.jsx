import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";
import { FaRedo } from "react-icons/fa";

function ResetButton() {

    const hasSearchParams = () => {
        const searchParams = useSearchParams();
        return searchParams.toString().length > 0;
    };

    const router = useRouter();
    const pathname = usePathname();

    const handleReset = () => {
        router.replace(`${pathname}#list`);
    }

    return hasSearchParams() ? (
        <button onClick={handleReset} className="text-gray-800 text-sm flex items-center gap-2">
            <FaRedo size={13} stroke="gray" />
            <p className="border-b border-gray-800">Clear Filters</p>
        </button>
    ) : null;
}

export default ResetButton