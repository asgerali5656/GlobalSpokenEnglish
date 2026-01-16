import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RamzanBatch from "@/components/RamzanBatch";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import DailyWords from "@/components/DailyWords";
import DictionarySearch from "@/components/DictionarySearch";
import Quotes from "@/components/Quotes";
import YouTubeStats from "@/components/YouTubeStats";
import InquiryForm from "@/components/InquiryForm";
import AdmissionForm from "@/components/AdmissionForm";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <RamzanBatch />
      <Results />
      <Testimonials />
      <DailyWords />
      <DictionarySearch />
      <Quotes />
      <YouTubeStats />
      <InquiryForm />
      <AdmissionForm />
      <Branches />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
