import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary dark:text-[#ffffff] pb-2 border-b-2 border-accent inline-block">
              Wajeeha Khan
            </h2>
            <p className="mt-4 text-lg text-secondary dark:text-[#a1a1aa] flex items-center">
              Building smart, seamless, and impactful digital solutions
              <span className="inline-block w-px h-6 bg-secondary dark:bg-[#a1a1aa] ml-2 animate-blink"></span>
            </p>
          </div>

          <div className="space-y-6 text-lg text-secondary dark:text-[#a1a1aa] leading-relaxed">
            <p>
              I’m <strong className="text-primary dark:text-[#ffffff]">Wajeeha Khan</strong>, a passionate <strong className="text-primary dark:text-[#ffffff]">SEO Specialist</strong> with over 1 year of hands-on experience, along with strong skills in <strong className="text-primary dark:text-[#ffffff]">frontend development</strong>, <strong className="text-primary dark:text-[#ffffff]">mobile application development</strong>, <strong className="text-primary dark:text-[#ffffff]">AI & Machine Learning</strong>, and <strong className="text-primary dark:text-[#ffffff]">graphic design</strong>. I help businesses enhance their digital presence through effective SEO strategies, clean design, and smart, user-focused solutions.
            </p>
            <p>
              I specialize in <strong className="text-primary dark:text-[#ffffff]">on-page SEO</strong>, <strong className="text-primary dark:text-[#ffffff]">keyword research</strong>, <strong className="text-primary dark:text-[#ffffff]">technical SEO fundamentals</strong>, and <strong className="text-primary dark:text-[#ffffff]">content optimization</strong>, ensuring websites rank higher, perform better, and deliver an excellent user experience. Alongside SEO, I build <strong className="text-primary dark:text-[#ffffff]">responsive and modern web interfaces</strong> using <strong className="text-primary dark:text-[#ffffff]">HTML5</strong>, <strong className="text-primary dark:text-[#ffffff]">CSS3</strong>, <strong className="text-primary dark:text-[#ffffff]">JavaScript</strong>, and <strong className="text-primary dark:text-[#ffffff]">Bootstrap</strong>, allowing me to optimize both design and performance.
            </p>
            <p>
              In addition to web development, I develop <strong className="text-primary dark:text-[#ffffff]">mobile applications using Android Studio with Java</strong>. I have created multiple Android apps, including a <strong className="text-primary dark:text-[#ffffff]">Coffee Ordering App</strong>, an <strong className="text-primary dark:text-[#ffffff]">Airplane Ticket Booking App</strong>, and other functional applications, focusing on smooth UI, usability, and performance.
            </p>
            <p>
              With a strong background in <strong className="text-primary dark:text-[#ffffff]">graphic design and UI/UX</strong>, I design visually appealing interfaces, branding assets, and layouts that align with both usability and SEO best practices. I also have hands-on experience with <strong className="text-primary dark:text-[#ffffff]">Python, AI, and Machine Learning</strong>, working on projects such as <strong className="text-primary dark:text-[#ffffff]">sign detection systems</strong> and <strong className="text-primary dark:text-[#ffffff]">fake review detection models</strong>. These projects involved using <strong className="text-primary dark:text-[#ffffff]">Scikit-learn, Pandas, NumPy, TensorFlow, and OpenCV</strong>, which strengthened my analytical and problem-solving abilities.
            </p>
            <p>
              I believe in <strong className="text-primary dark:text-[#ffffff]">continuous learning, collaboration, and quality delivery</strong>. I work closely with clients to understand their goals and provide data-driven, scalable, and impactful digital solutions. Currently, I am expanding my expertise in <strong className="text-primary dark:text-[#ffffff]">SEO, mobile app development, and AI-powered technologies</strong>, aiming to build smarter digital experiences that create real-world value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
