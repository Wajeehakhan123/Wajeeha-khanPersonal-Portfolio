import React from 'react';

// Import local images
const automationImg = '/images/automation.jpg';
const cybersecurityImg = '/images/cybersecurity.jpg';
const mlImg = '/images/machine-learning.jpg';
const techImg = '/images/technology-impact.jpg';
const aiImg = '/images/ai-marketing.jpg';
const elearningImg = '/images/e-learning.jpg';



type BlogPost = {
  title: string;
  image: string;
  link: string;
};

// Blog posts data
const blogPosts: BlogPost[] = [
  {
    title: "The Future of Work: Embracing Automation and Robotics",
    image: automationImg,
    link: "https://wajeehakhan851.blogspot.com/2025/04/the-future-of-work-embracing-automation.html"
  },
  {
    title: "The Importance of Cybersecurity in the Digital Age",
    image: cybersecurityImg,
    link: "https://wajeehakhan851.blogspot.com/2025/03/the-importance-of-cybersecurity-in.html"
  },
  {
    title: "Building a Machine Learning Model from Scratch",
    image: mlImg,
    link: "https://wajeehakhan851.blogspot.com/2025/03/a-machine-learning-model-from-scratch.html"
  },
  {
    title: "The Impact of Technology on Everyday Life",
    image: techImg,
    link: "https://wajeehakhan851.blogspot.com/2025/05/the-impact-of-technology-on-everyday.html"
  },
  {
    title: "How AI is Revolutionizing Digital Marketing Strategies",
    image: aiImg,
    link: "https://wajeehakhan851.blogspot.com/2025/04/how-ai-is-revolutionizing-digital.html"
  },
  {
    title: "The Rise of E-Learning: Transforming Education",
    image: elearningImg,
    link: "https://wajeehakhan851.blogspot.com/2025/05/the-rise-of-e-learning-transforming.html"
  }
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div
    className="bg-card dark:bg-[#121212] rounded-lg shadow-lg overflow-hidden
    border-2 border-[#3B82F6]/30 dark:border-[#3B82F6]/50
    transition-all duration-300 hover:border-[#3B82F6] hover:scale-105"
  >
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-48 object-cover"
    />

    <div className="p-6">
      <h3 className="text-lg font-bold mb-4 text-black dark:text-white h-16">
  {post.title}
</h3>


      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#3B82F6] text-white font-semibold
        py-2 px-5 rounded-lg hover:bg-[#2563EB] transition-colors"
      >
        Read More
      </a>
    </div>
  </div>
);

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-card dark:bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold"> 
<span className="text-black dark:text-white">Blog </span>                                                         <span className="text-[#3B82F6]">Posts </span> 
</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
