import { CreditCard, ShieldCheck, Clock, CheckCircle, Package, ArrowRight, Star, Sparkles, Building2, Globe, Lock, Info, Landmark } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FadeIn, ScaleIn } from "../components/AnimatedSection";
import FrostedGlass from "../components/FrostedGlass";
import { useState } from "react";

export function Payment() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'upi' | 'netbanking'>('card');

  const programs = [
    { id: "web", name: "Web Development", category: "Technical" },
    { id: "app", name: "App Development", category: "Technical" },
    { id: "data", name: "Data Science", category: "Data" },
    { id: "ui", name: "UI/UX Design", category: "Design" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary to-secondary dark:bg-transparent text-white pt-32 pb-20 md:py-32 transition-colors relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Lock size={16} />
            <span className="text-sm">Secure Checkout</span>
          </motion.div>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase tracking-tight">Complete Registration</h1>
            <p className="text-lg md:text-xl text-white/90">
              Secure your spot in the professional internship program and start your career journey today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Payment Section */}
      <section className="py-20 bg-white dark:bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Payment Forms */}
            <div className="lg:col-span-2 space-y-8">
              <FrostedGlass className="p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center">
                    <Package size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">Professional Subscription</h2>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Select Program & Domain</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Select Program</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none font-medium">
                      {programs.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Duration</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none font-medium">
                      <option>1 Month (Fast-track)</option>
                      <option>2 Months (Standard)</option>
                      <option>3 Months (Comprehensive)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <CreditCard size={20} className="text-accent" />
                    Payment Method
                  </h3>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: 'card', icon: CreditCard, label: 'Card' },
                      { id: 'upi', icon: Globe, label: 'UPI' },
                      { id: 'netbanking', icon: Landmark, label: 'Bank' }
                    ].map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id as any)}
                        className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${selectedMethod === method.id ? 'border-accent bg-accent/5' : 'border-black/5 dark:border-white/10 hover:border-accent/30'}`}
                      >
                        <method.icon size={24} className={selectedMethod === method.id ? 'text-accent' : 'text-muted-foreground'} />
                        <span className="text-xs font-bold uppercase tracking-widest">{method.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4 pt-4">
                    <input
                      type="text"
                      placeholder="Cardholder Name"
                      className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/dashboard')}
                    className="w-full py-4 bg-accent text-white rounded-xl font-bold tracking-[0.2em] uppercase shadow-lg shadow-accent/20 flex items-center justify-center gap-3 mt-8 group"
                  >
                    Pay Now ₹999
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </FrostedGlass>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: ShieldCheck, label: "Secure Payment" },
                  { icon: Clock, label: "24/7 Support" },
                  { icon: CheckCircle, label: "Certified" },
                  { icon: Star, label: "Expert Mentors" }
                ].map((item, i) => (
                  <FrostedGlass key={i} className="p-4 rounded-2xl text-center">
                    <item.icon size={20} className="mx-auto mb-2 text-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-widest block">{item.label}</span>
                  </FrostedGlass>
                ))}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <FrostedGlass className="p-8 rounded-[2rem] shadow-xl relative overflow-hidden ring-2 ring-accent/20">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-widest">
                    <Star size={20} className="text-accent" />
                    Summary
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-muted-foreground">Base Program</span>
                      <span className="font-bold">₹1,999</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-muted-foreground">Discount (Intro)</span>
                      <span className="text-accent font-bold">-₹1,000</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-lg font-bold">Total Amount</span>
                      <span className="text-2xl font-black text-accent">₹999</span>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-muted/30 rounded-xl space-y-3">
                    <div className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Info size={14} className="shrink-0 mt-0.5" />
                      <p>Refunds are available within 24 hours of registration before project access.</p>
                    </div>
                  </div>
                </FrostedGlass>

                <FrostedGlass className="p-6 rounded-2xl">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0">
                      <Lock size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold mb-1">Encrypted</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">256-bit SSL encrypted secure connection.</p>
                    </div>
                  </div>
                </FrostedGlass>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
