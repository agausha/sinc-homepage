import Image from "next/image";

interface IncubationModelCardProps {
  image: any;
  title: string;
  content: string;
}

function HowItWorksCard({ image, title, content }: IncubationModelCardProps) {
  return (
    <div className="w-full max-w-sm mx-auto text-start">
      <div className="flex flex-col rounded-xl h-full bg-white shadow-sm p-6">
        <div className="mb-4">
          <Image
            src={image}
            alt="Model Logos"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <h2 className="text-xl font-medium text-[#212121] leading-7 mb-3">
          {title}
        </h2>
        <p className="text-base font-normal text-[#4E4E4E] leading-6">
          {content}
        </p>
      </div>
    </div>
  );
}

export default HowItWorksCard;
