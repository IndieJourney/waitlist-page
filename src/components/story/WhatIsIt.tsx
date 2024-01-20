import Image from "next/image"

export default function WhatItIs(){
    return (
        <div className="w-full h-auto flex flex-row flex-wrap justify-between md:space-y-0 space-y-5">
            <WhatIsIt />
            <VisualExplaination />
        </div>
    )
}

function WhatIsIt(){
    return (
        <div className="h-auto w-72 filter drop-shadow-md backdrop-blur-2 translate-y-1 rounded-xl border border-[#F0F0F0] bg-white p-7 mx-auto">
            <div className="flex flex-row space-x-2">
                <h1 className="font-bold text-lg">Hi, here is the story!</h1>
                <div className='relative h-7 w-7'>
                    <Image
                    src="/images/thinking_face_3d.png"
                    alt="The Logo"
                    fill
                    />
                </div>
            </div>
            <p className="text-[#76777B] pt-3">It's just a CLI tool for creating your daily devlog, which can showcase your effort, enthusiasm, and progress for your project to the world in an organized manner.</p>
        </div>
    )
}

function VisualExplaination(){
    return (
        <div className="md:h-auto h-64 w-72 filter drop-shadow-md backdrop-blur-2 translate-y-1 rounded-xl border border-[#F0F0F0] bg-white p-7 mx-auto flex flex-col justify-between">
            
            <div className="flex flex-row items-center space-x-2">
                <div className='relative h-7 w-7'>
                    <Image
                    src="/images/terminal.svg"
                    alt="The Logo"
                    fill
                    />
                </div>
                <h1 className="font-bold text-base">From CLI</h1>
            </div>

            <div className="flex flex-row items-center space-x-2">
                <div className='relative h-7 w-7'>
                    <Image
                    src="/images/memo_3d.png"
                    alt="The Logo"
                    fill
                    />
                </div>
                <h1 className="font-bold text-base">Make Commitments</h1>
            </div>

            <div className="flex flex-row items-center space-x-2">
                <div className='relative h-7 w-7'>
                    <Image
                    src="/images/globe_showing_europe-africa_3d.png"
                    alt="The Logo"
                    fill
                    />
                </div>
                <h1 className="font-bold text-base">To Showcase</h1>
            </div>

            <div className="flex flex-row items-center space-x-2">
                <div className='relative h-7 w-7'>
                    <Image
                    src="/images/glowing_star_3d.png"
                    alt="The Logo"
                    fill
                    />
                </div>
                <h1 className="font-bold text-base">And Benefits</h1>
            </div>

        </div>
    )
}