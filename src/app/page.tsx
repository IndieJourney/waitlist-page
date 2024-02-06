import Footer from "@/components/footer/Footer";
import Cli from "@/components/hero/Cli";
import SectionContent from "@/components/hero/Content";
import Heatmap from "@/components/hero/Heatmap";
import Nav from "@/components/hero/Nav";
import Victor from "@/components/hero/Victor";
import Z from "@/components/hero/Z";
import MyFriendSaid from "@/components/story/MyFriendSaid";
import NotNewSocial from "@/components/story/NotNewSocial";
import StoryContainer from "@/components/story/StoryContainer";
import TheStory from "@/components/story/TheStory";
import WeUse from "@/components/story/WeUse";
import WhatItIs from "@/components/story/WhatIsIt";
import { Toaster } from 'react-hot-toast';

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
      <section className="w-full h-full">
        <StoryContainer>
          <TheStory />
          <NotNewSocial />
          <WhatItIs />
          <WeUse />
          <MyFriendSaid />
        </StoryContainer>
        <div className="pt-20"></div>
        <Footer />
      </section>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </main>
  )
}
