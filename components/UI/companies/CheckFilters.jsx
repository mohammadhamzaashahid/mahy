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
            <p className="font-medium text-sm mb-4 pb-3 border-b border-gray-200">{label}</p>
            <div className="flex flex-col space-y-3">
                {list.map((item, index) => (
                    <div key={item} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id={item}
                            name={searchKey}
                            value={index}
                            checked={searchValues.includes(index.toString())}
                            onChange={() => handleClick(index.toString())}
                            className="cursor-pointer a-base"
                        />
                        <label
                            htmlFor={item}
                            className={`text-sm cursor-pointer text-gray-600 t-base-hover
                                ${searchValues.includes(index.toString())
                                && "t-base font-medium "}
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