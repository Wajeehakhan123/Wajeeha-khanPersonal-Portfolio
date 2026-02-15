
import React from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon, PaperAirplaneIcon, CheckCircleIcon } from './icons';

const ContactInfoCard: React.FC<{ icon: React.ReactNode; title: string; value: string; href?: string }> = ({ icon, title, value, href }) => (
    <a href={href || '#'} className="flex items-center gap-4 bg-card dark:bg-[#121212] p-4 rounded-lg border border-border dark:border-[#27272a] hover:border-accent transition-colors">
        <div className="flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
            {icon}
        </div>
        <div>
            <p className="text-secondary dark:text-[#a1a1aa] font-medium">{title}</p>
            <h4 className="text-md font-bold text-primary dark:text-[#ffffff]">{value}</h4>
        </div>
    </a>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <p className="text-accent font-semibold mb-2 text-sm">CONTACT ME</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-[#ffffff] mb-4">
                Get In <span className="text-accent">Touch</span>
            </h2>
            <p className="text-lg text-secondary dark:text-[#a1a1aa] mt-2 max-w-2xl mx-auto">Have a project in mind or want to collaborate? Feel free to reach out. I'm always excited to work on new and challenging projects.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-primary dark:text-[#ffffff] mb-4">Let's Work Together</h3>
                <p className="text-secondary dark:text-[#a1a1aa] mb-8">
                    Whether you need a stunning website, a mobile app, eye-catching graphics, or SEO-optimized content, I'm here to help bring your vision to life. Let's create something amazing together!
                </p>
                <div className="space-y-4 mb-8">
                    <ContactInfoCard icon={<MailIcon className="w-6 h-6" />} title="Email" value="wajeehakhan851@gmail.com" href="mailto:wajeehakhan851@gmail.com" />
                    <ContactInfoCard icon={<PhoneIcon className="w-6 h-6" />} title="Phone" value="+92 317 0332374" href="tel:+923170332374" />
                    <ContactInfoCard icon={<LocationMarkerIcon className="w-6 h-6" />} title="Location" value=" Hyderabad, Sindh, Pakistan" />
                </div>
                 <div className="bg-card dark:bg-[#121212] p-4 rounded-lg flex items-center gap-4 border border-border dark:border-[#27272a]">
                    <CheckCircleIcon className="w-6 h-6 text-accent flex-shrink-0" />
                    <p className="text-secondary dark:text-[#a1a1aa] font-medium">Currently available for freelance projects</p>
                </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-3">
                 <form className="space-y-6 p-8 bg-card dark:bg-[#121212] rounded-lg shadow-lg border border-border dark:border-[#27272a]">
                    <h3 className="text-2xl font-bold text-primary dark:text-[#ffffff] mb-4">Send Me a Message</h3>
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-secondary dark:text-[#a1a1aa]">Your Name</label>
                      <input id="name" type="text" placeholder="John Doe" required className="mt-1 w-full bg-background dark:bg-[#0a0a0a] text-primary dark:text-[#ffffff] px-4 py-3 rounded-lg border border-border dark:border-[#27272a] focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
                    </div>
                     <div>
                      <label htmlFor="email" className="text-sm font-medium text-secondary dark:text-[#a1a1aa]">Your Email</label>
                      <input id="email" type="email" placeholder="john@example.com" required className="mt-1 w-full bg-background dark:bg-[#0a0a0a] text-primary dark:text-[#ffffff] px-4 py-3 rounded-lg border border-border dark:border-[#27272a] focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-secondary dark:text-[#a1a1aa]">Your Message</label>
                      <textarea id="message" placeholder="Tell me about your project..." rows={5} required className="mt-1 w-full bg-background dark:bg-[#0a0a0a] text-primary dark:text-[#ffffff] px-4 py-3 rounded-lg border border-border dark:border-[#27272a] focus:outline-none focus:ring-2 focus:ring-accent transition-all"></textarea>
                    </div>
                    <div className="text-right">
                      <button
                        type="submit"
                        className="group flex items-center justify-center gap-2 bg-accent text-white dark:text-primary font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 ml-auto"
                      >
                        Send Message <PaperAirplaneIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;