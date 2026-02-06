"use client"

import { CategoryCard } from "../../../components/CategoryCard"
import { CATEGORIES } from "../_data/categories"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      {/* Section heading */}
      {/* <h2 className="mb-6 text-xl font-semibold md:text-2xl">
        Popular Categories
      </h2> */}

      {/* Mobile: Carousel */}
      <div className="md:hidden">
        <Carousel opts={{ align: "start" }}>
          <CarouselContent className="-ml-4">
            {CATEGORIES.map((category) => (
              <CarouselItem
                key={category.title}
                className="basis-[30%] pl-4 sm:basis-[30%]"
              >
                <CategoryCard {...category} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Tablet & Desktop Grid */}
      <div
        className="
          hidden md:grid
          grid-cols-4 gap-y-8 gap-x-6
          lg:grid-cols-8
        "
      >
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  )
}
