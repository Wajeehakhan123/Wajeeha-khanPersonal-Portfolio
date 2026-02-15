
import React from 'react';
import { skills } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-card dark:bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2 text-sm">MY CAPABILITIES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-[#ffffff]">
            My Technical <span className="text-accent">Skills</span>
          </h2>
        </div>
        <div className="space-y-12">
          {skills.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold text-primary dark:text-[#ffffff] mb-6 text-center md:text-left">{category.category}</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-background dark:bg-[#0a0a0a] border border-border dark:border-[#27272a] rounded-lg px-5 py-3 text-lg font-medium text-secondary dark:text-[#a1a1aa] hover:border-accent hover:text-accent dark:hover:text-accent transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
