import Cli from "@/components/hero/Cli";
import SectionContent from "@/components/hero/Content";
import Heatmap from "@/components/hero/Heatmap";
import Nav from "@/components/hero/Nav";
import Victor from "@/components/hero/Victor";
import Z from "@/components/hero/Z";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col relative">
      <Nav />
      <SectionContent />
      <Cli />
      <Heatmap />
      <Z />
      <Victor />
    </main>
  )
}
