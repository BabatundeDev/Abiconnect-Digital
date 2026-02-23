import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function PortfolioPage() {
  const caseStudies = [
    {
      title: 'Education Platform Growth Strategy',
      client: 'EdTech Platform',
      challenge: 'Low brand awareness and student enrollment in a competitive market.',
      approach: 'Developed a comprehensive content strategy combining organic social media, targeted paid campaigns, and influencer partnerships to build trust and drive enrollments.',
      results: [
        '250% increase in website traffic',
        '180% growth in social media engagement',
        '95% reduction in cost per enrollment',
      ],
      category: 'Education',
    },
    {
      title: 'Luxury Real Estate Campaign',
      client: 'Serviced Apartments',
      challenge: 'Difficulty reaching high-net-worth individuals for premium property bookings.',
      approach: 'Created a luxury-focused brand narrative with high-quality visual content, strategic Meta advertising, and partnerships with lifestyle influencers.',
      results: [
        '320% increase in qualified leads',
        'Sold out first phase in 6 weeks',
        '4.8x return on ad spend',
      ],
      category: 'Real Estate',
    },
    {
      title: 'Social Media Transformation',
      client: 'Business Services',
      challenge: 'Inconsistent online presence with minimal engagement and brand visibility.',
      approach: 'Rebuilt social media strategy from the ground up, focusing on thought leadership content, consistent brand voice, and community building.',
      results: [
        '500% increase in follower growth',
        '12x improvement in engagement rate',
        'Positioned as industry thought leader',
      ],
      category: 'Business Services',
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl mb-8">
              Strategic <span className="text-primary">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real results from strategic thinking, meticulous execution, and continuous optimization. Here's how we've helped businesses achieve their growth objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-32">
          {caseStudies.map((study, index) => (
            <div key={index} className="space-y-12">
              {/* Case Study Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="inline-block bg-primary/10 border border-primary px-4 py-2 text-primary text-sm">
                    {study.category}
                  </div>
                  <h2 className="text-4xl">{study.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {study.client}
                  </p>
                </div>
                <div className="aspect-video bg-secondary border border-primary/20 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1676276375742-9e3d10e39d45"
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Case Study Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <h3 className="text-xl">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl">Our Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {study.approach}
                  </p>
                </div>
                <div className="bg-secondary border border-primary/20 p-8 space-y-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h3 className="text-xl">Key Results</h3>
                  </div>
                  <ul className="space-y-4">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < caseStudies.length - 1 && (
                <div className="border-t border-primary/10" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Approach Highlight */}
      <section className="px-6 lg:px-8 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              What Makes Our <span className="text-primary">Work Different</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project is guided by strategic thinking and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-primary/20 p-8 space-y-4">
              <div className="text-3xl font-serif text-primary">01</div>
              <h3 className="text-xl">Research-Driven</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every strategy begins with deep market research, audience analysis, and competitive intelligence.
              </p>
            </div>
            <div className="bg-black border border-primary/20 p-8 space-y-4">
              <div className="text-3xl font-serif text-primary">02</div>
              <h3 className="text-xl">Data-Informed</h3>
              <p className="text-muted-foreground leading-relaxed">
                We track, measure, and optimize based on real performance data, not assumptions.
              </p>
            </div>
            <div className="bg-black border border-primary/20 p-8 space-y-4">
              <div className="text-3xl font-serif text-primary">03</div>
              <h3 className="text-xl">Business-Focused</h3>
              <p className="text-muted-foreground leading-relaxed">
                We optimize for revenue and profitability, ensuring marketing drives bottom-line growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Let's Create Your <span className="text-primary">Success Story</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Ready to achieve results like these? Let's discuss how we can help your business grow.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-black px-10 py-4 text-lg hover:bg-primary/90 transition-all inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}