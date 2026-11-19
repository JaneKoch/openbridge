import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { MissionStats } from "@/components/marketing/mission-stats";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Features } from "@/components/marketing/features";
import { SampleStory } from "@/components/marketing/sample-story";
import { TeacherCta } from "@/components/marketing/teacher-cta";
import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";

export const metadata: Metadata = {
  title: "A free AI reading tutor for every child",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MissionStats />
      <HowItWorks />
      <Features />
      <SampleStory />
      <TeacherCta />
      <Faq />
      <FinalCta />
    </div>
  );
}
