// app/(public)/page.tsx
import { UnpackingJourney } from "@/components/unpacking/UnpackingJourney";
import { HowItWorks } from "../../components/how-it-works/HowItWorks";
import { CategorySection } from "./_components/Category";
import { FeaturedProducts } from "./_components/FeaturedProducts";
import { HeroSection } from "./_components/HeroSection";
import { Services } from "./_components/Service";
import { Stats } from "./_components/Stats";

export default function PublicPage() {
  return (
    <>
      <CategorySection />
      <HeroSection />
      <Services />
      <FeaturedProducts />
      <HowItWorks />
      <UnpackingJourney />
      <Stats />
    </>
  );
}
