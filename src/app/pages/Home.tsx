import { Link } from "react-router";
import { ArrowRight, Code, Megaphone, Database, Palette, Shield, TrendingUp, CheckCircle, Play, Star, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { FadeIn, SlideIn, ScaleIn } from "../components/AnimatedSection";
import { useRef } from "react";
import GradualBlur from "../components/GradualBlur";
import GlassSurface from "../components/GlassSurface";

export function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const categories = [
    { icon: Code, title: "IT & Development", description: "Web, mobile & software development", color: "from-blue-500 to-cyan-500" },
    { icon: Megaphone, title: "Digital Marketing", description: "SEO, social media & content marketing", color: "from-pink-500 to-rose-500" },
    { icon: Database, title: "Data Science", description: "Analytics, ML & data visualization", color: "from-purple-500 to-indigo-500" },
    { icon: Palette, title: "UI/UX Design", description: "Product design & user research", color: "from-orange-500 to-amber-500" },
    { icon: Shield, title: "Cybersecurity", description: "Network security & ethical hacking", color: "from-red-500 to-pink-500" },
    { icon: TrendingUp, title: "Finance", description: "Financial analysis & accounting", color: "from-green-500 to-emerald-500" },
  ];

  const steps = [
    { number: "01", title: "Sign Up", description: "Create your account in minutes" },
    { number: "02", title: "Choose Program", description: "Select from diverse internship options" },
    { number: "03", title: "Complete Projects", description: "Work on real industry projects" },
    { number: "04", title: "Get Certificate", description: "Earn recognized certification" },
  ];

  const projects = [
    { title: "E-commerce Platform Development", skills: "React, Node.js, MongoDB", duration: "3 months", level: "Intermediate" },
    { title: "Social Media Marketing Campaign", skills: "Instagram, Facebook Ads, Analytics", duration: "2 months", level: "Beginner" },
    { title: "ML Prediction Model", skills: "Python, TensorFlow, Pandas", duration: "3 months", level: "Advanced" },
    { title: "Mobile App UI Design", skills: "Figma, Prototyping, User Testing", duration: "2 months", level: "Intermediate" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      university: "IIT Delhi",
      quote: "This internship gave me hands-on experience that I couldn't get anywhere else. Highly recommend!",
      image: "https://images.unsplash.com/photo-1758598304540-1ac6fd7d477b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwb2ZmaWNlfGVufDF8fHx8MTc3MjQzODEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Rahul Verma",
      university: "NIT Trichy",
      quote: "The projects were challenging and industry-relevant. This experience boosted my resume significantly.",
      image: "https://images.unsplash.com/photo-1549923746-9507eec27243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBtYWxlJTIwc3R1ZGVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI0NzA0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Ananya Patel",
      university: "VIT Vellore",
      quote: "Worth every penny! The mentorship and project guidance were exceptional.",
      image: "https://images.unsplash.com/photo-1679745776853-4fce2fbc150a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBncmFkdWF0ZSUyMHByb2Zlc3Npb25hbCUyMHNtaWxpbmd8ZW58MXx8fHwxNzcyNDcwNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative bg-muted/30 dark:bg-transparent text-foreground dark:text-white overflow-hidden">
        {/* Animated Background Elements for Light Mode */}
        <motion.div
          className="absolute inset-0 opacity-20 dark:hidden"
          style={{ y: heroY }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/10 backdrop-blur-sm rounded-full mb-6 text-foreground dark:text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Sparkles size={16} className="text-accent" />
                  <span className="text-sm">Trusted by 5000+ Students</span>
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground dark:text-white">
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Secure Your Internship
                  </motion.span>
                  <motion.span
                    className="block text-accent"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    With Real Industry Projects
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p
                className="text-xl text-muted-foreground dark:text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Bridge the gap between education and employment. Get hands-on experience with real projects and earn recognized certifications.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/payment">
                    <GlassSurface
                      width={200}
                      height={56}
                      borderRadius={8}
                      className="bg-accent text-primary dark:text-white hover:bg-accent/90 shadow-lg shadow-accent/50"
                    >
                      <span className="flex items-center text-black dark:text-white font-medium">
                        Apply Now
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="ml-2" size={20} />
                        </motion.div>
                      </span>
                    </GlassSurface>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/programs">
                    <GlassSurface
                      width={200}
                      height={56}
                      borderRadius={8}
                      className="bg-primary/10 dark:bg-white/10 hover:bg-primary/20 dark:hover:bg-white/20 shadow-lg"
                    >
                      <span className="flex items-center text-black dark:text-white font-medium w-full justify-center h-full">
                        Browse Programs
                      </span>
                    </GlassSurface>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="hidden md:block relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ scale: heroScale }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1754531976838-436a70636c96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHN0dWRlbnRzJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzcyNDcwNDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students collaborating"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-card text-foreground px-6 py-3 rounded-full shadow-xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-accent" />
                  <span className="font-medium">5000+ Students</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-accent text-white px-6 py-3 rounded-full shadow-xl"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Star size={20} fill="white" />
                  <span className="font-medium">4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Internship Categories */}
      <section className="py-20 bg-white dark:bg-transparent relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full mb-4">
                <Sparkles size={16} />
                <span className="text-sm font-medium">Explore Opportunities</span>
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl mb-4">Internship Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from a wide range of industry-relevant programs designed to build your skills
            </p>
          </FadeIn>

          <section className="relative h-[500px] overflow-hidden rounded-xl mt-8">
            <div className="h-full overflow-y-auto px-2 pb-24 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                      <motion.div
                        className="p-6 bg-card dark:bg-card/40 dark:backdrop-blur-sm border border-border rounded-[2rem] hover:shadow-xl transition-all relative overflow-hidden group h-full"
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                        />

                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-br ${category.color} text-white rounded-lg flex items-center justify-center mb-4 relative z-10`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon size={24} />
                        </motion.div>

                        <h3 className="mb-2 relative z-10">{category.title}</h3>
                        <p className="text-muted-foreground relative z-10">{category.description}</p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <GradualBlur
              target="parent"
              position="bottom"
              height="8rem"
              strength={3}
              divCount={3}
              curve="bezier"
              exponential
              opacity={1}
            />
          </section>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-muted to-white dark:from-transparent dark:to-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent process to kickstart your career
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-accent to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl relative z-10 shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.number}
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent to-secondary"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    style={{ originX: 0 }}
                  />
                )}

                <h3 className="mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Samples */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Project Samples</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world projects that prepare you for industry challenges
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="p-6 bg-card dark:bg-card/40 dark:backdrop-blur-sm border border-border rounded-[2rem] hover:shadow-xl transition-all"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="mb-3">{project.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Play size={16} className="mr-2" />
                      <span className="font-medium">Skills:</span>
                      <span className="ml-2">{project.skills}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle size={16} className="mr-2" />
                      <span className="font-medium">Duration:</span>
                      <span className="ml-2">{project.duration}</span>
                    </div>
                  </div>
                  <motion.span
                    className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.level}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-white dark:from-transparent dark:to-transparent relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground">
              Everything you need to launch your career
            </p>
          </FadeIn>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10 }}
          >
            <div className="bg-card dark:bg-card/40 dark:backdrop-blur-md rounded-[2.5rem] shadow-2xl p-8 md:p-12 border-2 border-accent relative overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className="text-center mb-8 relative z-10">
                <motion.div
                  className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm mb-4"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Most Popular
                </motion.div>
                <h3 className="text-3xl mb-2">Internship Program</h3>
                <div className="text-5xl mb-2">
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    ₹3,000
                  </motion.span>
                </div>
                <p className="text-muted-foreground">One-time payment • Lifetime access</p>
              </div>

              <ul className="space-y-4 mb-8 relative z-10">
                {[
                  "3 or 6 month internship program",
                  "Real industry projects & assignments",
                  "Weekly evaluations & feedback",
                  "Dedicated mentor support",
                  "Official internship certificate",
                  "Letter of recommendation (on merit)",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/payment" className="block w-full text-center">
                  <GlassSurface
                    width={400}
                    height={56}
                    borderRadius={8}
                    className="bg-gradient-to-r from-accent to-secondary text-primary dark:text-white hover:shadow-xl transition-all relative overflow-hidden group w-full"
                    style={{ width: "100%" }}
                  >
                    <span className="relative z-10 w-full text-center block text-black dark:text-white font-medium">Get Started Now</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-secondary to-accent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </GlassSurface>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What Students Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students who transformed their careers
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="p-6 bg-card dark:bg-card/40 dark:backdrop-blur-sm border border-border rounded-[2rem] hover:shadow-2xl transition-all h-full">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                      >
                        <Star size={16} className="text-accent fill-accent" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                    </motion.div>
                    <div>
                      <div>{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.university}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <motion.section
        className="py-16 bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 dark:from-transparent dark:via-transparent dark:to-transparent text-foreground dark:text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Start Your Career With Real Experience
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground dark:text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't wait for opportunities. Create them with industry-relevant skills.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/payment" className="inline-block">
              <GlassSurface
                width={200}
                height={56}
                borderRadius={8}
                className="bg-card text-primary dark:text-white hover:bg-card/90 shadow-2xl"
              >
                <span className="flex items-center text-black dark:text-white font-medium">
                  Apply Now
                  <ArrowRight className="ml-2" size={20} />
                </span>
              </GlassSurface>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
