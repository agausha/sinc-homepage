import Card from "./Card";

function Cards() {
  const areaOfFocus = [
    {
      number: "01",
      content: "Business Support & Incubation",
      bgColor: "bg-[#303030]",
    },
    {
      number: "02",
      content: "On-Demand & As-A-Service",
      bgColor: "bg-[#f47733]",
    },
    {
      number: "03",
      content: "Marketplace & Crowdsourcing",
      bgColor: "bg-[#FF78BF]",
    },
    {
      number: "04",
      content: "Aggregation & Shared Economy",
      bgColor: "bg-[#20888F]",
    },
    {
      number: "05",
      content: "Decentralized Economy & Digital Assets",
      bgColor: "bg-[#FF88C6]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 py-8">
      {areaOfFocus.map((item, index) => {
        return (
          <Card
            key={index}
            number={item.number}
            content={item.content}
            bgColor={item.bgColor}
          />
        );
      })}
    </div>
  );
}

export default Cards;
