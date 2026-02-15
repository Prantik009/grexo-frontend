// app/(app)/home/page.tsx
import { CategorySection } from "@/app/(public)/_components/Category";
import { FeaturedProducts } from "@/app/(public)/_components/FeaturedProducts";

export default function HomePage(){
    return(
        <>
            <CategorySection />
            <FeaturedProducts />
            <FeaturedProducts />
        </>
    )
}