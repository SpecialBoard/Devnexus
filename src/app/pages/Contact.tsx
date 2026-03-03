import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", university: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary dark:bg-transparent text-white py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              Have questions? We're here to help! Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you have a question about programs, pricing, or anything else, our team is ready to answer all your questions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Email Us</h3>
                    <p className="text-muted-foreground">support@internhub.com</p>
                    <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      InternHub Headquarters<br />
                      123 Tech Park, Cyber City<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Live Chat</h3>
                    <p className="text-muted-foreground">Available on our website</p>
                    <button className="text-accent hover:underline text-sm mt-1">
                      Start a conversation →
                    </button>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-muted dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-lg">
                <h3 className="mb-4">Support Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-muted dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl mb-6">Send us a Message</h3>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">✓</div>
                    <h4 className="mb-2">Message Sent Successfully!</h4>
                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-black/20 border border-border dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-black/20 border border-border dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="university" className="block mb-2">
                        University/College
                      </label>
                      <input
                        type="text"
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white dark:bg-black/20 border border-border dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                        placeholder="Your institution name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white dark:bg-black/20 border border-border dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-colors"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-6 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      Send Message
                      <Send size={18} className="ml-2" />
                    </button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our Privacy Policy
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-muted dark:bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">Common Questions</h2>
            <p className="text-muted-foreground">
              Before reaching out, check if your question is already answered
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/how-it-works"
              className="bg-white dark:bg-white/5 dark:backdrop-blur-md border border-border dark:border-white/10 p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="mb-2">Program Details</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about our internship programs, duration, and structure
              </p>
              <span className="text-accent text-sm">View Details →</span>
            </a>

            <a
              href="/programs"
              className="bg-white dark:bg-white/5 dark:backdrop-blur-md border border-border dark:border-white/10 p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="mb-2">Available Programs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore all internship domains and specializations
              </p>
              <span className="text-accent text-sm">Browse Programs →</span>
            </a>

            <a
              href="/payment"
              className="bg-white dark:bg-white/5 dark:backdrop-blur-md border border-border dark:border-white/10 p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="mb-2">Pricing & Payment</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Understand our pricing structure and payment options
              </p>
              <span className="text-accent text-sm">View Pricing →</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
