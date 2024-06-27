interface CardProps {
  number: any;
  title: string;
  content: string;
  bgColor: string;
}

function InvestorsNetworkCard({ number, title, content, bgColor }: CardProps) {
  return (
    <div className="p-4 text-start">
      <div className="flex w-[380px] h-[296px] bg-white">
        <div className="shadow-sm p-8 flex flex-col items-start justify-between">
          <h2
            className={`text-xl text-white font-normal flex items-center justify-center rounded-full w-12 h-12 ${bgColor} leading-7`}
          >
            {number}
          </h2>
          <h3 className="text-xl font-normal leading-7">{title}</h3>
          <p className="text-base font-normal mt-4 leading-6">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default InvestorsNetworkCard;
