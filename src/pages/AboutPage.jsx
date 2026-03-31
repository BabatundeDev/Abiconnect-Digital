import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { Award, Target, Users2, ArrowRight } from 'lucide-react';

import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Image2 from '/src/assets/images/image2.jpg';

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

// ─── Page ─────────────────────────────────────────────────────────────────────
export function AboutPage() {
  return (
    <div className="min-h-screen pt-32">

      {/* ── Hero ── */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">

            <Reveal direction="up" delay={0}>
              <h1 className="text-5xl md:text-6xl mb-8">
                Building <span className="text-primary">Digital Success</span> Through Strategy and Systems
              </h1>
            </Reveal>

            <Reveal direction="up" delay={150}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AbiConnect Digital is a strategy-led digital marketing agency based in Nigeria, serving
                education-focused brands and growth-driven businesses across real estate, serviced
                apartments, and beyond.
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="px-6 lg:px-8 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <Reveal direction="right" delay={0}>
              <div className="aspect-[4/3] bg-black border border-primary/20 overflow-hidden">
                <ImageWithFallback
                  src={Image2}
                  alt="Our Team"
                  className="w-full h-full object-cover
                  transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>
            </Reveal>

            {/* Text */}
            <div className="space-y-6">
              <Reveal direction="left" delay={0}>
                <h2 className="text-4xl mb-6">Our Story</h2>
              </Reveal>

              <Reveal direction="left" delay={100}>
                <p className="text-muted-foreground leading-relaxed">
                  Founded on the belief that effective digital marketing goes beyond viral posts and
                  trending content, AbiConnect Digital was built to serve businesses that value
                  substance over hype.
                </p>
              </Reveal>

              <Reveal direction="left" delay={200}>
                <p className="text-muted-foreground leading-relaxed">
                  We combine deep expertise in digital marketing, education management, and project
                  management to deliver strategic solutions that create lasting impact.
                </p>
              </Reveal>

              <Reveal direction="left" delay={300}>
                <p className="text-muted-foreground leading-relaxed">
                  We're not just a service provider. We're your strategic partner in building a
                  scalable, profitable digital presence.
                </p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">

          <Reveal direction="up" delay={0}>
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl mb-6">
                What <span className="text-primary">Drives Us</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our philosophy is built on principles that guide every strategy, campaign, and
                client relationship.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Strategy First',
                description: 'We believe great results come from great strategy.',
              },
              {
                icon: Award,
                title: 'Results-Oriented',
                description: 'We measure success by business outcomes, not vanity metrics.',
              },
              {
                icon: Users2,
                title: 'Partnership Mindset',
                description: 'We build relationships based on trust and long-term growth.',
              },
            ].map((card, index) => (
              <Reveal key={index} direction="up" delay={index * 150}>
                <div className="bg-secondary border border-primary/20 p-8
                hover:border-primary/40 hover:-translate-y-1
                transition-all duration-300 ease-out group h-full">
                  <card.icon className="w-12 h-12 text-primary mb-6 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-2xl mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── Expertise ── */}
      <section className="px-6 lg:px-8 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">

          <Reveal direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6">
                <span className="text-primary">Expertise</span> That Matters
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Digital Marketing',
                description: 'Strategic, data-driven execution tailored to real business outcomes.',
              },
              {
                title: 'Education Management',
                description: 'Strategic, data-driven execution tailored to real business outcomes.',
              },
              {
                title: 'Project Management',
                description: 'Strategic, data-driven execution tailored to real business outcomes.',
              },
              {
                title: 'Systems Thinking',
                description: 'Strategic, data-driven execution tailored to real business outcomes.',
              },
            ].map((item, index) => (
              <Reveal key={index} direction="up" delay={index * 120}>
                <div className="space-y-3 border-l-2 border-primary/20 pl-6
                hover:border-primary transition-all duration-300 ease-out group">
                  <h3 className="text-2xl transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
              Let's Work <span className="text-primary">Together</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={150}>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Ready to partner with an agency that prioritizes your business growth?
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
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </Reveal>

        </div>
      </section>

    </div>
  );
}