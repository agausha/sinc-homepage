import HowItWorksCard from "./HowItWorksCard";

function HowItWorksCards() {
  const models = [
    {
      image: "/images/application.png",
      title: "Application and Selection",
      content:
        "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application",
    },
    {
      image: "/images/meeting.png",
      title: "Alignment Meeting and Proposal Submission",
      content:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies. Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.",
    },
    {
      image: "/images/negotiation.png",
      title: "Negotiation and Agreement",
      content:
        "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.",
    },
    {
      image: "/images/onboarding.png",
      title: "Onboarding and Integration",
      content:
        "Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members. Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {models.map((item, index) => {
        return (
          <HowItWorksCard
            key={index}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </div>
  );
}

export default HowItWorksCards;
