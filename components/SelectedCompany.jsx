import Link from "next/link";
import { useState } from "react";
import Cookies from "js-cookie";

const EMPTY_COMPANY = { id: "", name: "", image: "" };

function getSelectedCompanyFromCookie() {
    const cookie = Cookies.get("mahy_company");
    if (!cookie) return EMPTY_COMPANY;

    try {
        return JSON.parse(cookie) || EMPTY_COMPANY;
    } catch {
        return EMPTY_COMPANY;
    }
}

function SelectedCompany({ currentPage }) {
    const [selectedCompany] = useState(getSelectedCompanyFromCookie);

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-w-md mb-4">
            <p className="text-sm text-gray-500 uppercase tracking-wide">
                Selected Company
            </p>
            <p className="mt-2 text-xl font-semibold text-gray-900">
                {selectedCompany.name}
            </p>
            <Link
                href={`/portal/company-select?redirect=/contact-us/${currentPage}`}
                className="inline-block mt-3 text-sm font-medium text-white b-base px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
                Change Selected Company
            </Link>
        </div>
    );
}

export default SelectedCompany
