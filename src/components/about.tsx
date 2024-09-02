"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-semibold">Full-stack Developer</span> passionate 
        about web development and UX/UI. As a <span className="font-semibold">self-taught</span> professional, 
        I stay constantly informed of new trends and train myself in the latest technologies to deliver 
        exceptional user experiences. I am <span className="font-semibold">motivated</span> to gain new experiences. 
        My <span className="font-semibold">creative</span> approach and <span className="font-semibold">attention to detail</span> 
        are reflected in my work. I am <span className="font-semibold">confident</span> that my skills and 
        passion will make a positive contribution.{" "}
      </p>
    </motion.section>
  );
}
