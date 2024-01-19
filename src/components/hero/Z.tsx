import Image from "next/image"

export default function Z() {
    return (
        <div className="absolute bottom-0 md:left-10 left-0  rotate-12">
            <Image
                src="/images/z.svg"
                alt="The Logo"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto lg:w-[400px] md:w-[330px] sm:w-[290px] w-[250px]"
            />
        </div>
    )
}