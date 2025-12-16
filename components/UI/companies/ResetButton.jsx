import { usePathname, useRouter } from "next/navigation";

function ResetButton({ setShowFilters }) {

    const router = useRouter();
    const pathname = usePathname();

    const handleReset = () => {
        router.replace(`${pathname}#list`);
        setShowFilters(false);
    }

    return (
        <button onClick={handleReset} className='text-gray-600 hover:text-gray-900 text-sm'>Reset</button>
    )
}

export default ResetButton