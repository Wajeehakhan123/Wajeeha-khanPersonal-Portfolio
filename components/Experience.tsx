
import React from 'react';
import { workExperience, education } from '../constants';
import { BriefcaseIcon, AcademicCapIcon, MapPinIcon, LinkIcon } from './icons';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-card dark:bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Work Experience */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold mb-2 text-sm">MY JOURNEY</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-[#ffffff]">Work <span className="text-accent">Experience</span></h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border dark:bg-[#27272a]"></div>
            {workExperience.map((job, index) => (
              <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-card dark:bg-[#121212] border-2 border-accent rounded-full">
                  <BriefcaseIcon className="w-6 h-6 text-accent" />
                </div>
                <div className="w-5/12">
                  <div className={`bg-background dark:bg-[#0a0a0a] p-6 rounded-lg shadow-lg border border-border dark:border-[#27272a] ${index % 2 === 1 ? 'text-right' : ''}`}>
                    <div className={`text-xs font-semibold uppercase text-accent mb-1 ${index % 2 === 1 ? 'text-right' : 'text-left'}`}>{job.type}</div>
                    
                    <h3 className="text-xl font-bold text-primary dark:text-[#ffffff] mb-1">{job.role}</h3>
                    <p className="text-secondary dark:text-[#a1a1aa] mb-2 flex items-center gap-2" style={{justifyContent: index % 2 === 1 ? 'flex-end' : 'flex-start'}}><LinkIcon className="w-4 h-4" /> {job.company}</p>
                    <div className="flex items-center gap-4 text-sm text-secondary dark:text-[#a1a1aa] mb-3" style={{justifyContent: index % 2 === 1 ? 'flex-end' : 'flex-start'}}>
                      <span>{job.duration}</span>
                      <span className="flex items-center gap-1"><MapPinIcon className="w-4 h-4" /> {job.location}</span>
                      {job.remote && <span className="px-2 py-0.5 bg-border dark:bg-[#27272a] text-secondary dark:text-[#a1a1aa] text-xs rounded-full">Remote</span>}
                    </div>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                      {job.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium text-secondary dark:text-[#a1a1aa] bg-card dark:bg-[#121212] rounded-full border border-border dark:border-[#27272a]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="text-center mb-12">
            <p className="text-accent font-semibold mb-2 text-sm">ACADEMIC BACKGROUND</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-[#ffffff]">My <span className="text-accent">Education</span></h2>
          </div>
          <div className="relative">
             <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border dark:bg-[#27272a]"></div>
            {education.map((edu, index) => (
               <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                 <div className="w-5/12">
                    <div className={`bg-background dark:bg-[#0a0a0a] p-6 rounded-lg shadow-lg border border-border dark:border-[#27272a] ${index % 2 === 0 ? 'text-right' : ''}`}>
                        <h3 className="text-xl font-bold text-primary dark:text-[#ffffff] mb-1">{edu.degree}</h3>
                        <p className="text-secondary dark:text-[#a1a1aa] mb-2 flex items-center gap-2" style={{justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'}}><LinkIcon className="w-4 h-4" /> {edu.institution}</p>
                         <div className="flex items-center gap-4 text-sm text-secondary dark:text-[#a1a1aa] mb-3" style={{justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'}}>
                             <span>{edu.grade}</span>
                             <span className={`px-2 py-0.5 text-xs rounded-full ${edu.status === 'Current' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'}`}>{edu.status}</span>
                         </div>
                    </div>
                 </div>
                 <div className="z-10 flex items-center justify-center w-12 h-12 bg-card dark:bg-[#121212] border-2 border-accent rounded-full">
                    <AcademicCapIcon className="w-6 h-6 text-accent" />
                 </div>
                 <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;