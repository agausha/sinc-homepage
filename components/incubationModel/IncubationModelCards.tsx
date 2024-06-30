import IncubationModelCard from "./IncubationModelCard";

function IncubationModelCards() {
  const models = [
    {
      image: "/images/most.png",
      content:
        "Most early-stage companies and pre-product startups cannot   afford professional services especially those who don’t have family and friends’ network that can support",
    },
    {
      image: "/images/startups.png",
      content:
        "If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment",
    },
    {
      image: "/images/young.png",
      content:
        "Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
      {models.map((item, index) => {
        return (
          <IncubationModelCard
            key={index}
            image={item.image}
            content={item.content}
          />
        );
      })}
    </div>
  );
}

export default IncubationModelCards;
