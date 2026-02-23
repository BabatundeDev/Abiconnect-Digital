import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will get back to you within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl mb-8">
              Let's <span className="text-primary">Work Together</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your digital marketing strategy? Share your goals with us, and we'll show you how we can help you achieve them.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-secondary border border-primary/20 p-8 md:p-12">
              <h2 className="text-3xl mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-input-background border border-primary/20 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-input-background border border-primary/20 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm mb-2 text-foreground">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-input-background border border-primary/20 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm mb-2 text-foreground">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-input-background border border-primary/20 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="social-media">Social Media Strategy</option>
                    <option value="paid-ads">Paid Advertising</option>
                    <option value="content">Content Strategy</option>
                    <option value="influencer">Influencer Marketing</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-input-background border border-primary/20 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your business and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-black px-6 py-4 hover:bg-primary/90 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl mb-8">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We respond to all inquiries within 24 hours. For urgent matters, please include your phone number in the message.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 border border-primary flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <a
                      href="mailto:hello@abiconnect.digital"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@abiconnect.digital
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 border border-primary flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary border border-primary/20 p-8 space-y-4">
                <h3 className="text-xl">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    'Initial response within 24 hours',
                    'Discovery call to understand your needs',
                    'Customized proposal and strategy',
                    'Transparent pricing and timelines',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Note */}
      <section className="px-6 lg:px-8 py-20 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6">
            Serious About <span className="text-primary">Growth</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We work with businesses that are committed to long-term success and willing to invest in strategic digital marketing. If that's you, we'd love to hear from you.
          </p>
        </div>
      </section>
    </div>
  );
}