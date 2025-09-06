import { Blog } from '@/lib/data';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';

interface BlogMoodboardProps {
  blogs: Blog[];
}

export default function BlogMoodboard({ blogs }: BlogMoodboardProps) {
  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 -left-5 w-16 h-16 bg-blue-500/10 rounded-full blur-lg"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {blogs.map((blog, index) => (
          <div 
            key={index}
            className={`group relative ${
              index === 0 ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Card with different styles based on position */}
            <div className={`
              relative overflow-hidden rounded-2xl p-8 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1
              ${index === 0 
                ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 h-64' 
                : index === 1
                ? 'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 h-56'
                : 'bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20 h-56'
              }
            `}>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                {index === 0 && <span className="text-4xl">💃</span>}
                {index === 1 && <span className="text-4xl">🌙</span>}
                {index === 2 && <span className="text-4xl">💻</span>}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-3">
                  <BookOpen className="w-4 h-4 text-muted-text" />
                  <span className="text-xs text-muted-text bg-dark-bg/50 px-2 py-1 rounded-full">
                    {blog.source}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-muted-text">
                    <Calendar className="w-3 h-3" />
                    <span>{blog.date}</span>
                  </div>
                </div>
                
                <h3 className={`
                  font-bold mb-3 group-hover:text-accent-green transition-colors
                  ${index === 0 ? 'text-xl' : 'text-lg'}
                `}>
                  {blog.title}
                </h3>
                
                <p className="text-muted-text text-sm leading-relaxed mb-4">
                  {blog.summary}
                </p>
                
                <a
                  href={blog.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium group/link"
                >
                  <span className={`
                    ${index === 0 ? 'text-purple-300 hover:text-purple-200' : 
                      index === 1 ? 'text-blue-300 hover:text-blue-200' : 
                      'text-orange-300 hover:text-orange-200'}
                    transition-colors
                  `}>
                    Read on Medium
                  </span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom decorative text */}
      <div className="text-center mt-8">
        <p className="text-muted-text text-sm italic">
          "Words are my dance, code is my rhythm" ✨
        </p>
      </div>
    </div>
  );
}
