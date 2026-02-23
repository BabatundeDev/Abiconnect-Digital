import { Link } from 'react-router-dom';
import { Award, Target, Users2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl mb-8">
              Building <span className="text-primary">Digital Success</span> Through Strategy and Systems
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AbiConnect Digital is a strategy-led digital marketing agency based in Nigeria, serving education-focused brands and growth-driven businesses across real estate, serviced apartments, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 lg:px-8 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-black border border-primary/20 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581093805071-a04e696db334"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded on the belief that effective digital marketing goes beyond viral posts and trending content, AbiConnect Digital was built to serve businesses that value substance over hype.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine deep expertise in digital marketing, education management, and project management to deliver strategic solutions that create lasting impact. Our approach is rooted in systems thinking, data analysis, and a commitment to sustainable growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're not just a service provider. We're your strategic partner in building a scalable, profitable digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              What <span className="text-primary">Drives Us</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our philosophy is built on principles that guide every strategy, campaign, and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary border border-primary/20 p-8">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl mb-4">Strategy First</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe great results come from great strategy. Every campaign begins with research, planning, and clear objectives.
              </p>
            </div>
            <div className="bg-secondary border border-primary/20 p-8">
              <Award className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl mb-4">Results-Oriented</h3>
              <p className="text-muted-foreground leading-relaxed">
                We measure success by business outcomes, not vanity metrics. Your revenue growth is our north star.
              </p>
            </div>
            <div className="bg-secondary border border-primary/20 p-8">
              <Users2 className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl mb-4">Partnership Mindset</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're invested in your long-term success. We build relationships based on trust, transparency, and mutual growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-6 lg:px-8 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              <span className="text-primary">Expertise</span> That Matters
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our diverse background enables us to approach challenges from multiple angles and deliver comprehensive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl">Digital Marketing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Years of hands-on experience managing campaigns across social media, paid advertising, content marketing, and influencer partnerships for diverse industries.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl">Education Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep understanding of the education sector, enabling us to craft strategies that resonate with students, parents, and institutional stakeholders.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl">Project Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Systematic approach to execution, ensuring campaigns are delivered on time, on budget, and aligned with strategic objectives.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl">Systems Thinking</h3>
              <p className="text-muted-foreground leading-relaxed">
                We build scalable marketing systems that work consistently, not one-off campaigns that require constant reinvention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Ready to partner with an agency that prioritizes your business growth above all else?
          </p>
          <Link
            to="/contact"
            className="bg-primary text-black px-10 py-4 text-lg hover:bg-primary/90 transition-all inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}