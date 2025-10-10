"use client";

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {

    const { ref } = useSectionInView("Projects", 0.5);

  return (
    <div>
      <section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
        <SectionHeading>My projects</SectionHeading>

        <div className='grid md:grid-cols-2 gap-4'>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index} >
                        <Project {...project} />
                    </React.Fragment>
                    
                ))
            }
        </div>
      </section>
    </div>
  )
}
