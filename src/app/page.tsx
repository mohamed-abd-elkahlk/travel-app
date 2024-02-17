import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      // TODO: add some server actions
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
