import { LayoutDashboard, FileText, Upload, Award, Calendar, CheckCircle, Clock, TrendingUp } from "lucide-react";
import * as Progress from "@radix-ui/react-progress";

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

  return (
    <div className="min-h-screen bg-muted dark:bg-transparent transition-colors">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-primary to-secondary dark:bg-transparent text-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl mb-2">Welcome back, Priya! 👋</h1>
          <p className="text-white/80">Here's what's happening with your internship</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-lg shadow-sm p-4 sticky top-24 transition-colors">
              <nav className="space-y-2">
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 bg-accent text-white rounded-lg"
                >
                  <LayoutDashboard size={20} />
                  <span>Dashboard</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  <FileText size={20} />
                  <span>My Project</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  <Upload size={20} />
                  <span>Submissions</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  <Calendar size={20} />
                  <span>Schedule</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  <Award size={20} />
                  <span>Certificate</span>
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Certificate Progress */}
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-lg shadow-sm p-6 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl">Certificate Progress</h2>
                <span className="text-2xl font-bold text-accent">{progress}%</span>
              </div>
              <Progress.Root
                className="relative overflow-hidden bg-muted rounded-full w-full h-4"
                value={progress}
              >
                <Progress.Indicator
                  className="bg-accent w-full h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${100 - progress}%)` }}
                />
              </Progress.Root>
              <p className="text-sm text-muted-foreground mt-3">
                Keep up the great work! You're {100 - progress}% away from completing your internship.
              </p>
            </div>

            {/* Current Project */}
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-lg shadow-sm p-6 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl">Current Project</h2>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {currentProject.status}
                </span>
              </div>
              <h3 className="mb-2">{currentProject.title}</h3>
              <p className="text-muted-foreground mb-4">{currentProject.description}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock size={16} className="mr-2" />
                <span>Deadline: {currentProject.deadline}</span>
              </div>
            </div>

            {/* Weekly Tasks */}
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-lg shadow-sm p-6 transition-colors">
              <h2 className="text-xl mb-4">Weekly Tasks</h2>
              <div className="space-y-3">
                {weeklyTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start justify-between p-4 bg-muted dark:bg-white/5 dark:backdrop-blur-sm rounded-lg transition-colors border border-transparent dark:border-white/10"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      {task.status === "completed" ? (
                        <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      ) : task.status === "in-progress" ? (
                        <TrendingUp size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Clock size={20} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className={task.status === "completed" ? "line-through text-muted-foreground" : ""}>
                          {task.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Due: {task.dueDate}</p>
                      </div>
                    </div>
                    {task.status === "completed" && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        Done
                      </span>
                    )}
                    {task.status === "in-progress" && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        In Progress
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Submissions */}
              <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-lg shadow-sm p-6 transition-colors">
                <h2 className="text-xl mb-4">Recent Submissions</h2>
                <div className="space-y-3">
                  {recentSubmissions.map((submission) => (
                    <div key={submission.id} className="p-3 border border-border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm">{submission.name}</h4>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          {submission.grade}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{submission.date}</p>
                      <p className="text-xs text-accent mt-1">{submission.status}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Meetings */}
              <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-lg shadow-sm p-6 transition-colors">
                <h2 className="text-xl mb-4">Upcoming Meetings</h2>
                <div className="space-y-3">
                  {upcomingMeetings.map((meeting, index) => (
                    <div key={index} className="p-4 bg-accent/10 rounded-lg">
                      <h4 className="mb-2">{meeting.title}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={16} className="mr-2" />
                        <span>{meeting.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock size={16} className="mr-2" />
                        <span>{meeting.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upload Section */}
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-lg shadow-sm p-6 transition-colors">
              <h2 className="text-xl mb-4">Submit Your Work</h2>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="mb-2">Upload Your Files</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Drag and drop your files here or click to browse
                </p>
                <button className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                  Choose Files
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
