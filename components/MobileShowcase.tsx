import React, { useState } from 'react';

export interface MobileApp {
  image: string;
  title: string;
  description: string;
  techStack: string[];
}

// ===== MOBILE APPS DATA =====
const mobileApps: MobileApp[] = [
  {
    image: "/mobile/coffee-app.jpg",
    title: "Coffee Ordering App",
    description:
      "A clean and user-friendly coffee ordering app featuring a digital menu with popular drinks like Espresso, Cappuccino, Mocha, and Latte.",
    techStack: ["Android Studio", "Java", "XML"]
  },
  {
    image: "/mobile/flight-app.jpg",
    title: "Flight Ticket Booking App (SkyWings)",
    description:
      "A modern flight booking application that allows users to securely search and book flight tickets with an intuitive and elegant UI.",
    techStack: ["Android Studio", "Java", "Firebase"]
  },
  {
    image: "/mobile/tic-tac-toe.jpg",
    title: "Tic Tac Toe Game",
    description:"A classic Tic Tac Toe mobile game with a minimal design, player name display, and smooth interactive gameplay.",
    techStack: ["Android Studio", "Java"]
  },
  {
    image: "/mobile/calculator-app.jpg",
    title: "Calculator App",
    description:
      "A simple and clean calculator app with basic arithmetic operations and a smooth UI.",
    techStack: ["Android Studio", "Java"],
  },
  {
    image: "/mobile/todo-app.jpg",
    title: "Todo App",
    description:
      "A task management app to add, complete, and manage daily tasks efficiently.",
    techStack: ["Android Studio", "Java", "Firebase"],
  },
];

// ===== IMAGE MODAL =====
const ImageModal: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
    onClick={onClose}
  >
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <img
        src={imageUrl}
        alt="App Preview"
        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
      />
      <button
        onClick={onClose}
        className="absolute -top-3 -right-3 bg-accent text-white w-9 h-9 rounded-full text-xl hover:bg-opacity-90"
      >
        ×
      </button>
    </div>
  </div>
);

// ===== MOBILE APP CARD =====
const MobileAppCard: React.FC<{ app: MobileApp; onImageClick: (img: string) => void }> = ({ app, onImageClick }) => (
  <div className="bg-card dark:bg-[#121212] rounded-xl shadow-lg border border-border dark:border-[#27272a] group transition-all duration-300 hover:border-accent hover:-translate-y-2">
    <div className="p-4">
      <div
        className="relative aspect-[9/18.5] bg-background dark:bg-[#0a0a0a] border border-border dark:border-[#27272a] rounded-3xl overflow-hidden cursor-pointer"
        onClick={() => onImageClick(app.image)}
      >
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <span className="text-white font-semibold text-sm">View Preview</span>
        </div>
      </div>
    </div>

    <div className="p-6 pt-2 flex flex-col h-full">
      <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{app.title}</h3>
      <p className="text-secondary dark:text-[#a1a1aa] mb-4 flex-grow">{app.description}</p>
      <div className="flex flex-wrap gap-2">
        {app.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-background dark:bg-[#0a0a0a] text-accent border border-border dark:border-[#27272a]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// ===== MOBILE SHOWCASE SECTION =====
const MobileShowcase: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="mobile-showcase" className="py-24 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm mb-2">MOBILE PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">
            Mobile Application <span className="text-accent">Showcase</span>
          </h2>
          <p className="text-lg text-secondary dark:text-[#a1a1aa] mt-4">
            A glimpse into my Android & mobile development work
          </p>
        </div>

        {/* Grid of Apps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileApps.map((app) => (
            <MobileAppCard key={app.title} app={app} onImageClick={setSelectedImage} />
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
    </section>
  );
};

export default MobileShowcase;
