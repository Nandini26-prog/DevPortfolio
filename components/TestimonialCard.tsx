import { Testimonial } from '@/lib/data';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-dark-card rounded-lg p-8 border border-dark-border card-hover relative">
      <div className="text-4xl text-light-text mb-4">"</div>
      <blockquote className="text-lg text-muted-text mb-6 leading-relaxed">
        {testimonial.quote}
      </blockquote>
      <cite className="text-light-text font-medium">
        — {testimonial.name}
      </cite>
    </div>
  );
}
