import { useState } from "react";
import { Link } from "react-router";
import { Filter, Clock, TrendingUp, Code, Megaphone, Database, Palette, Shield, DollarSign, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "../components/AnimatedSection";

export function Programs() {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const programs = [
    {
      title: "Full Stack Web Development",
      domain: "IT & Development",
      duration: "6 months",
      level: "Intermediate",
      icon: Code,
      skills: ["React", "Node.js", "MongoDB", "REST APIs", "Git"],
      tools: ["VS Code", "Postman", "GitHub", "Heroku"],
      description: "Build complete web applications from front-end to back-end",
    },
    {
      title: "Mobile App Development",
      domain: "IT & Development",
      duration: "6 months",
      level: "Intermediate",
      icon: Code,
      skills: ["React Native", "JavaScript", "Firebase", "API Integration"],
      tools: ["VS Code", "Expo", "Android Studio", "Xcode"],
      description: "Create cross-platform mobile applications for iOS and Android",
    },
    {
      title: "Digital Marketing Strategy",
      domain: "Marketing",
      duration: "3 months",
      level: "Beginner",
      icon: Megaphone,
      skills: ["SEO", "Social Media Marketing", "Content Marketing", "Google Analytics", "Email Marketing"],
      tools: ["Google Ads", "Facebook Ads Manager", "Canva", "Mailchimp"],
      description: "Master digital marketing channels and campaign management",
    },
    {
      title: "Social Media Management",
      domain: "Marketing",
      duration: "3 months",
      level: "Beginner",
      icon: Megaphone,
      skills: ["Content Creation", "Community Management", "Influencer Marketing", "Analytics"],
      tools: ["Hootsuite", "Buffer", "Canva", "Instagram Insights"],
      description: "Learn to manage and grow social media presence for brands",
    },
    {
      title: "Data Science & Analytics",
      domain: "Data Science",
      duration: "6 months",
      level: "Advanced",
      icon: Database,
      skills: ["Python", "Machine Learning", "Data Visualization", "SQL", "Statistics"],
      tools: ["Jupyter", "Pandas", "Scikit-learn", "Tableau", "Power BI"],
      description: "Analyze data and build predictive models for business insights",
    },
    {
      title: "Business Intelligence",
      domain: "Data Science",
      duration: "3 months",
      level: "Intermediate",
      icon: Database,
      skills: ["SQL", "Data Visualization", "Dashboard Design", "Excel", "Reporting"],
      tools: ["Power BI", "Tableau", "Excel", "Google Data Studio"],
      description: "Transform data into actionable business insights",
    },
    {
      title: "UI/UX Design",
      domain: "Design",
      duration: "3 months",
      level: "Beginner",
      icon: Palette,
      skills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
      tools: ["Figma", "Adobe XD", "Miro", "InVision"],
      description: "Design user-centered digital experiences",
    },
    {
      title: "Graphic Design",
      domain: "Design",
      duration: "3 months",
      level: "Beginner",
      icon: Palette,
      skills: ["Typography", "Color Theory", "Branding", "Layout Design"],
      tools: ["Adobe Illustrator", "Photoshop", "Canva", "Figma"],
      description: "Create stunning visual designs for digital and print media",
    },
    {
      title: "Cybersecurity Fundamentals",
      domain: "Cybersecurity",
      duration: "6 months",
      level: "Intermediate",
      icon: Shield,
      skills: ["Network Security", "Ethical Hacking", "Penetration Testing", "Security Protocols"],
      tools: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite"],
      description: "Protect systems and networks from cyber threats",
    },
    {
      title: "Financial Analysis",
      domain: "Finance",
      duration: "3 months",
      level: "Intermediate",
      icon: DollarSign,
      skills: ["Financial Modeling", "Excel", "Valuation", "Ratio Analysis", "Forecasting"],
      tools: ["Excel", "Bloomberg Terminal", "QuickBooks", "Tableau"],
      description: "Analyze financial data and make investment recommendations",
    },
  ];

  const domains = ["All", "IT & Development", "Marketing", "Data Science", "Design", "Cybersecurity", "Finance"];
  const durations = ["All", "3 months", "6 months"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredPrograms = programs.filter((program) => {
    const domainMatch = selectedDomain === "All" || program.domain === selectedDomain;
    const durationMatch = selectedDuration === "All" || program.duration === selectedDuration;
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
      <section className="py-8 bg-white dark:bg-black/40 dark:backdrop-blur-md border-b border-border sticky top-16 z-40 transition-colors">
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
        </div>
      </section>
    </div>
  );
}