import { UserPlus, BookOpen, Briefcase, BarChart3, FileText, Award, ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Registration",
      icon: UserPlus,
      description: "Sign up on our platform with your basic details",
      details: [
        "Create your account with email verification",
        "Complete your student profile",
        "Upload your academic documents",
        "Choose your preferred internship domain",
      ],
    },
    {
      number: "02",
      title: "Orientation",
      icon: BookOpen,
      description: "Attend a comprehensive orientation session",
      details: [
        "Introduction to the program structure",
        "Meet your assigned mentor",
        "Access to learning resources and tools",
        "Guidelines for project submissions",
      ],
    },
    {
      number: "03",
      title: "Project Assignment",
      icon: Briefcase,
      description: "Receive your first real-world project",
      details: [
        "Project brief with clear objectives",
        "Access to necessary tools and resources",
        "Timeline and milestone breakdown",
        "Direct communication channel with mentor",
      ],
    },
    {
      number: "04",
      title: "Weekly Evaluations",
      icon: BarChart3,
      description: "Regular feedback and progress tracking",
      details: [
        "Weekly progress check-ins with mentor",
        "Constructive feedback on your work",
        "Performance metrics and improvement areas",
        "Opportunity to ask questions and clarify doubts",
      ],
    },
    {
      number: "05",
      title: "Completion Report",
      icon: FileText,
      description: "Submit your final project and documentation",
      details: [
        "Complete project submission",
        "Detailed documentation of your work",
        "Final presentation to evaluation panel",
        "Peer review and feedback session",
      ],
    },
    {
      number: "06",
      title: "Certification",
      icon: Award,
      description: "Receive your official internship certificate",
      details: [
        "Verified internship completion certificate",
        "Letter of recommendation (for top performers)",
        "LinkedIn badge and digital credentials",
        "Access to alumni network and job board",
      ],
    },
  ];

  const faqs = [
    {
      question: "How long does the internship program last?",
      answer: "Our programs are available in two durations: 3 months and 6 months. You can choose based on your availability and the domain you select. Six-month programs typically involve more complex projects and deeper learning.",
    },
    {
      question: "What happens if I miss a deadline?",
      answer: "We understand that life happens! If you miss a deadline, please communicate with your mentor immediately. We offer reasonable extensions on a case-by-case basis. However, consistent delays may affect your final evaluation and certificate eligibility.",
    },
    {
      question: "Can I do the internship part-time while studying?",
      answer: "Absolutely! Our program is designed to be flexible for students. You can work on projects at your own pace, provided you meet the weekly milestone deadlines. Most students dedicate 10-15 hours per week.",
    },
    {
      question: "Will I get a mentor throughout the program?",
      answer: "Yes! Every intern is assigned a dedicated mentor from the industry who will guide you throughout the program, provide feedback on your work, and help you overcome challenges.",
    },
    {
      question: "Is the certificate recognized by companies?",
      answer: "Yes, our certificates are verified and include details of the projects you completed. Many of our alumni have successfully used these certificates in their job applications and received positive responses from recruiters.",
    },
    {
      question: "What if I need help during the internship?",
      answer: "We provide multiple support channels: direct mentor communication, peer community forum, email support, and weekly group sessions. You're never alone in your learning journey!",
    },
    {
      question: "Can I switch my domain after starting?",
      answer: "Domain switching is possible within the first two weeks of the program. After that, we recommend completing your current program as switching might affect your learning progression and timeline.",
    },
    {
      question: "Do you provide placement assistance?",
      answer: "While we don't guarantee placements, we do provide: access to our job board, resume review services, mock interview sessions, and networking opportunities with our partner companies and alumni.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary dark:bg-transparent text-white py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">How It Works</h1>
            <p className="text-xl text-white/90">
              A clear, step-by-step journey from registration to certification. Your path to real industry experience starts here.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white dark:bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Your Internship Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six simple steps to transform your career
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-muted dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-2xl p-8 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                        <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-lg flex items-center justify-center text-accent">
                          <Icon size={24} />
                        </div>
                      </div>
                      <ul className="space-y-2 mt-6">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-20 bg-accent/5 dark:bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Program Timeline</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What to expect throughout your internship
            </p>
          </div>

          <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-2xl p-8 md:p-12 shadow-lg transition-colors">
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <div className="bg-accent text-white px-4 py-2 rounded-lg font-medium whitespace-nowrap">
                  Week 1
                </div>
                <div>
                  <h4 className="mb-2">Onboarding & Setup</h4>
                  <p className="text-muted-foreground">Account creation, orientation session, mentor assignment, and initial project briefing.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <div className="bg-accent text-white px-4 py-2 rounded-lg font-medium whitespace-nowrap">
                  Week 2-4
                </div>
                <div>
                  <h4 className="mb-2">Project Phase 1</h4>
                  <p className="text-muted-foreground">Begin working on assigned projects, weekly mentor check-ins, learning resources access, and first milestone submission.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <div className="bg-accent text-white px-4 py-2 rounded-lg font-medium whitespace-nowrap">
                  Week 5-8
                </div>
                <div>
                  <h4 className="mb-2">Project Phase 2</h4>
                  <p className="text-muted-foreground">Advanced project work, mid-term evaluation, feedback implementation, and skill development workshops.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <div className="bg-accent text-white px-4 py-2 rounded-lg font-medium whitespace-nowrap">
                  Week 9-12
                </div>
                <div>
                  <h4 className="mb-2">Final Phase</h4>
                  <p className="text-muted-foreground">Project completion, documentation, final presentation preparation, and peer review sessions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent text-white px-4 py-2 rounded-lg font-medium whitespace-nowrap">
                  Week 13+
                </div>
                <div>
                  <h4 className="mb-2">Completion & Beyond</h4>
                  <p className="text-muted-foreground">Final evaluation, certificate issuance, letter of recommendation (if applicable), and alumni network access.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            * Timeline shown is for a 3-month program. 6-month programs have extended project phases.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-transparent transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-muted dark:bg-white/5 dark:backdrop-blur-sm border border-transparent dark:border-white/10 rounded-lg overflow-hidden transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/80 transition-colors group">
                    <span className="font-medium pr-4">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className="text-muted-foreground transition-transform group-data-[state=open]:rotate-180 flex-shrink-0"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-secondary dark:bg-transparent text-white transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who are building their careers with real industry experience.
          </p>
          <a
            href="/payment"
            className="inline-flex items-center px-8 py-4 bg-white text-accent rounded-lg hover:bg-white/90 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
