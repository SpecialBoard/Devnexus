import { Link } from "react-router";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { FadeIn, SlideIn } from "../components/AnimatedSection";
import FrostedGlass from "../components/FrostedGlass";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@devnexus.com",
      description: "Online support 24/7",
      action: "mailto:support@devnexus.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      description: "Mon-Sat, 9am-6pm",
      action: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "HSR Layout, Bangalore",
      description: "Karnataka, India - 560102",
      action: "https://maps.google.com"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary dark:bg-transparent text-white pt-32 pb-20 md:py-32 transition-colors relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <MessageSquare size={16} />
              <span className="text-sm">Get in Touch</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/90">
              Have questions about our programs or need technical support? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white dark:bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.action}
                    target={item.icon === MapPin ? "_blank" : undefined}
                    rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="block"
                  >
                    <FrostedGlass className="p-6 flex items-start gap-4 hover:border-accent/50 group rounded-2xl">
                      <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="font-medium text-foreground dark:text-white/90 mb-1">{item.details}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </FrostedGlass>
                  </motion.a>
                );
              })}

              {/* Business Hours */}
              <FrostedGlass className="p-6 rounded-2xl border-dashed border-2">
                <div className="flex items-center gap-3 mb-4 text-accent">
                  <Clock size={20} />
                  <h3 className="font-bold">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10 AM - 4 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-accent font-medium">Closed</span>
                  </div>
                </div>
              </FrostedGlass>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FrostedGlass className="p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
                <form className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                    <textarea
                      placeholder="How can we help you?"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-accent text-white rounded-xl font-bold tracking-[0.2em] uppercase shadow-lg shadow-accent/20 flex items-center justify-center gap-3 group"
                    >
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </FrostedGlass>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link Section */}
      <section className="py-20 bg-muted/30 dark:bg-transparent transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Quick Answer Needed?</h2>
            <p className="text-muted-foreground mb-8">
              Check out our frequently asked questions for immediate help with common queries.
            </p>
            <Link to="/how-it-works">
              <FrostedGlass className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-accent text-accent font-bold group" whileHover={{ scale: 1.05 }}>
                Visit FAQ Section
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </FrostedGlass>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
