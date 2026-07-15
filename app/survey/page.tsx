import SurveyHero from "@/components/survey/SurveyHero";
import SurveyTrustBar from "@/components/survey/SurveyTrustBar";
import SurveyAIWorkflow from "@/components/survey/SurveyAIWorkflow";
import SurveyWorkflow from "@/components/survey/SurveyWorkflow";
import SurveyPromises from "@/components/survey/SurveyPromises";
import SurveyCallToAction from "@/components/survey/SurveyCallToAction";

// HHS Survey Page v1.0.1

export default function SurveyPage() {
  return (
    <main className="overflow-x-hidden bg-slate-950">
      <SurveyHero />
      <SurveyTrustBar />
      <SurveyAIWorkflow />
      <SurveyWorkflow />
      <SurveyPromises />
      <SurveyCallToAction />
    </main>
  );
}