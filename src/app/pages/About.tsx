import { Users, Target, Lightbulb, Calendar, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { FadeIn, SlideIn, ScaleIn } from "../components/AnimatedSection";
import { useRef } from "react";
import GlassSurface from "../components/GlassSurface";

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
      <section ref={heroRef} className="relative bg-gradient-to-br from-primary to-secondary dark:bg-transparent text-white py-20 overflow-hidden">
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
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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

              <motion.h1
                className="text-4xl md:text-5xl mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                About InternHub
              </motion.h1>
              <motion.p
                className="text-xl text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Empowering the next generation of professionals with real-world experience and industry-ready skills.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-white dark:bg-transparent relative overflow-hidden transition-colors">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                {[
                  "InternHub was born out of a simple observation: thousands of talented students graduate every year without real industry experience, making it difficult to land their dream jobs.",
                  "Our founder, Dr. Rajesh Kumar, faced this challenge himself early in his career. After working in the tech industry for over 15 years and witnessing countless talented graduates struggle to find opportunities, he decided to create a solution.",
                  "In 2023, InternHub was founded with a clear mission: to bridge the gap between academic learning and industry requirements by providing affordable, high-quality internship programs with real projects.",
                  "Today, we've helped thousands of students transform their careers and land positions at top companies. Our commitment to excellence, accessibility, and affordability remains stronger than ever."
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <motion.div
                className="bg-gradient-to-br from-muted to-white dark:from-white/5 dark:to-white/10 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-2xl p-8 flex items-center justify-center min-h-[400px] relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="text-center relative z-10">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-br from-accent to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-4xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    IH
                  </motion.div>
                  <h3 className="text-2xl mb-2">Building the Future</h3>
                  <p className="text-muted-foreground">One internship at a time</p>
                </div>
              </motion.div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-muted to-white dark:from-transparent dark:to-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To provide every student with access to quality, affordable internship opportunities that build real-world skills and industry connections, regardless of their background or location.",
                gradient: "from-accent to-secondary"
              },
              {
                icon: Lightbulb,
                title: "Our Vision",
                text: "To become India's most trusted internship platform, creating a bridge between education and employment that transforms lives and builds careers for millions of students.",
                gradient: "from-secondary to-accent"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, rotateX: 5 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 p-8 rounded-2xl shadow-lg h-full relative overflow-hidden group">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                    />
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${item.gradient} text-white rounded-lg flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <h3 className="text-2xl mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-transparent relative overflow-hidden transition-colors">
        <motion.div
          className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={28} />
                  </motion.div>
                  <h3 className="text-xl mb-3">{value.title}</h3>
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
            <h2 className="text-3xl md:text-4xl mb-4">Our Journey</h2>
            <p className="text-muted-foreground">
              Milestones that shaped InternHub
            </p>
          </FadeIn>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-accent to-secondary text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Calendar size={24} />
                  </motion.div>
                  {index < timeline.length - 1 && (
                    <motion.div
                      className="w-0.5 h-full bg-gradient-to-b from-accent to-secondary mt-2"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      style={{ originY: 0 }}
                    />
                  )}
                </div>
                <motion.div
                  className="pb-8"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary mb-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  >
                    {item.year}
                  </motion.div>
                  <p className="text-muted-foreground">{item.event}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to your success
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 10 }}
                style={{ transformStyle: "preserve-3d" }}
                className="text-center"
              >
                <motion.div
                  className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl shadow-xl`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {member.name.split(' ').map(n => n[0]).join('')}
                </motion.div>
                <h3 className="mb-1">{member.name}</h3>
                <div className="text-accent mb-2">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
