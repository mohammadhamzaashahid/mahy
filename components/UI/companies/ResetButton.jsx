import { usePathname, useRouter } from "next/navigation";

function ResetButton() {

    const router = useRouter();
    const pathname = usePathname();

    const handleReset = () => {
        // add #list to the URL to jump to the list section
        router.replace(`${pathname}#list`);
    }

    return (
        <button onClick={handleReset} className='text-gray-600 hover:text-gray-900 text-sm'>Reset</button>
    )
}

export default ResetButton