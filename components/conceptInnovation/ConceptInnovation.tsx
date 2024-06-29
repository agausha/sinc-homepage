import React from "react";

function ConceptInnovation() {
  return (
    <div className="bg-[#F9F9F9] py-12 px-4">
      <div className="text-center">
        <h2 className="font-medium text-5xl text-[#212121]">
          Our Concept Innovations
        </h2>
        <p className="font-normal text-base text-[#4E4E4E] max-w-[970px] mx-auto mt-6">
          We have proprietary concept innovations that will support the startup
          ecosystem, support solution-providers/entrepreneurs and ultimately
          help democratize success.
        </p>
        <div className="flex justify-center mt-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-lg bg-white w-full md:w-[352px] h-[230px]">
              <h3 className="text-2xl text-[#212121] mb-5 font-medium text-center">
                Service Incubator
              </h3>
              <p className="text-[#4E4E4E] font-normal text-base text-center py-3">
                A service-for-shares model of incubating pre-product startups
                and early-stage companies by building their early stage product
                and MVP
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white w-full md:w-[352px] h-[230px]">
              <h3 className="text-2xl text-[#212121] font-medium mb-5  text-center">
                Virtualting
              </h3>
              <p className="text-[#4E4E4E] font-normal text-base text-center py-3">
                A resource share model that allows companies share the time of
                resources (employees, consultants, technical advisers or
                influencers) while also splitting the service cost of the
                resource
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white w-full md:w-[352px] h-[230px]">
              <h3 className="text-2xl text-[#212121] font-medium mb-5 text-center">
                Diiming
              </h3>
              <p className="text-[#4E4E4E] font-normal text-base text-center py-3">
                A progressive investment model that allows you to put aside
                income (disposable or non-disposable) as investment over a
                period towards an investment or spend of your choice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConceptInnovation;
