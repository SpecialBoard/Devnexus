import { UserPlus, BookOpen, Briefcase, BarChart3, FileText, Award, ChevronDown, CheckCircle, ArrowRight, Star, Package, Lock, Clock, Sparkles } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "motion/react";
import { Link } from "react-router";
import { FadeIn, SlideIn } from "../components/AnimatedSection";
import { useRef } from "react";
import FrostedGlass from "../components/FrostedGlass";

export function HowItWorks() {
  const heroRef = useRef(null);
  const steps = [
    {
      number: "01",
      title: "Registration",
      description: "Sign up and choose your preferred internship domain from our diverse catalog of technical programs.",
      icon: UserPlus,
      details: ["Easy sign-up process", "Browse 10+ domains", "Secure account creation"]
    },
    {
      number: "02",
      title: "Verification",
      description: "Complete the payment process and get your application verified by our team within 24-48 hours.",
      icon: BookOpen,
      details: ["Quick verification", "Secure payment gateway", "Automatic confirmation"]
    },
    {
      number: "03",
      title: "Project Work",
      description: "Get access to premium industry-projects and start building under the guidance of expert mentors.",
      icon: Briefcase,
      details: ["Real-world projects", "Expert mentorship", "Practical experience"]
    },
    {
      number: "04",
      title: "Certification",
      description: "Submit your projects, pass the evaluation, and receive your industry-recognized completion certificate.",
      icon: Award,
      details: ["Project evaluation", "Verified certificates", "Portfolio building"]
    }
  ];

  const faqs = [
    {
      question: "What is DevNexus?",
      answer: "DevNexus is a premier internship platform that connects students with real-world industry projects, providing practical experience and professional certification across various technical domains."
    },
    {
      question: "Is there a fee for the internship?",
      answer: "Yes, we charge a nominal subscription fee to maintain the platform, provide high-quality learning resources, and ensure dedicated mentorship for every student."
    },
    {
      question: "How long is the internship duration?",
      answer: "Most of our internship programs are designed to be completed in 4-12 weeks, depending on the domain and your pace of work."
    },
    {
      question: "Will I get a certificate?",
      answer: "Absolutely! Upon successful completion and evaluation of your projects, you will receive a verified industry-recognized certificate from DevNexus."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-primary to-secondary dark:bg-transparent text-white pt-32 pb-20 md:py-32 transition-colors relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center md:text-left flex flex-col items-center md:items-start">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={16} />
              <span className="text-sm">The Process</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">How It Works</h1>
            <p className="text-lg md:text-xl text-white/90">
              Your journey from student to professional made simple. Follow our proven process to gain real-world experience.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Grid */}
      <section className="py-20 bg-white dark:bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 ring-4 ring-accent/5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <step.icon size={28} />
                </div>
                <FrostedGlass className="p-8 rounded-[2rem] flex-1 shadow-xl relative">
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-black shadow-lg z-10">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium">
                        <CheckCircle size={14} className="text-accent" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </FrostedGlass>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Timeline */}
      <section className="py-20 bg-muted/30 dark:bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Program Roadmap</h2>
              <div className="space-y-8">
                {[
                  { title: "Week 1: Onboarding", desc: "Orientation, mentor assignment, and project briefing." },
                  { title: "Week 2-8: Development", desc: "Building core features with weekly milestone reviews." },
                  { title: "Week 9-12: Final Polish", desc: "Testing, documentation, and final submission." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <FrostedGlass className="p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                <div className="bg-accent text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-accent/20">
                  <Award size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Recognized Certification</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Upon completion, you'll receive a verified certificate and detailed performance report that boosts your profile for future employers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/programs" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-bold tracking-wider uppercase text-sm hover:scale-105 transition-transform">
                    Explore Programs
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </FrostedGlass>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white dark:bg-transparent transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about the process</p>
          </FadeIn>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} value={`item-${index}`} className="border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
                <Accordion.Header>
                  <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
                    <span className="font-bold text-lg">{faq.question}</span>
                    <ChevronDown size={20} className="text-muted-foreground group-data-[state=open]:rotate-180 transition-transform" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-6 pt-0 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>
    </div>
  );
}
