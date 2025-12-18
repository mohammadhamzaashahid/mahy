import Image from "next/image";

export default function StickyMediaPane({ image }) {
    return (
        <div className="hidden lg:block sticky top-0 h-screen overflow-hidden pointer-events-none">
            <Image
                src={image}
                alt="Enterprise Visual"
                fill
                priority
                className="object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black/30" />
        </div>
    );
}


//   className="
//         hidden
//         lg:block
//         relative
//         h-screen
//         top-0
//         overflow-hidden
//         pointer-events-none
//       "