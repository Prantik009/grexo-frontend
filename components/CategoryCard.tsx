// components/category/CategoryCard.tsx
import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  imageUrl: string
  pageRoute: string
  title: string
}

export function CategoryCard({
  imageUrl,
  pageRoute,
  title,
}: CategoryCardProps) {
  return (
    <Link
      href={pageRoute}
      className="group flex flex-col items-center snap-start"
    >
      {/* Image container */}
      <div
        className="
          relative flex items-center justify-center
          rounded-full
          bg-secondary
          ring-1 ring-border
          transition-all duration-300 ease-out
          group-hover:scale-[1.06]
          group-hover:shadow-md
        "
        style={{
          width: "clamp(88px, 12vw, 144px)",
          height: "clamp(88px, 12vw, 144px)",
        }}
      >
       {imageUrl ?  <Image
          src={imageUrl}
          alt={title}
          width={96}
          height={96}
          className="
            object-contain
            transition-transform duration-300
            group-hover:scale-105
          "
        /> : <><h3 className=" p-1">{title}</h3></>}
      </div>

      {/* Title */}
      <p className="mt-3 text-center text-xs font-medium text-foreground md:text-sm hover:text-primary">
        {title}
      </p>
    </Link>
  )
}
