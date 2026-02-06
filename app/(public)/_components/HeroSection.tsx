"use client"

import Image from "next/image"
import Link from "next/link"

import { HERO_SLIDES } from "../_data/hero"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="relative">
            <Carousel
                opts={{
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {HERO_SLIDES.map((slide) => (
                        <CarouselItem key={slide.id}>
                            <div
                                className="
                                mx-auto grid max-w-7xl
                                grid-cols-1 gap-6
                                px-4 py-10
                                md:grid-cols-2 md:gap-10 md:px-6
                                "
                                style={{
                                    minHeight: "clamp(420px, 60vh, 520px)",
                                }}
                            >
                                {/* Text content */}
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-4 max-w-md text-muted-foreground">
                                        {slide.subtitle}
                                    </p>

                                    <div className="mt-6">
                                        <Button asChild size="lg">
                                            <Link href={slide.ctaLink}>
                                                {slide.ctaText}
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative flex items-center justify-center">
                                    <div
                                        className="
                                            relative w-full overflow-hidden
                                            rounded-xl bg-secondary
                                            "
                                        style={{
                                            height: "clamp(220px, 40vh, 360px)",
                                        }}
                                    >
                                        <Image
                                            src={slide.imageUrl}
                                            alt={slide.title}
                                            fill
                                            priority
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Controls (desktop only) */}
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </section>
    )
}
