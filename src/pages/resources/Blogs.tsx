import { useState } from 'react';
import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

// Mock data - replace with real data
const categories = [
  "All",
  "Security Best Practices",
  "Threat Intelligence",
  "Compliance",
  "Technology",
  "Industry Insights"
];

const blogs = [
  {
    title: "Zero Trust Architecture: A Comprehensive Guide",
    category: "Security Best Practices",
    author: "Dr. Sarah Chen",
    role: "Chief Research Officer",
    date: "March 15, 2024",
    readTime: "8 min read",
    excerpt: "Learn how to implement Zero Trust Architecture in your organization and strengthen your security posture...",
    tags: ["Zero Trust", "Security Architecture", "Network Security"],
    image: "/blogs/zero-trust.png"
  },
  {
    title: "Emerging Ransomware Trends in 2024",
    category: "Threat Intelligence",
    author: "Alex Rivera",
    role: "Incident Response Lead",
    date: "March 10, 2024",
    readTime: "6 min read",
    excerpt: "Analysis of recent ransomware attacks and strategies to protect your organization from evolving threats...",
    tags: ["Ransomware", "Threat Analysis", "Incident Response"],
    image: "/blogs/ransomware.png"
  },
  {
    title: "DPDP Act 2023: Impact on Indian Businesses",
    category: "Compliance",
    author: "Michael Patel",
    role: "Head of Compliance",
    date: "March 5, 2024",
    readTime: "10 min read",
    excerpt: "Understanding the implications of the Digital Personal Data Protection Act 2023 and steps for compliance...",
    tags: ["DPDP Act", "Data Protection", "Compliance"],
    image: "/blogs/dpdp.png"
  },
  {
    title: "AI in Cybersecurity: Opportunities and Risks",
    category: "Technology",
    author: "Emma Thompson",
    role: "Director of Penetration Testing",
    date: "March 1, 2024",
    readTime: "7 min read",
    excerpt: "Exploring the role of artificial intelligence in enhancing cybersecurity capabilities and potential risks...",
    tags: ["AI", "Machine Learning", "Security Tools"],
    image: "/blogs/ai-security.png"
  }
];

const featuredPost = {
  title: "The Future of Cloud Security: Trends and Predictions",
  author: "Dr. Nina Patel",
  role: "Advisory Services Director",
  date: "March 20, 2024",
  readTime: "12 min read",
  excerpt: "An in-depth analysis of emerging cloud security challenges and solutions for the modern enterprise.",
  stats: [
    { value: "5+", label: "Expert Insights" },
    { value: "3", label: "Case Studies" },
    { value: "10+", label: "Best Practices" }
  ],
  image: "/blogs/cloud-security.png"
};

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogs.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <ResourcePageLayout>
      {/* Featured Post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl p-8 mb-12"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-barlow font-bold text-white mb-4">
              {featuredPost.title}
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <div>
                <div className="text-white font-semibold">
                  {featuredPost.author}
                </div>
                <div className="text-sm text-white/70">
                  {featuredPost.role}
                </div>
              </div>
              <div className="text-white/50">•</div>
              <div className="text-sm text-white/50">
                {featuredPost.date}
              </div>
              <div className="text-white/50">•</div>
              <div className="text-sm text-white/50">
                {featuredPost.readTime}
              </div>
            </div>
            <p className="text-white/70 mb-6">
              {featuredPost.excerpt}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {featuredPost.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <button className="px-6 py-2 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
              Read Article
            </button>
          </div>
          <div className="w-full md:w-80 h-48 bg-white/10 rounded-xl" />
        </div>
      </motion.div>

      {/* Category Filter */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category === "All" ? null : category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                (category === "All" && !selectedCategory) || category === selectedCategory
                  ? "bg-white text-black"
                  : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="max-w-md">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/20"
          />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
          >
            <div className="h-48 bg-white/10" />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/90">
                  {post.category}
                </span>
                <span className="text-sm text-white/50">
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-xl font-barlow font-semibold text-white mb-3">
                {post.title}
              </h3>
              <p className="text-white/70 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-white font-semibold">
                    {post.author}
                  </div>
                  <div className="text-sm text-white/70">
                    {post.role}
                  </div>
                </div>
                <div className="text-sm text-white/50">
                  {post.date}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full bg-white/10 text-xs text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"
      >
        <h2 className="text-2xl font-barlow font-bold text-white mb-4">
          Subscribe to Our Blog
        </h2>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Get the latest cybersecurity insights and expert analysis delivered directly to your inbox.
        </p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/20"
          />
          <button className="px-6 py-2 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
            Subscribe
          </button>
        </div>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default Blogs; 