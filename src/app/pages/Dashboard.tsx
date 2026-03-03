import { LayoutDashboard, FileText, Upload, Award, Calendar, CheckCircle, Clock, TrendingUp, Sparkles } from "lucide-react";
import * as Progress from "@radix-ui/react-progress";
import { motion } from "motion/react";
import { FadeIn, SlideIn, ScaleIn } from "../components/AnimatedSection";
import FrostedGlass from "../components/FrostedGlass";

export function Dashboard() {
  const progress = 65; // Example progress percentage

  const currentProject = {
    title: "E-commerce Platform Development",
    description: "Build a full-featured online shopping platform with cart, checkout, and payment integration",
    deadline: "March 15, 2026",
    status: "In Progress",
  };

  const weeklyTasks = [
    { id: 1, title: "Complete product listing page design", status: "completed", dueDate: "Feb 28" },
    { id: 2, title: "Implement shopping cart functionality", status: "completed", dueDate: "Mar 1" },
    { id: 3, title: "Set up payment gateway integration", status: "in-progress", dueDate: "Mar 5" },
    { id: 4, title: "Create user authentication system", status: "pending", dueDate: "Mar 8" },
    { id: 5, title: "Write API documentation", status: "pending", dueDate: "Mar 10" },
  ];

  const recentSubmissions = [
    { id: 1, name: "Week 8 Progress Report", date: "Feb 28, 2026", status: "Reviewed", grade: "A" },
    { id: 2, name: "Shopping Cart Module", date: "Feb 25, 2026", status: "Reviewed", grade: "A+" },
    { id: 3, name: "Database Schema Design", date: "Feb 20, 2026", status: "Reviewed", grade: "A" },
  ];

  const upcomingMeetings = [
    { title: "Weekly Mentor Check-in", date: "Mar 4, 2026", time: "3:00 PM" },
    { title: "Mid-term Evaluation", date: "Mar 12, 2026", time: "2:00 PM" },
  ];

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: FileText, label: "My Project" },
    { icon: Upload, label: "Submissions" },
    { icon: Calendar, label: "Schedule" },
    { icon: Award, label: "Certificate" }
  ];

  return (
    <div className="min-h-screen bg-muted/30 dark:bg-transparent transition-colors">
      {/* Dashboard Header */}
      <section className="bg-gradient-to-r from-primary to-secondary dark:bg-transparent text-white pt-24 pb-12 transition-colors relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-2 mb-2 text-white/80">
                <Sparkles size={16} />
                <span className="text-sm font-medium uppercase tracking-widest">Student Portal</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black leading-tight">Welcome back, Priya! 👋</h1>
              <p className="text-white/70 mt-1">Here's what's happening with your internship</p>
            </motion.div>

            <FrostedGlass className="px-4 py-2 rounded-full flex items-center gap-3 border-white/20">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-xs uppercase shadow-lg">PK</div>
              <div className="pr-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/50 leading-none">Status</p>
                <p className="text-xs font-bold leading-tight">Pro Member</p>
              </div>
            </FrostedGlass>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Desktop Sidebar / Mobile Nav Scroll */}
              <FrostedGlass className="p-2 rounded-2xl md:p-3 overflow-x-auto md:overflow-visible flex md:block gap-2 no-scrollbar border-white/10 shadow-xl">
                {sidebarItems.map((item, i) => (
                  <button
                    key={i}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap md:w-full ${item.active
                        ? "bg-accent text-white shadow-lg shadow-accent/20"
                        : "text-muted-foreground hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                  >
                    <item.icon size={20} />
                    <span className="font-bold text-sm">{item.label}</span>
                  </button>
                ))}
              </FrostedGlass>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Certificate Progress */}
              <FrostedGlass className="p-8 rounded-[2rem] shadow-xl relative overflow-hidden group col-span-1 md:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight mb-1">Certificate Progress</h2>
                    <p className="text-sm text-muted-foreground">Keep pushing! You're almost there.</p>
                  </div>
                  <span className="text-4xl font-black text-accent">{progress}%</span>
                </div>
                <Progress.Root
                  className="relative overflow-hidden bg-black/10 dark:bg-white/10 rounded-full w-full h-4 ring-1 ring-black/5"
                  value={progress}
                >
                  <Progress.Indicator
                    className="bg-accent w-full h-full transition-transform duration-1000 ease-out"
                    style={{ transform: `translateX(-${100 - progress}%)` }}
                  />
                </Progress.Root>
              </FrostedGlass>

              {/* Current Project */}
              <FrostedGlass className="p-8 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center">
                    <TrendingUp size={20} />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {currentProject.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{currentProject.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{currentProject.description}</p>
                <div className="flex items-center text-xs font-bold text-muted-foreground gap-2 pt-4 border-t border-black/5 dark:border-white/5 uppercase tracking-wider">
                  <Clock size={14} className="text-accent" />
                  <span>Deadline: {currentProject.deadline}</span>
                </div>
              </FrostedGlass>

              {/* Upcoming Meetings */}
              <FrostedGlass className="p-8 rounded-[2rem] shadow-xl relative overflow-hidden h-full group">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Calendar size={20} className="text-accent" />
                  Upcoming Meetings
                </h2>
                <div className="space-y-4">
                  {upcomingMeetings.map((meeting, index) => (
                    <div key={index} className="p-4 bg-muted/50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 hover:border-accent/30 transition-colors">
                      <h4 className="font-bold mb-3 text-sm">{meeting.title}</h4>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                          <Calendar size={12} className="mr-1 text-accent" />
                          <span>{meeting.date}</span>
                        </div>
                        <div className="flex items-center text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                          <Clock size={12} className="mr-1 text-accent" />
                          <span>{meeting.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </FrostedGlass>
            </div>

            {/* Weekly Tasks */}
            <FrostedGlass className="p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FileText size={24} className="text-accent" />
                Your Weekly Tasks
              </h2>
              <div className="grid gap-4">
                {weeklyTasks.map((task) => (
                  <motion.div
                    key={task.id}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center justify-between p-5 bg-muted/30 dark:bg-white/5 rounded-2xl transition-all border border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {task.status === "completed" ? (
                        <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center shrink-0">
                          <CheckCircle size={20} />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0">
                          <Clock size={20} />
                        </div>
                      )}
                      <div>
                        <p className={`font-bold transition-all ${task.status === "completed" ? "line-through text-muted-foreground" : ""}`}>
                          {task.title}
                        </p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Due: {task.dueDate}</p>
                      </div>
                    </div>
                    {task.status === "completed" && (
                      <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        Done
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </FrostedGlass>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Recent Submissions */}
              <FrostedGlass className="p-8 rounded-[2rem] shadow-xl relative overflow-hidden h-full group md:col-span-2">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Upload size={20} className="text-accent" />
                  Recent Submissions
                </h2>
                <div className="space-y-4">
                  {recentSubmissions.map((submission) => (
                    <div key={submission.id} className="flex items-center justify-between p-4 bg-muted/40 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/10">
                      <div>
                        <h4 className="font-bold text-sm mb-1">{submission.name}</h4>
                        <div className="flex gap-3 items-center">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{submission.date}</span>
                          <span className="text-[10px] font-black text-accent uppercase tracking-widest ring-1 ring-accent/20 px-1.5 py-0.5 rounded">{submission.status}</span>
                        </div>
                      </div>
                      <div className="text-lg font-black text-accent bg-accent/10 px-3 py-1 rounded-lg ring-1 ring-accent/30">
                        {submission.grade}
                      </div>
                    </div>
                  ))}
                </div>
              </FrostedGlass>

              {/* Quick Upload */}
              <FrostedGlass className="p-8 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-xl md:col-span-1 border-dashed border-2 bird-accent/50">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6 ring-4 ring-accent/5">
                  <Upload size={32} />
                </div>
                <h3 className="font-bold mb-2">New Submission</h3>
                <p className="text-xs text-muted-foreground mb-6 leading-relaxed">Submit your project milestones for review.</p>
                <button className="w-full py-3 bg-accent text-white rounded-xl font-bold tracking-widest uppercase text-[10px] shadow-lg shadow-accent/20 hover:scale-105 transition-transform">
                  Upload Files
                </button>
              </FrostedGlass>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
