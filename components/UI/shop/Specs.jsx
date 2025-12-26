import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Link from 'next/link';

const tabs = ["Specs", "Support"]

const specs = [
    { title: "Convert", text: "Combo CCS1 DC to NACS vehicle port" },
    { title: "Charging Compatibility", text: "Level 3 DC fast chargers only" },
    { title: "Max Current", text: "500A" },
    { title: "Max Voltage", text: "1000V" },
    { title: "Compatibility", text: "CCS DC chargers" }
];

const support = [
    { title: "Supporting Documents", text: "User Guide", link: "/" },
    { title: "Warranty", text: "2 Years", link: "/" }
];

function Specs() {
    return (
        <TabGroup className={"mt-15 w-full px-5 lg:px-0"}>
            <TabList className={"grid grid-cols-2"}>
                {tabs.map((tab, i) => (
                    <Tab key={i}
                        className={"rounded-t-xl border-b-2 py-3 border-gray-200 data-selected:border-gray-900 data-hover:bg-gray-100 data-selected:bg-white transition-all duration-300"}>
                        {tab}
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                <TabPanel className={"grid md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20"}>
                    {specs.map((spec, i) => (
                        <div key={i}>
                            <p className='font-semibold text-xl tracking-tight'>{spec.title}</p>
                            <p className='text-gray-500 mt-2'>{spec.text}</p>
                        </div>
                    ))}
                </TabPanel>
                <TabPanel className={"grid md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20"}>
                    {support.map((s, i) => (
                        <div key={i}>
                            <p className='font-semibold text-xl tracking-tight mb-2'>{s.title}</p>
                            <Link href={s.link} className='text-gray-500 border-b'>{s.text}</Link>
                        </div>
                    ))}
                </TabPanel>
            </TabPanels>
        </TabGroup>
    )
}

export default Specs