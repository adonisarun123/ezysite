import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  SparklesIcon,
  HomeIcon,
  HeartIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function BlogHomePage() {
  const featuredPost = {
    id: 'hiring-domestic-helper',
    title: 'The Complete Guide to Hiring a Domestic Helper in India',
    excerpt: 'Everything you need to know about finding, vetting, and hiring the perfect domestic helper for your family. From legal considerations to interview tips.',
    author: 'Priya Sharma',
    date: 'December 10, 2024',
    readTime: '8 min read',
    category: 'Hiring Guide',
    image: '/blog-featured.jpg',
    featured: true,
    tags: ['hiring', 'domestic help', 'guide', 'legal']
  };

  const blogPosts = [
    {
      id: 'safety-tips',
      title: 'Home Safety Tips When Hiring Domestic Help',
      excerpt: 'Essential safety measures and background checks to ensure your family\'s security when bringing help into your home.',
      author: 'Amit Verma',
      date: 'December 8, 2024',
      readTime: '5 min read',
      category: 'Safety',
      tags: ['safety', 'background check', 'security']
    },
    {
      id: 'fair-wages',
      title: 'Understanding Fair Wages for Domestic Workers',
      excerpt: 'A comprehensive breakdown of fair compensation rates across different cities and service types in India.',
      author: 'Sneha Reddy',
      date: 'December 6, 2024',
      readTime: '6 min read',
      category: 'Legal & Ethics',
      tags: ['wages', 'legal', 'ethics']
    },
    {
      id: 'elderly-care',
      title: 'Specialized Care for Elderly Family Members',
      excerpt: 'What to look for when hiring caregivers for elderly relatives, including medical considerations and qualifications.',
      author: 'Dr. Rajesh Kumar',
      date: 'December 4, 2024',
      readTime: '7 min read',
      category: 'Elderly Care',
      tags: ['elderly', 'healthcare', 'caregiving']
    },
    {
      id: 'managing-expectations',
      title: 'Setting Clear Expectations with Your Helper',
      excerpt: 'How to communicate effectively and set boundaries for a harmonious working relationship.',
      author: 'Meera Patel',
      date: 'December 2, 2024',
      readTime: '4 min read',
      category: 'Relationship Management',
      tags: ['communication', 'expectations', 'management']
    },
    {
      id: 'childcare-tips',
      title: 'Finding the Perfect Nanny for Your Children',
      excerpt: 'Key qualities to look for in a childcare provider and questions to ask during the interview process.',
      author: 'Anita Singh',
      date: 'November 30, 2024',
      readTime: '6 min read',
      category: 'Childcare',
      tags: ['nanny', 'childcare', 'interview']
    },
    {
      id: 'legal-compliance',
      title: 'Legal Compliance for Domestic Employment',
      excerpt: 'Understanding labor laws, contracts, and your responsibilities as an employer of domestic help.',
      author: 'Advocate Ravi Gupta',
      date: 'November 28, 2024',
      readTime: '9 min read',
      category: 'Legal & Ethics',
      tags: ['legal', 'compliance', 'contracts']
    }
  ];

  const categories = [
    { name: 'Hiring Guide', count: 8, icon: UserIcon, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { name: 'Safety', count: 5, icon: ShieldCheckIcon, color: 'text-green-600', bgColor: 'bg-green-50' },
    { name: 'Legal & Ethics', count: 6, icon: TagIcon, color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { name: 'Childcare', count: 4, icon: HeartIcon, color: 'text-pink-600', bgColor: 'bg-pink-50' },
    { name: 'Elderly Care', count: 3, icon: HomeIcon, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { name: 'Tips & Tricks', count: 7, icon: LightBulbIcon, color: 'text-yellow-600', bgColor: 'bg-yellow-50' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  EzyHelpers
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    Blog
                  </span>
                </h1>
                <p className="text-xl text-violet-100 leading-relaxed max-w-4xl mx-auto">
                  Expert advice, tips, and insights for finding, hiring, and managing 
                  domestic help in India. Your trusted guide to home services.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <ArrowRightIcon className="w-5 h-5 text-green-300" />
                  <span className="text-violet-100">50+ Expert Articles</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <SparklesIcon className="w-5 h-5 text-yellow-300" />
                  <span className="text-violet-100">Weekly Updates</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-blue-300" />
                  <span className="text-violet-100">Community Insights</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Categories */}
        <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, guides, and tips..."
                    className="w-full pl-12 pr-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 text-lg"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-xl transition-all duration-300">
                    Search
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Browse by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {categories.map((category, index) => (
                    <div key={index} className={`group ${category.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer text-center`}>
                      <category.icon className={`w-8 h-8 ${category.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                      <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                      <p className="text-gray-600 text-sm">{category.count} articles</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
              <p className="text-xl text-gray-600">
                Our most comprehensive guide to domestic help in India
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <span className="bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        FEATURED
                      </span>
                      <span className="text-violet-600 font-medium">{featuredPost.category}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <UserIcon className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDaysIcon className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="bg-violet-100 text-violet-700 text-xs font-medium px-3 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="group inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                      Read Full Article
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-violet-100 to-purple-100 p-8 md:p-12 flex items-center justify-center">
                  <div className="w-full max-w-md aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <SparklesIcon className="w-16 h-16 text-violet-600 mx-auto" />
                      <h4 className="text-lg font-semibold text-gray-900">Featured Guide</h4>
                      <p className="text-gray-600 text-sm">Complete hiring handbook with expert insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600">
                Stay updated with the latest tips and insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={post.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-violet-600 font-medium text-sm">{post.category}</span>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <ClockIcon className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-violet-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-gray-500 text-xs">+{post.tags.length - 2} more</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                          <UserIcon className="w-4 h-4 text-violet-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      
                      <button className="group inline-flex items-center gap-1 text-violet-600 hover:text-violet-700 font-medium text-sm transition-colors duration-300">
                        Read More
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="group bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  View All Articles
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Stay Updated
                </h2>
                <p className="text-xl text-violet-100">
                  Get the latest articles and tips delivered to your inbox weekly
                </p>
              </div>
              
              <form className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-400"
                  />
                  <button className="bg-yellow-400 hover:bg-yellow-300 text-violet-900 font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
                <p className="text-violet-200 text-sm mt-3">
                  Join 10,000+ readers. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 