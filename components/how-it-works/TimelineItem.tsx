// TimelineItem.tsx
import Image from "next/image"

interface TimelineItemProps {
    title: string
    description: string
    image: string
    reverse?: boolean
}

export const TimelineItem = ({
    title,
    description,
    image,
    reverse = false,
}: TimelineItemProps) => {
    return (
        <div
            className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Image */}
            <div className="w-full md:w-1/2">
                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-md object-cover"
                />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 bg-transparent rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-2">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}
