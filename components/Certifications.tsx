import React from 'react';
import { certifications } from '../constants';
import type { Certification } from '../constants';
import { AwardIcon, CalendarIcon } from './icons';

const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => (
  <div className="bg-card dark:bg-[#121212] p-6 rounded-xl shadow-lg border border-border dark:border-[#27272a] flex items-center gap-6 hover:border-accent dark:hover:border-accent transition-all duration-300">
    
    <div className="flex-shrink-0">
      <div className="w-16 h-16 bg-background dark:bg-[#0a0a0a] rounded-lg flex items-center justify-center border border-border dark:border-[#27272a]">
        <AwardIcon className="w-8 h-8 text-accent" />
      </div>
    </div>

    <div>
      <h3 className="text-lg font-bold text-primary dark:text-[#ffffff]">
        {cert.title}
      </h3>

      {/* Issuer name - NOT clickable */}
      <p className="text-accent font-semibold">
        {cert.issuer}
      </p>

      <div className="flex items-center gap-2 mt-2 text-sm text-secondary dark:text-[#a1a1aa]">
        <CalendarIcon className="w-4 h-4" />
        <span>{cert.date}</span>
      </div>
    </div>
  </div>
);

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2 text-sm">
            PROFESSIONAL DEVELOPMENT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-[#ffffff]">
            My <span className="text-accent">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} cert={cert} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
