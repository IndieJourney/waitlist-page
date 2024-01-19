import Image from "next/image"

export default function Heatmap(){
    return (
        <div className="absolute top-32 lg:left-0 md:-left-10 -left-14 -rotate-12">
            <Image
                src="/images/heatmap.png"
                alt="The Logo"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto lg:w-[260px] md:w-[210px] sm:w-[180px] w-[150px]"
            />
        </div>
    )
}