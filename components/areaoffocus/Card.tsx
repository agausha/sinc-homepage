interface CardProps {
  number: any;
  content: string;
  bgColor: string;
}

function Card({ number, content, bgColor }: CardProps) {
  return (
    <div className="p-4 text-white text-start">
      <div className="flex w-[240px] h-[160px]">
        <div
          className={`shadow-sm p-8 flex flex-col items-start justify-between ${bgColor}`}
        >
          <h3 className="text-xl font-normal leading-7">{number}</h3>
          <p className="text-base font-normal mt-4 leading-6">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
