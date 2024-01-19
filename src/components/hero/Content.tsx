export default function SectionContent(){
    return (
        <div className="md:w-[590px] sm:w-[450px] w-full relative mx-auto flex-1">
            <div className="absolute w-full top-[23%]">
                <h1 className="font-bold lg:text-3xl sm:text-2xl text-xl text-center lg:w-[520px] sm:w-[390px] w-[320px] mx-auto">Start your indie journey, and make your own history</h1>
                <div className="sm:w-96 w-8/12 mx-auto mt-10 border border-[#D0D7DE] h-11 rounded-xl flex flex-col justify-center">
                    <div className="flex flex-row h-auto w-[97%] mx-auto">
                        <input type="email" id="email" className="focus:outline-none h-full w-full placeholder-[#76777B] font-semibold px-2" placeholder="Enter your email"/>
                        <button className="bg-[#6867F9] h-8 w-52 rounded-lg text-white">Join waitlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}