"use client";

import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Tools from "@/components/tools/tools";
import Contact from "@/components/contact/contact";
import { RefObject, useRef } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import About from "../../components/about/about";

export default function Home() {


  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Tools  />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
