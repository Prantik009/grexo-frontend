// app/_components/unpacking/JourneyScene.tsx
import Image from "next/image";

interface JourneySceneProps {
  title: string;
  description: string;
  image: string;
}

export const JourneyScene = ({
  title,
  description,
  image,
}: JourneySceneProps) => {
  return (
    <div className="flex flex-col items-center text-center min-w-[80vw] md:min-w-[40vw]">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="mb-6 object-cover h-80 w-150 rounded-t-3xl"
      />

      <h3 className="text-2xl font-semibold text-primary">{title}</h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
};
