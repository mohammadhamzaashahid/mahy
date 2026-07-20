import Image from "next/image"
import { Image as ImageIcon } from "lucide-react"
import SlideReveal from "./UI/SlideReveal"

function ImagePlaceholder() {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-gray-50 to-gray-100 border border-dashed border-gray-300">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm">
                <ImageIcon size={24} strokeWidth={1.5} className="t-base" />
            </div>
            <span className="text-xs font-medium uppercase tracking-widest text-gray-400">Image</span>
        </div>
    )
}

function ImageBlock({ src, alt }) {
    return (
        <div className="relative h-80 md:h-full min-h-[280px] w-full overflow-hidden">
            {src ? (
                <Image src={src} alt={alt || "img"} fill style={{ objectFit: "cover" }} />
            ) : (
                <ImagePlaceholder />
            )}
        </div>
    )
}

function TextBlock({ title, texts, placeholder, mainTitle }) {
    const hasContent = title || (texts && texts.length > 0)
    return (
        <div>
            {mainTitle && (
                <h1 className="font-semibold text-2xl md:text-2xl leading-tight t-base mb-5">{mainTitle}</h1>
            )}
            {title && (
                <h2 className="font-semibold text-4xl md:text-5xl leading-tight t-base mb-5 italic">{title}</h2>
            )}
            {texts && texts.map((text, i) => (
                <p key={i} className="font-light text-gray-600 leading-relaxed mb-4 last:mb-0">
                    {text}
                </p>
            ))}
            {!hasContent && (
                <p className="font-light text-gray-300 leading-relaxed italic">
                    {placeholder || "Content will appear here."}
                </p>
            )}
        </div>
    )
}

function CompaniesSectorsGrid({ title, texts, image, imageAlt, image2, image2Alt, texts2, mainTitle }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-14">
            <SlideReveal direction="left">
                <TextBlock title={title} texts={texts} mainTitle={mainTitle} />
            </SlideReveal>

            <SlideReveal direction="right">
                <ImageBlock src={image} alt={imageAlt || title} />
            </SlideReveal>

            <SlideReveal direction="left">
                <ImageBlock src={image2} alt={image2Alt || title} />
            </SlideReveal>

            <SlideReveal direction="right">
                <TextBlock texts={texts2} />
            </SlideReveal>
        </div>
    )
}

export default CompaniesSectorsGrid
