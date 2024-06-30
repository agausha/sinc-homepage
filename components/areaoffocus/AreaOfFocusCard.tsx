interface CardProps {
  number: any;
  content: string;
  bgColor: string;
}

function AreaOfFocusCard({ number, content, bgColor }: CardProps) {
  return (
    <div className="text-white text-start">
      <div className="flex w-full h-full">
        <div
          className={`shadow-sm p-8 flex flex-col items-start justify-between ${bgColor}`}
          style={{ width: "100%", height: "100%" }}
        >
          <h3 className="text-xl font-normal leading-7">{number}</h3>
          <p className="text-base font-normal mt-4 leading-6">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default AreaOfFocusCard;
