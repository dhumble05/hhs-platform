
import Header from "../components/Header";
import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import PlatformPreview from "../components/PlatformPreview";
import StandardsEvidence from "@/components/StandardsEvidence";
import DragDropSurveyReady from "../components/DragDropSurveyReady";
import ExecutiveCommandCenter from "@/components/ExecutiveCommandCenter";
import Pricing from "@/components/Pricing";
export default function Home() {
	return (
		<>
			<Header />
			<Hero />
      <DragDropSurveyReady />
			<DashboardPreview />
      <PlatformPreview />
      <StandardsEvidence />
      <ExecutiveCommandCenter />
      <Pricing />
		</>
	);
}