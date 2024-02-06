import Image from "next/image"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Footer(){
    return (
        <div className="bg-[#0C0D0E] py-9 w-full">
            <div className="w-11/12 mx-auto h-auto">

                {/* Upper Section of Footer */}
                <div className="md:flex md:flex-row justify-between">

                    {/* Logo and About */}
                    <div>
                        {/* Logo and Name */}
                        <div className="flex flex-row">
                            <div className='relative h-7 w-7 mr-3'>
                                <Image
                                src="/images/logo.png"
                                alt="The Logo"
                                fill
                                />
                            </div>
                            <h1 className="text-xl text-[#C8CCD0] font-extrabold">Indie Journey</h1>
                        </div>
                        
                        {/* About */}
                        <p className="text-[#B1B1B1] w-80 mt-5">Free and open-source devlogging tool for indie developers, crafting by indie developers at heart.</p>
                    </div>

                    {/* Grid Section */}
                    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-14 gap-9 md:mt-0 mt-9">

                        {/* Grid 1 */}
                        <div>
                            <h3 className="text-[#C8CCD0] font-bold">Tools</h3>
                            <div className="md:mt-5 mt-3 text-[#B1B1B1] space-y-3 list-none">
                                <li>
                                    <Link href={"/"}>CLI</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Web App</Link>
                                </li>
                            </div>
                        </div>

                        {/* Grid 2 */}
                        <div>
                            <h3 className="text-[#C8CCD0] font-bold">Team</h3>
                            <div className="md:mt-5 mt-3 text-[#B1B1B1] space-y-3 list-none">
                                <li>
                                    <Link href={"https://twitter.com/_omegaphoton"} target="_blank">@_omegaphoton</Link>
                                </li>
                                {/* <li>
                                    <Link href={"https://twitter.com/victorevolves"} target="_blank">@victorevolves</Link>
                                </li> */}
                            </div>
                        </div>

                        {/* Grid 3 */}
                        <div>
                            <h3 className="text-[#C8CCD0] font-bold">Connect</h3>
                            <div className="md:mt-5 mt-3 text-[#B1B1B1] space-y-3 list-none">
                                <li>
                                    <Link href={"https://discord.gg/VvY5ZACJN3"} target="_blank" className="flex items-center space-x-3"><span>Discord</span> <FaExternalLinkAlt size={13}/></Link>
                                </li>
                                <li>
                                    <Link href={"https://twitter.com/_omegaphoton"} target="_blank" className="flex items-center space-x-3"><span>Twitter</span> <FaExternalLinkAlt size={13}/></Link>
                                </li>
                                <li>
                                    <Link href={"https://github.com/IndieJourney"} target="_blank" className="flex items-center space-x-3"><span>Github</span> <FaExternalLinkAlt size={13}/></Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lower Section of Footer */}
                <h1 className="text-[#C8CCD0] font-bold mt-14">Made with love in Myanmar.</h1>
            </div>
        </div>
    )
}