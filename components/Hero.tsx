import React, { useState } from "react";
import {
  BehanceIcon,
  DownloadIcon,
  ArrowRightIcon,
  MouseIcon,
  LinkedInIcon,
  GithubIcon,
  InstagramIcon,
  BloggerIcon,
} from "./icons";

const Hero: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative bg-gradient-to-b from-card to-background dark:from-[#121212] dark:to-[#0a0a0a]"
    >
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white mb-3">
          Welcome, This is <br />
          <span className="text-accent text-4xl md:text-6xl lg:text-7xl">
            Wajeeha Khan
          </span>
        </h1>

        <h2 className="text-md md:text-lg text-secondary dark:text-[#a1a1aa] mb-6">
          Frontend Web Developer | Mobile App Developer | Graphic Designer | Content Writer | SEO Specialist
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-secondary dark:text-[#a1a1aa] mb-8">
          A highly motivated and creative Frontend Web & Mobile Application Developer
          with strong skills in design, content, and SEO.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition"
          >
            Hire Me <ArrowRightIcon className="h-5 w-5" />
          </a>

          <button
            onClick={() => setShowResume(true)}
            className="flex items-center gap-2 border border-border dark:border-[#27272a] py-3 px-6 rounded-lg hover:bg-border dark:hover:bg-[#27272a] transition"
          >
            <DownloadIcon className="h-5 w-5" /> Resume
          </button>
        </div>

        {/* Social */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/wajeeha-khan-381019330" target="_blank" rel="noreferrer">
            <LinkedInIcon className="h-7 w-7 hover:text-accent" />
          </a>
          <a href="https://github.com/Wajeehakhan123" target="_blank" rel="noreferrer">
            <GithubIcon className="h-7 w-7 hover:text-accent" />
          </a>
          <a href="https://www.instagram.com/wk_brandworks?igsh=YXZhdGF3eTVhemg1" target="_blank" rel="noreferrer">
            <InstagramIcon className="h-7 w-7 hover:text-accent" />
          </a>
          <a href="https://www.behance.net/wajeehakhan15" target="_blank" rel="noreferrer">
            <BehanceIcon className="h-7 w-7 hover:text-accent" />
          </a>
          <a href="https://share.google/3T7dayhEuc3D18t0O" target="_blank" rel="noreferrer">
            <BloggerIcon className="h-7 w-7 hover:text-accent" />
          </a>
        </div>
      </div>

      {/* ===== RESUME POPUP (PDF – CLEAN & CUSTOM) ===== */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white dark:bg-[#121212]
                          w-[92%] md:w-[75%]
                          h-[85vh]
                          rounded-2xl shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="flex justify-between items-center px-5 h-[60px] border-b dark:border-gray-700">
              <h2 className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300">
                Resume – Wajeeha Khan
              </h2>

              <div className="flex gap-3">
                <a
                  href="/assets/Wajeeha_Khan_Resume.pdf"
                  download
                  className="text-sm bg-accent text-white px-4 py-1.5 rounded-md hover:bg-blue-600"
                >
                  Download
                </a>

                <button
                  onClick={() => setShowResume(false)}
                  className="text-xl font-bold text-gray-500 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <iframe
              src="/images/Wajeeha_Khan_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="w-full h-full"
              title="Wajeeha Khan Resume"
            />
          </div>
        </div>
      )}

      {/* Scroll Icon */}
      <div className="absolute bottom-10 animate-bounce">
        <a href="#about">
          <MouseIcon className="h-8 w-8 text-secondary hover:text-accent" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
