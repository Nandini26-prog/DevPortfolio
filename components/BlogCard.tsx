import { Blog } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="bg-dark-card rounded-lg p-6 border border-dark-border card-hover">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold">{blog.title}</h3>
        <span className="text-xs text-muted-text">{blog.source}</span>
      </div>
      
      <p className="text-muted-text mb-4 text-sm">{blog.summary}</p>
      
      <div className="flex justify-between items-center">
        <span className="text-xs text-muted-text">{blog.date}</span>
        <a
          href={blog.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
        >
          Read More
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
}
