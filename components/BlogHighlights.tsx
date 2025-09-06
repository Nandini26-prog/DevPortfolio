import { Blog } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

interface BlogHighlightsProps {
  blogs: Blog[];
}

export default function BlogHighlights({ blogs }: BlogHighlightsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {blogs.map((blog, index) => (
        <div 
          key={index}
          className="bg-dark-card rounded-lg p-6 border border-dark-border card-hover group"
        >
          <div className="flex justify-between items-start mb-3">
            <span className="text-xs text-muted-text bg-dark-border px-2 py-1 rounded">
              {blog.source}
            </span>
            <span className="text-xs text-muted-text">{blog.date}</span>
          </div>
          
          <h3 className="text-lg font-semibold mb-3 group-hover:text-accent-green transition-colors">
            {blog.title}
          </h3>
          
          <p className="text-muted-text text-sm mb-4 leading-relaxed">
            {blog.summary}
          </p>
          
          <a
            href={blog.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-accent-green hover:text-accent-green/80 transition-colors group/link"
          >
            Read More
            <ExternalLink className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      ))}
    </div>
  );
}
