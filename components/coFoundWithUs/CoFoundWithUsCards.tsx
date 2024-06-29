import CoFoundWithUsCard from "./CoFoundWithUsCard";

function CoFoundWithUsCards() {
  const areaOfFocus = [
    {
      number: "1",
      title: "We Ideate",
      content:
        "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.",
      bgColor: "bg-[#303030]",
    },
    {
      number: "2",
      title: "You Validate",
      content:
        "You join our 3 months inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions",
      bgColor: "bg-[#f47733]",
    },
    {
      number: "3",
      title: "You Co-own",
      content:
        "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.",
      bgColor: "bg-[#FF78BF]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-8">
      {areaOfFocus.map((item, index) => {
        return (
          <CoFoundWithUsCard
            key={index}
            number={item.number}
            title={item.title}
            content={item.content}
            bgColor={item.bgColor}
          />
        );
      })}
    </div>
  );
}

export default CoFoundWithUsCards;
