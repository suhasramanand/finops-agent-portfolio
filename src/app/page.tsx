import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Demo } from "@/components/Demo";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <HowItWorks />
        <Demo />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}
