import Image from "next/image"

export default function Cli(){
    return(
        <div className="absolute top-11 lg:-right-28 md:-right-36 -right-36 -rotate-12">
            <Image
                src="/images/cli.png"
                alt="The Logo"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto lg:w-[420px] md:w-[350px] sm:w-[270px] w-[250px] rounded-full"
            />
        </div>
    )
}