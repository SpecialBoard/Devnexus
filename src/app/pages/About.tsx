import { Users, Target, Lightbulb, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { FadeIn, SlideIn } from "../components/AnimatedSection";
import { useRef } from "react";
import FrostedGlass from "../components/FrostedGlass";

export function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const team = [
    { name: "Dr. Rajesh Kumar", role: "Founder & CEO", specialty: "EdTech Entrepreneur", color: "from-blue-500 to-cyan-500" },
    { name: "Meera Singh", role: "Head of Programs", specialty: "Career Development", color: "from-purple-500 to-pink-500" },
    { name: "Arjun Mehta", role: "Technical Director", specialty: "Software Architecture", color: "from-orange-500 to-red-500" },
    { name: "Kavya Reddy", role: "Student Success Manager", specialty: "Mentorship & Support", color: "from-green-500 to-emerald-500" },
  ];

  const timeline = [
    { year: "2023", event: "DevNexus founded with a vision to democratize internship access" },
    { year: "2024", event: "Launched first batch with 500 students across 10 domains" },
    { year: "2025", event: "Expanded to 5,000+ students with 95% satisfaction rate" },
    { year: "2026", event: "Partnered with 50+ companies for placement opportunities" },
  ];

  const values = [
    {
      icon: Target,
      title: "Professionalism",
      description: "We maintain the highest standards in everything we do, ensuring quality and credibility.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making industry-grade internships accessible to students from all backgrounds.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Affordability",
      description: "Quality education and experience shouldn't break the bank. We keep it affordable.",
      color: "from-orange-500 to-amber-500"
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-primary to-secondary dark:bg-transparent text-white pt-32 pb-20 md:py-32 transition-colors relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y: heroY }}
        >
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center md:items-start"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles size={16} />
                <span className="text-sm">Our Story</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                About DevNexus
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Empowering the next generation of professionals with real-world experience and industry-ready skills.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-white dark:bg-transparent relative overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <h2 className="text-3xl md:text-4xl mb-6 font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                {[
                  "DevNexus was born out of a simple observation: thousands of talented students graduate every year without real industry experience, making it difficult to land their dream jobs.",
                  "Our founder, Dr. Rajesh Kumar, faced this challenge himself early in his career. After working in the tech industry for over 15 years and witnessing countless talented graduates struggle to find opportunities, he decided to create a solution.",
                  "In 2023, DevNexus was founded with a clear mission: to bridge the gap between academic learning and industry requirements by providing affordable, high-quality internship programs with real projects.",
                  "Today, we've helped thousands of students transform their careers and land positions at top companies. Our commitment to excellence, accessibility, and affordability remains stronger than ever."
                ].map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <FrostedGlass
                className="p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px] relative overflow-hidden shadow-xl rounded-[2rem]"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="text-center relative z-10">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-br from-accent to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-black"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    DN
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Building the Future</h3>
                  <p className="text-muted-foreground">One internship at a time</p>
                </div>
              </FrostedGlass>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-muted to-white dark:from-transparent dark:to-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To provide every student with access to quality, affordable internship opportunities that build real-world skills and industry connections.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Lightbulb,
                title: "Our Vision",
                text: "To become the most trusted internship platform, creating a bridge between education and employment that transforms lives.",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <FrostedGlass className="p-8 h-full relative overflow-hidden rounded-[2rem]">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} text-white rounded-xl flex items-center justify-center mb-6`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </FrostedGlass>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-transparent relative overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} text-white rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-muted to-white dark:from-transparent dark:to-transparent transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Milestones that shaped DevNexus</p>
          </FadeIn>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg font-bold">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-20 bg-gradient-to-b from-accent/50 to-secondary/50" />
                  )}
                </div>
                <div className="pt-3">
                  <p className="text-lg font-medium text-foreground dark:text-white/90">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to your success
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-black shadow-xl`}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-accent font-medium mb-2">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
