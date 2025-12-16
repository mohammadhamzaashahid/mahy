import { usePathname, useRouter } from "next/navigation";

function ResetButton({ handleShowFilters }) {

    const router = useRouter();
    const pathname = usePathname();

    const handleReset = () => {
        router.replace(`${pathname}#list`);
        handleShowFilters();
    }

    return (
        <button onClick={handleReset} className='text-gray-600 hover:text-gray-900 text-sm'>Reset</button>
    )
}

export default ResetButton