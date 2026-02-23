import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight">
                Strategy-Led Digital Marketing for
                <span className="text-primary"> Growth-Driven</span> Businesses
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We help education-focused brands and ambitious businesses in Nigeria achieve sustainable growth through data-driven digital marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-black px-8 py-4 text-center hover:bg-primary/90 transition-all inline-flex items-center justify-center gap-2"
                >
                  Book a Strategy Call
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/services"
                  className="border border-primary text-primary px-8 py-4 text-center hover:bg-primary/10 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-secondary border border-primary/20 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1682336869523-2c6859f781cb"
                  alt="Digital Marketing Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-black p-8 max-w-xs">
                <p className="text-3xl font-serif mb-2">98%</p>
                <p className="text-sm">Client satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-20 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              Strategic Solutions, <span className="text-primary">Measurable Results</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't chase trends. We build strategic frameworks that drive real business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Social Media Strategy',
                description: 'Platform-specific strategies that convert followers into customers.',
                icon: Users,
              },
              {
                title: 'Paid Advertising',
                description: 'ROI-focused Meta and TikTok campaigns that scale profitably.',
                icon: Target,
              },
              {
                title: 'Content Strategy',
                description: 'Compelling brand narratives that build authority and trust.',
                icon: TrendingUp,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black border border-primary/20 p-8 hover:border-primary/40 transition-colors group"
              >
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-primary inline-flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8">
                Why <span className="text-primary">AbiConnect</span> Digital?
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'Strategy-First Approach',
                    description: 'Every campaign begins with thorough research, clear objectives, and measurable KPIs.',
                  },
                  {
                    title: 'Business-Focused',
                    description: 'We optimize for revenue, not vanity metrics. Your growth is our success.',
                  },
                  {
                    title: 'Systems & Sustainability',
                    description: 'We build scalable marketing systems that deliver consistent, long-term results.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary flex items-center justify-center">
                        <span className="text-primary font-serif text-xl">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] bg-secondary border border-primary/20 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1641998148499-cb6b55a3c0d3"
                alt="Professional Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Building / Process */}
      <section className="py-20 px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              Our <span className="text-primary">Approach</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A proven framework that delivers consistent results for ambitious businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your market, audience, and objectives.' },
              { step: '02', title: 'Strategy', description: 'We develop a customized growth roadmap.' },
              { step: '03', title: 'Execution', description: 'We implement campaigns with precision.' },
              { step: '04', title: 'Optimization', description: 'We continuously refine for maximum ROI.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-black border border-primary flex items-center justify-center">
                  <span className="text-3xl font-serif text-primary">{item.step}</span>
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to <span className="text-primary">Scale Your Business</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Let's discuss how we can help you achieve sustainable growth through strategic digital marketing.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-black px-10 py-4 text-lg hover:bg-primary/90 transition-all inline-flex items-center gap-2"
          >
            Book a Strategy Call
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}