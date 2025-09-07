// import { Testimonial } from '@/lib/data';

// interface TestimonialCardProps {
//   testimonial: Testimonial;
// }

// export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
//   return (
//     <div className="bg-dark-card rounded-lg p-8 border border-dark-border card-hover relative">
//       <div className="text-4xl text-light-text mb-4">"</div>
//       <blockquote className="text-lg text-muted-text mb-6 leading-relaxed">
//         {testimonial.quote}
//       </blockquote>
//       <cite className="text-light-text font-medium">
//         — {testimonial.name}
//       </cite>
//     </div>
//   );
// }
// import React, { useRef, useState, useEffect } from 'react';

// type Milestone = {
//   id: string;
//   title: string;
//   subtitle?: string;
//   period?: string;
//   image?: string; // optional thumbnail
// };

// interface Props {
//   milestones: Milestone[];
// }

// export default function HorizontalTimeline({ milestones }: Props) {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [active, setActive] = useState(0);

//   // Scroll focused card into view
//   const focusIndex = (i: number) => {
//     setActive(i);
//     const container = containerRef.current;
//     const card = container?.querySelectorAll<HTMLElement>('[data-timeline-card]')[i];
//     card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
//   };

//   // keyboard nav
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === 'ArrowRight') focusIndex(Math.min(active + 1, milestones.length - 1));
//       if (e.key === 'ArrowLeft') focusIndex(Math.max(active - 1, 0));
//     };
//     window.addEventListener('keydown', handler);
//     return () => window.removeEventListener('keydown', handler);
//   }, [active, milestones.length]);

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-12">
//       <div className="mb-6 text-center">
//         <span className="inline-block px-4 py-2 bg-dark-card border border-light-text rounded-full text-sm font-medium">
//           MY JOURNEY
//         </span>
//       </div>

//       <div className="relative">
//         {/* center line */}
//         <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-px bg-dark-border"></div>

//         {/* horizontal scroll list */}
//         <div
//           ref={containerRef}
//           className="relative overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-6 py-8"
//           aria-label="timeline"
//         >
//           {milestones.map((m, i) => (
//             <div
//               key={m.id}
//               data-timeline-card
//               tabIndex={0}
//               onClick={() => focusIndex(i)}
//               onKeyDown={(e) => { if (e.key === 'Enter') focusIndex(i); }}
//               className={`min-w-[260px] snap-center flex-shrink-0 relative rounded-lg p-4 border ${
//                 i === active ? 'border-accent-green/50 bg-dark-card scale-105' : 'border-dark-border bg-transparent'
//               } transform transition-all`}
//               aria-current={i === active}
//             >
//               {/* vertical connector dot */}
//               <div className={`absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full ${
//                 i === active ? 'bg-accent-green' : 'bg-muted'
//               } border border-dark-border`}></div>

//               {/* optional thumbnail */}
//               {m.image && (
//                 <div className="mb-3 w-full h-28 overflow-hidden rounded">
//                   <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
//                 </div>
//               )}

//               <div className="text-sm text-muted-text mb-1">{m.period}</div>
//               <h3 className="text-lg font-semibold">{m.title}</h3>
//               {m.subtitle && <p className="text-sm text-muted-text mt-1">{m.subtitle}</p>}
//             </div>
//           ))}
//         </div>

//         {/* controls */}
//         <div className="flex justify-center gap-3 mt-6">
//           <button
//             onClick={() => focusIndex(Math.max(active - 1, 0))}
//             className="px-3 py-2 border rounded hover:bg-dark-card transition"
//             aria-label="previous milestone"
//           >
//             ‹
//           </button>
//           <button
//             onClick={() => focusIndex(Math.min(active + 1, milestones.length - 1))}
//             className="px-3 py-2 border rounded hover:bg-dark-card transition"
//             aria-label="next milestone"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const timeline = [
  { id: 't1', title: 'First Projects', subtitle: 'Expense Manager (Java, Swing, JDBC) & To-Do App', period: '2023' },
  { id: 't2', title: 'Hackathon Beginnings', subtitle: 'WeForShe Hackathon (Myntra) — Fashion Search Engine', period: '2023' },
  { id: 't3', title: 'Web Dev Intern - Coding Samurai', subtitle: 'Calculator, Blogging App, To-Do List (MERN stack)', period: 'May 2023 – Jul 2023' },
  { id: 't4', title: 'AR/VR Earthquake Simulation', subtitle: 'Unity + XR prototype for disaster preparedness', period: '2023 – Early 2024' },
  { id: 't5', title: 'WeHack ’24 & SIH Internal', subtitle: 'Hackathons on AI & VR, resilience under pressure', period: 'Early 2024' },
  { id: 't6', title: 'AI-ML Intern - Shivarnim', subtitle: 'Healthcare chatbot, data modeling, AWS Comprehend Medical', period: 'Oct 2024 – Jan 2025' },
  { id: 't8', title: 'SnapPick — Remote Canteen Ordering', subtitle: 'Backend (Spring Boot, PostgreSQL) with React frontend teammate', period: 'Nov 2024 – Mar 2025' },
  { id: 't7', title: 'Hack Celestia ’25', subtitle: 'Predictive Maintenance Model — Top 10 nationally', period: 'Jan 2025' },
  { id: 't9', title: 'ACM Student Chapter', subtitle: 'Secretary — leadership, events, tech initiatives', period: 'Jan 2025 – Present' },
  { id: 't10', title: 'Software Intern — Siemens EDA', subtitle: 'C++ dev, visualization tools, industry exposure', period: 'Sept 2025 – Dec 2025 (ongoing)' },
];

type Milestone = {
  id: string;
  title: string;
  subtitle?: string;
  period?: string;
};

interface Props {
  milestones: Milestone[];
}

export default function HorizontalTimeline({ milestones }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  // settings
  const spacing = 200;
  const centerY = 120;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-6 text-center">
        <span className="inline-block px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-full text-sm font-medium text-neutral-300">
          MY JOURNEY
        </span>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <svg
          className="min-w-[2000px] h-72"
          viewBox={`0 0 ${milestones.length * spacing + spacing} 240`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main timeline line */}
          <motion.line
            x1="0"
            y1={centerY}
            x2={milestones.length * spacing}
            y2={centerY}
            stroke="#666"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {milestones.map((m, i) => {
            const x = (milestones.length - 1 - i) * spacing + spacing / 2;
            const y = centerY;
            const isHovered = hovered === m.id;
            const cardY = i % 2 === 0 ? centerY - 100 : centerY + 20;

            return (
              <g key={m.id}>
                {/* Milestone dot */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 10 : 6}
                  fill={isHovered ? "#22c55e" : "#999"}
                  className="cursor-pointer"
                  onMouseEnter={() => setHovered(m.id)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />

                {/* Vertical line from dot to card */}
                {isHovered && (
                  <motion.line
                    x1={x}
                    y1={y}
                    x2={x}
                    y2={cardY + (i % 2 === 0 ? 80 : 0)}
                    stroke="#22c55e"
                    strokeWidth="1.5"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "top" }}
                  />
                )}

                {/* Period label */}
                {m.period && (
                  <motion.text
                    x={x}
                    y={centerY + 30}
                    textAnchor="middle"
                    className="fill-neutral-500 text-xs font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    {m.period}
                  </motion.text>
                )}

                {/* Tooltip (card) */}
                {isHovered && (
                  <foreignObject x={x - 125} y={cardY} width="250" height="110">
                    <motion.div
                      className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 text-xs text-neutral-180 shadow-xl"
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <div className="font-semibold text-base mb-1">{m.title}</div>
                      {m.subtitle && <div className="text-neutral-400">{m.subtitle}</div>}
                    </motion.div>
                  </foreignObject>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
// NOTE: The generateSinePath function is no longer needed.
// It is replaced by the simpler <line> SVG element.




