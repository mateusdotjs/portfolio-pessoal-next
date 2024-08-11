"use client";

import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Tools from "@/components/tools/tools";
import Contact from "@/components/contact";
import { RefObject, useRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const toolsRef = useRef(null);
  const contactRef = useRef(null);

  type elementReturn = RefObject<HTMLDivElement> | null;

  const getElementByRef = (elementId: string): elementReturn => {
    switch (elementId) {
      case "hero":
        return heroRef;

      case "projects":
        return projectsRef;

      case "tools":
        return toolsRef;

      case "contact":
        return contactRef;

      default:
        console.log("error");
        return null;
    }
  };

  const scrollToDiv = (elementId: string) => {
    const elementRef = getElementByRef(elementId);

    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <Header scrollToDiv={scrollToDiv} />
      <main>
        <Hero refer={heroRef} />
        <Projects refer={projectsRef} />
        <Tools refer={toolsRef} />
        <Contact refer={contactRef} />
      </main>
      <Footer />
    </>
  );
}
