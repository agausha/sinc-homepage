import Image from "next/image";

interface IncubationModelCardProps {
  image: any;
  content: string;
}

function IncubationModelCard({ image, content }: IncubationModelCardProps) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex flex-col rounded-xl h-full bg-white shadow-sm p-6">
        <div className="mb-4">
          <Image
            src={image}
            alt="Model Logos"
            width={40}
            height={37}
            className="object-contain"
          />
        </div>
        <p className="text-base font-normal text-[#4E4E4E] leading-6">
          {content}
        </p>
      </div>
    </div>
  );
}

export default IncubationModelCard;
