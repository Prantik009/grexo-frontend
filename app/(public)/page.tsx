import { HowItWorks } from "../../components/how-it-works/HowItWorks";
import { CategorySection } from "./_components/Category";
import { FeaturedProducts } from "./_components/FeaturedProducts";
import { HeroSection } from "./_components/HeroSection";


export default function PublicPage() {
  return (
    <>
     <CategorySection/>
     <HeroSection />
     <FeaturedProducts />
     <HowItWorks />
    </>
  );
}
