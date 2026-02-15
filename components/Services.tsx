
import React from 'react';
import { services } from '../constants';
import type { Service } from '../constants';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-card dark:bg-[#121212] p-8 rounded-xl shadow-lg border border-border dark:border-[#27272a] flex flex-col h-full hover:border-accent dark:hover:border-accent transition-all duration-300">
    <div className="flex items-center gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 bg-background dark:bg-[#0a0a0a] border border-border dark:border-[#27272a] rounded-lg flex items-center justify-center">
            {service.icon}
        </div>
        <h3 className="text-xl font-bold text-primary dark:text-[#ffffff]">{service.title}</h3>
    </div>
    <p className="text-secondary dark:text-[#a1a1aa] mb-6 flex-grow">{service.description}</p>
    <div className="flex flex-wrap gap-2">
        {service.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-medium text-secondary dark:text-[#a1a1aa] bg-background dark:bg-[#0a0a0a] rounded-full border border-border dark:border-[#27272a]">{tag}</span>
        ))}
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-card dark:bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <p className="text-accent font-semibold mb-2 text-sm">MY SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-[#ffffff]">Services I Am <span className="text-accent">Providing</span></h2>
            <p className="text-lg text-secondary dark:text-[#a1a1aa] mt-4 max-w-3xl mx-auto">Offering a comprehensive range of digital services to bring your ideas to life and grow your online presence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {services.slice(3).map((service) => (
                <ServiceCard key={service.title} service={service} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;