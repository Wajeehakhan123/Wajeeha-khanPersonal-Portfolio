import React, { useState, useMemo } from 'react';
import type { PortfolioItem } from '../constants';
import { portfolioItems as allPortfolioItems } from '../constants';

const categories = ['All', 'Web Application', 'Graphic Designing', 'Brand Identity'];

/* ================= IMAGE MODAL ================= */
const ImageModal: React.FC<{ image: string; onClose: () => void }> = ({ image, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
    onClick={onClose}
  >
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <img
        src={image}
        alt="Portfolio Preview"
        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
      />
      <button
        className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full text-lg"
        onClick={onClose}
      >
        ×
      </button>
    </div>
  </div>
);

/* ================= CARD ================= */
const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const [iframeOpen, setIframeOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);

  const handleClick = () => {
    if (item.link && item.link !== '#') {
      setIframeOpen(true); // Web App
    } else {
      setImageOpen(true); // Graphic / Brand
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="bg-card dark:bg-[#121212] rounded-xl shadow-lg overflow-hidden group border border-border dark:border-[#27272a] cursor-pointer"
      >
        <div className="relative h-64 bg-background dark:bg-[#0a0a0a] border-b border-border dark:border-[#27272a]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-accent text-sm font-semibold">{item.category}</span>
            <span className="text-secondary dark:text-[#a1a1aa] text-sm">{item.date}</span>
          </div>
          <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-secondary dark:text-[#a1a1aa] h-16 overflow-hidden">
            {item.description}
          </p>
        </div>
      </div>

      {/* ===== IFRAME MODAL (WEB APPS) ===== */}
      {iframeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-11/12 md:w-3/4 lg:w-2/3 h-3/4 bg-white dark:bg-[#121212] rounded-lg overflow-hidden">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded px-3 py-1 z-50"
              onClick={() => setIframeOpen(false)}
            >
              Close
            </button>
            <iframe
              src={item.link}
              title={item.title}
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* ===== IMAGE MODAL (GRAPHIC / BRAND) ===== */}
      {imageOpen && (
        <ImageModal
          image={item.image}
          onClose={() => setImageOpen(false)}
        />
      )}
    </>
  );
};

/* ================= MAIN SECTION ================= */
const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const portfolioItems: PortfolioItem[] = useMemo(() => {
    const deployedApps: PortfolioItem[] = [
      {
        category: 'Web Application',
        title: 'Calculator App',
        description: 'My custom calculator app built with React.',
        date: 'May 2025',
        link: '#',
        image: '/portfolio/calculator-placeholder.png',
      },
      {
        category: 'Web Application',
        title: 'QR Code Generator',
        description: 'Generate QR codes easily.',
        date: ' 2024',
        link: '#',
        image: '/portfolio/qr-code-generator.png',
      },
      {
        category: 'Web Application',
        title: 'Bootstrap 5 Landing Page',
        description: 'Responsive landing page designed with Bootstrap 5.',
        date: ' 2023',
        link: '#',
        image: '/portfolio/bootstrap-landing-page.png',
      },
      {
        category: 'Web Application',
        title: 'Quiz App',
        description: 'Interactive quiz app built with React and JS.',
        date: ' 2023',
        link: '#',
        image: '/portfolio/quiz-app.png',
      },
      {
        category: 'Web Application',
        title: 'Travel Website',
        description: 'Travel website with beautiful UI and trip suggestions.',
        date: ' 2024',
        link: '#',
        image: '/portfolio/travel-website.png',
      },
      {
        category: 'Web Application',
        title: 'Netflix Clone',
        description: 'Front-end clone of Netflix with responsive UI.',
        date: '2024',
        link: '#',
        image: '/portfolio/netflix-clone.png',
      },
    ];

    // Add all other portfolio items
    const allItemsWithImage = allPortfolioItems.map(item => ({
      ...item,
      image: item.image || 'assets/portfolio/default-placeholder.png',
    }));

    return [...deployedApps, ...allItemsWithImage];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return portfolioItems;
    return portfolioItems.filter(item => item.category === activeFilter);
  }, [activeFilter, portfolioItems]);

  return (
    <section id="portfolio" className="py-24 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2 text-sm">MY PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">
            Projects I Have <span className="text-accent">Done</span>
          </h2>
        </div>

        {/* ===== FILTERS ===== */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-md border transition ${
                activeFilter === category
                  ? 'bg-accent text-white border-accent'
                  : 'bg-card dark:bg-[#121212] text-secondary dark:text-[#a1a1aa] border-border dark:border-[#27272a]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
