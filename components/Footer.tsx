
import React from 'react';
import { LinkedInIcon, GithubIcon, InstagramIcon, MailIcon, BehanceIcon, BloggerIcon } from './icons';

const SocialIcon: React.FC<{href: string; children: React.ReactNode}> = ({href, children}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-card dark:bg-[#121212] rounded-full text-secondary dark:text-[#a1a1aa] border border-border dark:border-[#27272a] hover:text-accent hover:border-accent transition-all duration-300">
        {children}
    </a>
)

const Footer: React.FC = () => {
  return (
    <footer className="bg-card dark:bg-[#121212] border-t border-border dark:border-[#27272a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Column 1: Bio */}
                <div>
                    <h3 className="text-3xl font-bold text-primary dark:text-[#ffffff] mb-4">
                        Wajeeha
                    </h3>
                    <p className="text-secondary dark:text-[#a1a1aa] max-w-sm mx-auto md:mx-0 mb-6">
                        A passionate Frontend Web Developer, Mobile App Developer, Graphic Designer, Content Writer, and SEO Specialist creating impactful digital experiences.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-3">
                         <SocialIcon href="https://www.linkedin.com/in/wajeeha-khan-381019330">
                            <LinkedInIcon className="h-5 w-5" />
                        </SocialIcon>
                        <SocialIcon href="https://github.com/Wajeehakhan123">
                            <GithubIcon className="h-5 w-5" />
                        </SocialIcon>
                        <SocialIcon href="https://www.behance.net/wajeehakhan15">
                            <BehanceIcon className="h-5 w-5" />
                        </SocialIcon>
                         <SocialIcon href="https://www.instagram.com/wk_brandworks?igsh=YXZhdGF3eTVhemg1">
                            <InstagramIcon className="h-5 w-5" />
                        </SocialIcon>
                        <SocialIcon href="https://share.google/3T7dayhEuc3D18t0O">
                            <BloggerIcon className="h-5 w-5" />
                        </SocialIcon>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="md:justify-self-center">
                    <h4 className="text-lg font-semibold text-primary dark:text-[#ffffff] mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#about" className="text-secondary dark:text-[#a1a1aa] hover:text-accent">About</a></li>
                        <li><a href="#services" className="text-secondary dark:text-[#a1a1aa] hover:text-accent">Services</a></li>
                         <li><a href="#experience" className="text-secondary dark:text-[#a1a1aa] hover:text-accent">My Journey</a></li>
                        <li><a href="#portfolio" className="text-secondary dark:text-[#a1a1aa] hover:text-accent">Projects</a></li>
                        <li><a href="#certifications" className="text-secondary dark:text-[#a1a1aa] hover:text-accent">Certifications</a></li>
                        <li><a href="#blog" className="text-secondary dark:text-[#a1a1aa] hover:text-accent">Blog</a></li>
                        <li><a href="#contact" className="text-secondary dark:text-[#a1a1aa] hover:text-accent">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div className="md:justify-self-end">
                    <h4 className="text-lg font-semibold text-primary dark:text-[#ffffff] mb-4">Contact</h4>
                    <ul className="space-y-2 text-secondary dark:text-[#a1a1aa]">
                        <li><a href="mailto:wajeehakhan851@gmail.com" className="hover:text-accent">wajeehakhan851@gmail.com</a></li>
                        <li><a href="tel:+923170332374" className="hover:text-accent">+92 317 0332374</a></li>
                        <li>Hyderabad, Sindh, Pakistan</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bg-background dark:bg-[#0a0a0a] py-4 border-t border-border dark:border-[#27272a]">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-secondary dark:text-[#a1a1aa]">
                <p>&copy; Wajeeha Khan. All Rights Reserved</p>
             </div>
        </div>
    </footer>
  );
};

export default Footer;