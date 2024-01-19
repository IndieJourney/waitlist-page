import Image from "next/image"

export default function Nav(){
    return (
        <nav className="w-full h-14 flex flex-col justify-center">
            <div className="w-11/12 mx-auto h-auto">
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
            </div>
        </nav>
    )
}