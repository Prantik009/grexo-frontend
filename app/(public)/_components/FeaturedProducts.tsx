import { ProductCard } from "@/components/ProductCard"

export function FeaturedProducts() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12">
            <h2 className="mb-6 text-xl font-semibold md:text-2xl">
                Featured Plants
            </h2>

            <div
                className="
          grid gap-4
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
            >
                {/* Dummy cards */}
                <ProductCard
                    slug="areca-palm"
                    title="Areca Palm Plant"
                    imageUrl="/products/areca.png"
                    price={499}
                    mrp={699}
                    rating={4.1}
                    ratingCount={120}
                    badge="bestseller"
                    tags={["Air Purifier", "Pet Friendly"]}
                />

                <ProductCard
                    slug="areca-palm"
                    title="Areca Palm Plant"
                    imageUrl="/products/areca.png"
                    price={499}
                    mrp={699}
                    rating={4.1}
                    ratingCount={120}
                    badge="sale"
                    tags={["Air Purifier", "Pet Friendly"]}
                />

                <ProductCard
                    slug="areca-palm"
                    title="Areca Palm Plant"
                    imageUrl="/products/areca.png"
                    price={499}
                    mrp={699}
                    rating={4.1}
                    ratingCount={120}
                    badge="new"
                    tags={["Air Purifier", "Pet Friendly"]}
                />

                <ProductCard
                    slug="areca-palm"
                    title="Areca Palm Plant"
                    imageUrl="/products/areca.png"
                    price={499}
                    mrp={699}
                    rating={4.1}
                    ratingCount={120}
                    badge="bestseller"
                    tags={["Air Purifier", "Pet Friendly"]}
                />
            </div>
        </section>
    )
}
