
import React, { useState, useEffect, useRef } from 'react';
import { SunIcon, MoonIcon } from './icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const observer = useRef<IntersectionObserver | null>(null);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'My Journey' },
    { href: '#portfolio', label: 'Projects' },
    { href: '#mobile-showcase', label: 'Showcase' },
    { href: '#certifications', label: 'Certifications'},
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    const options = { root: null, rootMargin: '0px', threshold: 0.4 };
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    document.querySelectorAll('section[id]').forEach(section => {
      observer.current?.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.current?.disconnect();
    };
  }, []);
  
  const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void; isMobile?: boolean }> = ({ href, children, onClick, isMobile = false }) => {
    const isActive = activeSection === href.substring(1);
    const classes = isMobile 
      ? `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-accent' : 'text-primary dark:text-[#ffffff] hover:text-accent'}`
      : `px-3 py-2 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-accent' : 'text-primary dark:text-[#ffffff] hover:text-accent'}`;
    
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 dark:bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-border dark:border-[#27272a]' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-2xl font-bold text-primary dark:text-[#ffffff]">
              Wajeeha
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-card dark:hover:bg-[#121212]">
              {theme === 'dark' ? <SunIcon className="h-5 w-5 text-primary dark:text-[#ffffff]" /> : <MoonIcon className="h-5 w-5 text-primary" />}
            </button>
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
            ))}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary dark:text-[#a1a1aa] hover:text-primary dark:hover:text-[#ffffff] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card dark:bg-[#121212] shadow-lg">
            {navLinks.map((link) => (
               <NavLink key={link.href} href={link.href} onClick={() => setIsOpen(false)} isMobile>{link.label}</NavLink>
            ))}
             <div className="px-3 pt-4 pb-2">
                <button onClick={toggleTheme} className="w-full flex items-center justify-center p-2 rounded-md text-primary dark:text-[#ffffff] bg-background dark:bg-[#0a0a0a]">
                    {theme === 'dark' ? <SunIcon className="h-5 w-5 mr-2" /> : <MoonIcon className="h-5 w-5 mr-2" />}
                    Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
                </button>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;