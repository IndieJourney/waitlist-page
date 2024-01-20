import Cli from "@/components/hero/Cli";
import SectionContent from "@/components/hero/Content";
import Heatmap from "@/components/hero/Heatmap";
import Nav from "@/components/hero/Nav";
import Victor from "@/components/hero/Victor";
import Z from "@/components/hero/Z";
import MyFoundingPartner from "@/components/story/FoundingPartner";
import NotNewSocial from "@/components/story/NotNewSocial";
import StoryContainer from "@/components/story/StoryContainer";
import TheStory from "@/components/story/TheStory";
import WeUse from "@/components/story/WeUse";
import WhatItIs from "@/components/story/WhatIsIt";

export default function Home() {
  return (
    <main>

      {/* HeroSection */}
      <section className="w-full min-h-screen flex flex-col relative">
        <Nav />
        <SectionContent />
        <Cli />
        <Heatmap />
        <Z />
        <Victor />
      </section>

      {/* Story Section */}
      <section className="w-full min-h-screen">
        <StoryContainer>
          <TheStory />
          <NotNewSocial />
          <WhatItIs />
          <WeUse />
          <MyFoundingPartner />
        </StoryContainer>
      </section>

    </main>
  )
}
