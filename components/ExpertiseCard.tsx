import { Expertise } from '@/lib/data';
import { Monitor, Palette } from 'lucide-react';

interface ExpertiseCardProps {
  expertise: Expertise;
}

export default function ExpertiseCard({ expertise }: ExpertiseCardProps) {
  const getIcon = () => {
    if (expertise.title.includes('Development')) {
      return <Monitor className="w-16 h-16" />;
    }
    return <Palette className="w-16 h-16" />;
  };

  const getStatusColor = () => {
    return expertise.status.toLowerCase().includes('open') 
      ? 'text-accent-green' 
      : 'text-accent-red';
  };

  return (
    <div className="bg-dark-card rounded-lg p-6 border border-dark-border card-hover">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-muted-text text-sm">({expertise.id})</span>
          <h3 className="text-xl font-semibold">{expertise.title}</h3>
        </div>
        <div className={`flex items-center space-x-2 text-sm ${getStatusColor()}`}>
          <div className={`w-2 h-2 rounded-full ${
            expertise.status.toLowerCase().includes('open') 
              ? 'bg-accent-green' 
              : 'bg-accent-red'
          }`}></div>
          <span>{expertise.status}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center mb-6">
        {getIcon()}
      </div>
      
      <p className="text-muted-text mb-4">{expertise.copy}</p>
      
      <a
        href={expertise.cta.href}
        className="text-blue-400 hover:text-blue-300 text-sm underline"
      >
        {expertise.cta.label}
      </a>
    </div>
  );
}
