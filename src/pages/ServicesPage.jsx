import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, PenTool, Megaphone } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: Users,
      title: 'Social Media Strategy & Management',
      description: 'Build a powerful social media presence that converts followers into customers.',
      details: [
        'Platform-specific content strategies',
        'Community management and engagement',
        'Performance analytics and reporting',
        'Brand voice development',
      ],
      outcome: 'Increased brand awareness, engagement, and customer acquisition through organic social media.',
      forWho: 'Businesses looking to establish authority and build loyal communities online.',
    },
    {
      icon: Target,
      title: 'Paid Advertising (Meta & TikTok)',
      description: 'ROI-focused ad campaigns that scale profitably and drive measurable results.',
      details: [
        'Strategic campaign planning and setup',
        'Audience research and targeting',
        'Creative development and testing',
        'Performance optimization and scaling',
      ],
      outcome: 'Lower customer acquisition costs and higher return on ad spend.',
      forWho: 'Growth-driven businesses ready to invest in scalable customer acquisition.',
    },
    {
      icon: PenTool,
      title: 'Content Strategy & Brand Storytelling',
      description: 'Compelling narratives that position your brand as a trusted authority.',
      details: [
        'Brand messaging and positioning',
        'Content calendar development',
        'Long-form and short-form content creation',
        'SEO-optimized content strategies',
      ],
      outcome: 'Enhanced brand authority, customer trust, and organic reach.',
      forWho: 'Brands that want to lead their industry through thought leadership.',
    },
    {
      icon: Megaphone,
      title: 'Influencer & Campaign Management',
      description: 'Strategic partnerships that amplify your reach and drive authentic engagement.',
      details: [
        'Influencer identification and vetting',
        'Campaign strategy and execution',
        'Contract negotiation and management',
        'Performance tracking and reporting',
      ],
      outcome: 'Expanded reach and credibility through authentic influencer partnerships.',
      forWho: 'Businesses seeking to tap into established audiences with targeted messaging.',
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl mb-8">
              Strategic <span className="text-primary">Services</span> for Sustainable Growth
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We deliver comprehensive digital marketing solutions designed to drive real business outcomes, not just engagement metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <service.icon className="w-16 h-16 text-primary mb-6" />
                  <h2 className="text-4xl mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl">What's Included:</h3>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`bg-secondary border border-primary/20 p-8 space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <h3 className="text-xl mb-3">Who This Is For</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.forWho}</p>
                </div>

                <div className="border-t border-primary/20 pt-8">
                  <h3 className="text-xl mb-3">The Outcome</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.outcome}</p>
                  <Link
                    to="/contact"
                    className="text-primary inline-flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 lg:px-8 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              How We <span className="text-primary">Deliver</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our process ensures clarity, accountability, and exceptional results at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We understand your business, goals, and challenges.',
              },
              {
                step: '02',
                title: 'Strategy Development',
                description: 'We create a customized roadmap aligned with your objectives.',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We execute campaigns with precision and attention to detail.',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We continuously refine strategies based on performance data.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-black border border-primary/20 p-8">
                <div className="text-4xl font-serif text-primary mb-4">{item.step}</div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to <span className="text-primary">Transform</span> Your Marketing?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Let's discuss which services will drive the most impact for your business.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-black px-10 py-4 text-lg hover:bg-primary/90 transition-all inline-block"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}