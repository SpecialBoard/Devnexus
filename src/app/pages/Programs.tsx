import { useState } from "react";
import { Link } from "react-router";
import { Filter, Clock, TrendingUp, Code, Megaphone, Database, Palette, Shield, DollarSign, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "../components/AnimatedSection";

export function Programs() {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const activePrograms = [
    {
      title: "Full Stack Web Development",
      domain: "IT & Development",
      duration: "1-3 months",
      level: "Intermediate",
      icon: Code,
      skills: ["React", "Node.js", "MongoDB", "REST APIs", "Git"],
      tools: ["VS Code", "Postman", "GitHub", "Heroku"],
      description: "Build complete web applications from front-end to back-end",
    },
    {
      title: "Mobile App Development",
      domain: "IT & Development",
      duration: "1-3 months",
      level: "Intermediate",
      icon: Code,
      skills: ["React Native", "JavaScript", "Firebase", "API Integration"],
      tools: ["VS Code", "Expo", "Android Studio", "Xcode"],
      description: "Create cross-platform mobile applications for iOS and Android",
    },
    {
      title: "Data Science & Analytics",
      domain: "Data Science",
      duration: "1-3 months",
      level: "Advanced",
      icon: Database,
      skills: ["Python", "Machine Learning", "Data Visualization", "SQL", "Statistics"],
      tools: ["Jupyter", "Pandas", "Scikit-learn", "Tableau", "Power BI"],
      description: "Analyze data and build predictive models for business insights",
    },
    {
      title: "UI/UX Design",
      domain: "Design",
      duration: "1-3 months",
      level: "Beginner",
      icon: Palette,
      skills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
      tools: ["Figma", "Adobe XD", "Miro", "InVision"],
      description: "Design user-centered digital experiences",
    },
  ];

  const comingSoonPrograms = [
    {
      title: "Digital Marketing Strategy",
      domain: "Marketing",
      icon: Megaphone,
      description: "Master digital marketing channels and campaign management",
    },
    {
      title: "Social Media Management",
      domain: "Marketing",
      icon: Megaphone,
      description: "Learn to manage and grow social media presence for brands",
    },
    {
      title: "Business Intelligence",
      domain: "Data Science",
      icon: Database,
      description: "Transform data into actionable business insights",
    },
    {
      title: "Graphic Design",
      domain: "Design",
      icon: Palette,
      description: "Create stunning visual designs for digital and print media",
    },
    {
      title: "Cybersecurity Fundamentals",
      domain: "Cybersecurity",
      icon: Shield,
      description: "Protect systems and networks from cyber threats",
    },
    {
      title: "Financial Analysis",
      domain: "Finance",
      icon: DollarSign,
      description: "Analyze financial data and make investment recommendations",
    },
  ];

  const domains = ["All", "IT & Development", "Data Science", "Design"];
  const durations = ["All", "1 Month", "2 Months", "3 Months"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredPrograms = activePrograms.filter((program) => {
    const domainMatch = selectedDomain === "All" || program.domain === selectedDomain;
    const durationMatch = selectedDuration === "All" ||
      (selectedDuration === "1 Month" && program.duration.includes("1")) ||
      (selectedDuration === "2 Months" && program.duration.includes("2")) ||
      (selectedDuration === "3 Months" && program.duration.includes("3"));
    const levelMatch = selectedLevel === "All" || program.level === selectedLevel;
    return domainMatch && durationMatch && levelMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700";
      case "Intermediate":
        return "bg-blue-100 text-blue-700";
      case "Advanced":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Internship Programs</h1>
            <p className="text-xl text-white/90">
              Explore our comprehensive range of industry-relevant internship programs designed to accelerate your career.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-black/40 dark:backdrop-blur-md border-b border-border md:sticky md:top-16 z-40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-muted-foreground" />
            <span className="font-medium">Filter Programs</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {/* Domain Filter */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm mb-2 text-muted-foreground">Domain</label>
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-white dark:bg-white/10 dark:text-white"
              >
                {domains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm mb-2 text-muted-foreground">Duration</label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-white dark:bg-white/10 dark:text-white"
              >
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm mb-2 text-muted-foreground">Difficulty Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-white dark:bg-white/10 dark:text-white"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 bg-muted dark:bg-transparent transition-colors min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-medium text-foreground">{filteredPrograms.length}</span> programs
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <motion.div
                    key={`${program.title}-${selectedDomain}-${selectedDuration}-${selectedLevel}`}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    layout
                  >
                    <div className="dark:bg-white/5 dark:backdrop-blur-sm rounded-lg p-6 border border-border hover:shadow-xl transition-all h-full dark:border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon size={24} />
                        </motion.div>
                        <motion.span
                          className={`px-3 py-1 rounded-full text-sm ${getLevelColor(program.level)}`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                        >
                          {program.level}
                        </motion.span>
                      </div>

                      <h3 className="text-xl mb-2">{program.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{program.description}</p>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm">
                          <Clock size={16} className="text-muted-foreground mr-2" />
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="ml-2 font-medium">{program.duration}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <TrendingUp size={16} className="text-muted-foreground mr-2" />
                          <span className="text-muted-foreground">Domain:</span>
                          <span className="ml-2 font-medium">{program.domain}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm font-medium mb-2">Skills you'll learn:</div>
                        <div className="flex flex-wrap gap-2">
                          {program.skills.map((skill, idx) => (
                            <motion.span
                              key={idx}
                              className="px-2 py-1 bg-muted text-sm rounded"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.05 + idx * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="text-sm font-medium mb-2">Tools & Technologies:</div>
                        <div className="flex flex-wrap gap-2">
                          {program.tools.map((tool, idx) => (
                            <motion.span
                              key={idx}
                              className="px-2 py-1 bg-accent/10 text-accent text-sm rounded"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.05 + idx * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {tool}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          to="/payment"
                          className="flex items-center justify-center w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                        >
                          Apply Now
                          <ArrowRight size={18} className="ml-2" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {filteredPrograms.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <p className="text-muted-foreground">No programs match your filters. Try adjusting your selection.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Coming Soon Section */}
          <div className="mt-24">
            <FadeIn className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full mb-4">
                <Sparkles size={16} />
                <span className="text-sm font-medium">Coming Soon</span>
              </div>
              <h2 className="text-3xl md:text-4xl mb-4">Upcoming Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're constantly expanding our curriculum. These programs are currently under development.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoonPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.6, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="grayscale"
                  >
                    <div className="p-6 bg-card/20 backdrop-blur-sm border border-border/50 rounded-2xl h-full relative overflow-hidden group">
                      <div className="absolute top-4 right-4 bg-muted/50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        Notify Me
                      </div>
                      <div className="w-12 h-12 bg-muted/50 text-muted-foreground rounded-lg flex items-center justify-center mb-4">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-lg mb-2">{program.title}</h3>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}