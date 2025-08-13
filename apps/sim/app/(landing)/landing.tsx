"use client";

import NavWrapper from "./components/nav-wrapper";
import Footer from "./components/sections/footer";
import Hero from "./components/sections/hero";
import Integrations from "./components/sections/integrations";
import Testimonials from "./components/sections/testimonials";

export default function Landing() {
  const handleOpenTypeformLink = () => {
    window.open("https://form.typeform.com/to/jqCO12pF", "_blank");
  };

  return (
    <main className="relative min-h-screen bg-[#0C0C0C] font-geist-sans">
      <h1 className="animation-container animate-fade-up font-semibold text-[42px] leading-[1.10] opacity-0 will-change-[opacity,transform] [animation-delay:200ms] md:text-[68px]">
        Build / Deploy
        <br />
        Agent Workflows by Gandharv Garg
      </h1>

      <p className="animation-container mx-auto max-w-3xl animate-fade-up font-normal text-base text-neutral-400/80 leading-[1.5] tracking-normal opacity-0 will-change-[opacity,transform] [animation-delay:400ms] md:text-xl">
        Launch agentic workflows with user-friendly environment for devs and
        agents
      </p>
      {/* <NavWrapper onOpenTypeformLink={handleOpenTypeformLink} /> */}

      {/* <Hero /> */}
      {/* <Testimonials /> */}
      {/* <Features /> */}
      {/* <Integrations /> */}
      {/* <Blogs /> */}

      {/* Footer */}
      {/* <Footer onOpenTypeformLink={handleOpenTypeformLink} /> */}
    </main>
  );
}
