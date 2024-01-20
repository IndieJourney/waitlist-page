import Image from "next/image"

export default function MyFoundingPartner(){
    return (
        <div className="filter drop-shadow-md backdrop-blur-2 translate-y-1 rounded-xl border border-[#F0F0F0] w-full bg-white p-7 relative">
            <div className="flex flex-row space-x-2">
                <h1 className="font-bold text-lg">My founding partner's said</h1>
                <div className='relative h-7 w-7'>
                    <Image
                    src="/images/fire_3d.png"
                    alt="The Logo"
                    fill
                    />
                </div>
            </div>
            <p className="text-[#76777B] pt-3">I simply want a dedicated place where I can share my progress and devlogs on the project I do, and connect with like-minded people. Excited to try our product myself.</p>
        </div>
    )
}