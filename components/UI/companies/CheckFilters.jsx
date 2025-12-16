import { useRouter, usePathname, useSearchParams } from "next/navigation";

function CheckFilters({ searchKey, label, list }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const searchValues =
        searchParams.get(searchKey)?.split(",") || [];

    const handleClick = (searchValue) => {
        const values = new Set(searchValues);

        values.has(searchValue)
            ? values.delete(searchValue)
            : values.add(searchValue);

        const params = new URLSearchParams(searchParams.toString());

        values.size
            ? params.set(searchKey, [...values].join(","))
            : params.delete(searchKey);

        router.replace(`${pathname}?${params.toString()}`, {
            scroll: false,
        });
    };

    return (
        <div className="mb-6">
            <p className="text-gray-600 font-medium mb-4 pb-2 border-b border-gray-300">{label}</p>
            <div className="flex flex-col space-y-3">
                {list.map((item, index) => (
                    <div key={item} className="flex items-center gap-1">
                        <input
                            type="checkbox"
                            id={item}
                            name={searchKey}
                            value={index}
                            checked={searchValues.includes(index.toString())}
                            onChange={() => handleClick(index.toString())}
                            className="cursor-pointer accent-teal-600"
                        />
                        <label
                            htmlFor={item}
                            className={`cursor-pointer hover:text-teal-700
                                ${searchValues.includes(index.toString())
                                && "text-teal-600 font-medium "}
                            `}
                        >
                            {item}
                        </label>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default CheckFilters