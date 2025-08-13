"use client";

import { useEffect, useState } from "react";
import { Command, CornerDownLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import { GridPattern } from "../grid-pattern";
import HeroWorkflowProvider from "../hero-workflow";

function Hero() {
  return (
    <section>
      <div className="animation-container relative z-20 space-y-4 px-4 text-center">
        <h1 className="animation-container animate-fade-up font-semibold text-[42px] leading-[1.10] opacity-0 will-change-[opacity,transform] [animation-delay:200ms] md:text-[68px]">
          Build / Deploy
          <br />
          Agent Workflows by Gandharv Garg
        </h1>

        <p className="animation-container mx-auto max-w-3xl animate-fade-up font-normal text-base text-neutral-400/80 leading-[1.5] tracking-normal opacity-0 will-change-[opacity,transform] [animation-delay:400ms] md:text-xl">
          Launch agentic workflows with an open source, <br />
          user-friendly environment for devs and agents
        </p>
      </div>
    </section>
  );
}

export default Hero;
