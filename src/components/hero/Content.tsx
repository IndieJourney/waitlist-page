import EmailSubmit from "./EmailSubmit";

export default function SectionContent(){
    return (
        <div className="md:w-[590px] sm:w-[450px] w-full relative mx-auto flex-1 z-50">
            <div className="absolute w-full top-[30%]">
                <h1 className="font-bold lg:text-3xl sm:text-2xl text-xl text-center lg:w-[520px] sm:w-[390px] w-[320px] mx-auto">Start your indie journey, and make your own history</h1>
                <EmailSubmit />
            </div>
        </div>
    )
}