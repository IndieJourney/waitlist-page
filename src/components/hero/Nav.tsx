import Image from "next/image"

export default function Nav(){
    return (
        <nav className="w-full h-16 flex flex-col justify-center">
            <div className="w-11/12 mx-auto h-auto flex flex-row justify-between items-center">
                <div className="flex flex-row">
                    <div className='relative h-7 w-7 mr-3'>
                        <Image
                        src="/images/logo.png"
                        alt="The Logo"
                        fill
                        />
                    </div>
                    <h1 className="text-xl font-extrabold">Indie Journey</h1>
                </div>
                <div className="bg-[#F7F7F7] px-4 py-2 rounded-full flex flex-row items-center space-x-3">
                    <div className="relative flex h-3 w-3 -mt-[0.1px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2CE03E] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2CE03E]"></span>
                    </div>
                    <h1 className="text-[#7A899C] font-bold">
                        Development
                    </h1>
                </div>
            </div>
        </nav>
    )
}