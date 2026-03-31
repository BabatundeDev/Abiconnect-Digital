import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Project1 from '/src/assets/images/project1.jpg';
import Project2 from '/src/assets/images/project2.png';
import Project3 from '/src/assets/images/project3.jpg';

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15, ...options }
      );

      const el = ref.current;
      if (el) observer.observe(el);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return [ref, isVisible];
}

// ─── Reveal Wrapper ───────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, isVisible] = useScrollReveal();

  const directionMap = {
    up:    'translateY(40px)',
    down:  'translateY(-40px)',
    left:  'translateX(50px)',
    right: 'translateX(-50px)',
    fade:  'translateY(0px)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0,0)' : directionMap[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const caseStudies = [
  {
    title: 'Education Platform Growth Strategy',
    client: 'EdTech Platform',
    challenge: 'Low brand awareness and student enrollment in a competitive market.',
    approach: 'Developed a comprehensive content strategy combining organic social media, targeted paid campaigns, and influencer partnerships.',
    results: [
      '250% increase in website traffic',
      '180% growth in social media engagement',
      '95% reduction in cost per enrollment',
    ],
    category: 'Education',
    image: Project1,
  },
  {
    title: 'Luxury Real Estate Campaign',
    client: 'Serviced Apartments',
    challenge: 'Difficulty reaching high-net-worth individuals.',
    approach: 'Created a luxury-focused brand narrative with high-quality visual content and strategic Meta advertising.',
    results: [
      '320% increase in qualified leads',
      'Sold out first phase in 6 weeks',
      '4.8x return on ad spend',
    ],
    category: 'Real Estate',
    image: Project2,
  },
  {
    title: 'Social Media Transformation',
    client: 'Business Services',
    challenge: 'Inconsistent online presence with minimal engagement.',
    approach: 'Rebuilt social media strategy focusing on thought leadership and brand voice.',
    results: [
      '500% increase in follower growth',
      '12x improvement in engagement rate',
      'Positioned as industry thought leader',
    ],
    category: 'Business Services',
    image: Project3,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export function PortfolioPage() {
  return (
    <div className="min-h-screen pt-32">

      {/* ── Hero ── */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">

            <Reveal direction="up" delay={0}>
              <h1 className="text-5xl md:text-6xl mb-8">
                Strategic <span className="text-primary">Case Studies</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={150}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Real results from strategic thinking and execution.
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-32">

          {caseStudies.map((study, index) => (
            <div key={index} className="space-y-12">

              {/* Header row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Title block */}
                <Reveal direction="right" delay={0}>
                  <div className="space-y-6">
                    <div className="inline-block bg-primary/10 border border-primary px-4 py-2 text-primary text-sm
                    transition-all duration-300 hover:bg-primary hover:text-black cursor-default">
                      {study.category}
                    </div>
                    <h2 className="text-4xl">{study.title}</h2>
                    <p className="text-muted-foreground text-lg">{study.client}</p>
                  </div>
                </Reveal>

                {/* Image */}
                <Reveal direction="left" delay={150}>
                  <div className="aspect-video bg-secondary border border-primary/20 overflow-hidden">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover
                      transition-transform duration-500 ease-out hover:scale-105"
                    />
                  </div>
                </Reveal>

              </div>

              {/* Content row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                <Reveal direction="up" delay={0}>
                  <div className="space-y-4">
                    <h3 className="text-xl">The Challenge</h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={150}>
                  <div className="space-y-4">
                    <h3 className="text-xl">Our Approach</h3>
                    <p className="text-muted-foreground">{study.approach}</p>
                  </div>
                </Reveal>

                {/* Results card */}
                <Reveal direction="up" delay={250}>
                  <div className="bg-secondary border border-primary/20 p-8 space-y-6
                  hover:border-primary/40 hover:-translate-y-1
                  transition-all duration-300 ease-out
                  hover:shadow-[0_8px_30px_rgba(var(--primary-rgb),0.08)]">

                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-primary" />
                      <h3 className="text-xl">Key Results</h3>
                    </div>

                    <ul className="space-y-4">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </Reveal>

              </div>

              {index < caseStudies.length - 1 && (
                <div className="border-t border-primary/10" />
              )}

            </div>
          ))}

        </div>
      </section>

      {/* ── What Makes Our Work Different ── */}
      <section className="px-6 lg:px-8 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">

          <Reveal direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6">
                What Makes Our <span className="text-primary">Work Different</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Research-Driven', 'Data-Informed', 'Business-Focused'].map((item, index) => (
              <Reveal key={index} direction="up" delay={index * 150}>
                <div className="bg-black border border-primary/20 p-8 space-y-4
                hover:border-primary/40 hover:-translate-y-1
                transition-all duration-300 ease-out group">
                  <div className="text-3xl font-serif text-primary
                  transition-transform duration-300 group-hover:scale-110 inline-block">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl">{item}</h3>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">

          <Reveal direction="up" delay={0}>
            <h2 className="text-4xl md:text-5xl mb-6">
              Let's Create Your <span className="text-primary">Success Story</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={150}>
            <p className="text-lg text-muted-foreground mb-10">
              Ready to achieve results like these?
            </p>
          </Reveal>

          <Reveal direction="up" delay={250}>
            <Link
              to="/contact"
              className="bg-primary text-black px-10 py-4 text-lg
              hover:bg-primary/90 transition-all duration-300 ease-out
              inline-flex items-center gap-2
              hover:gap-3 hover:shadow-[0_4px_20px_rgba(var(--primary-rgb),0.35)]"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </Reveal>

        </div>
      </section>

    </div>
  );
}