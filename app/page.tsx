import HeroPage from "@/components/hero/HeroPage";
import Quote from "@/components/quote/Quote";
import Networking from "@/components/networking/Networking";
import AreaOfFocus from "@/components/areaoffocus/AreaOfFocus";
import ConceptInnovation from "@/components/conceptInnovation/ConceptInnovation";
import IncubationModel from "@/components/incubationModel/IncubationModel";
import Portfolio from "@/components/portfolio/Portfolio";
import CoFoundWithUs from "@/components/coFoundWithUs/CoFoundWithUs";
import EIRProgram from "@/components/EIRprogram/EIRProgram";
import InvestorsNetwork from "@/components/investorsNetwork/InvestorsNetwork";
import EquityJobs from "@/components/equityJobs/EquityJobs";

export default function Home() {
  return (
    <main className="">
      <HeroPage />
      <Quote />
      <Networking />
      <AreaOfFocus />
      <ConceptInnovation />
      <IncubationModel />
      <Portfolio />
      <CoFoundWithUs />
      <EIRProgram />
      <InvestorsNetwork />
      <EquityJobs />
    </main>
  );
}
