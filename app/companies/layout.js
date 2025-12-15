import Navbar from "@/components/Layout/Navbar";

export default function CompaniesLayout({ children }) {
    return (
        <>

            <Navbar />
            <main className="bg-[#f5ecd7]">
                {children}
            </main>
        </>
    );
}