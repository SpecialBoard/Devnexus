import { useState } from "react";
import { CheckCircle, CreditCard, Shield, Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function Payment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    program: "",
    duration: "",
  });

  const [agreed, setAgreed] = useState(false);

  const programs = [
    "Full Stack Web Development",
    "Mobile App Development",
    "Digital Marketing Strategy",
    "Social Media Management",
    "Data Science & Analytics",
    "Business Intelligence",
    "UI/UX Design",
    "Graphic Design",
    "Cybersecurity Fundamentals",
    "Financial Analysis",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // This would integrate with Razorpay in production
    alert("Payment gateway integration would be implemented here with Razorpay");
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.program && formData.duration && agreed;

  return (
    <div className="min-h-screen bg-muted dark:bg-transparent transition-colors">
      {/* Header */}
      <div className="bg-white dark:bg-black/20 dark:backdrop-blur-md shadow-sm border-b border-border dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center text-accent hover:text-accent/80">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-2xl p-8 shadow-lg transition-colors">
              <h1 className="text-3xl mb-2">Complete Your Registration</h1>
              <p className="text-muted-foreground mb-8">Fill in your details to secure your spot</p>

              <form onSubmit={handlePayment} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-black/20 border border-border dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-black/20 border border-border dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-black/20 border border-border dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="university" className="block mb-2">
                        University/College *
                      </label>
                      <input
                        type="text"
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-black/20 border border-border dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                        placeholder="Enter your institution name"
                      />
                    </div>
                  </div>
                </div>

                {/* Program Selection */}
                <div>
                  <h3 className="text-xl mb-4">Program Selection</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="program" className="block mb-2">
                        Choose Program *
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select a program</option>
                        {programs.map((program) => (
                          <option key={program} value={program}>
                            {program}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="duration" className="block mb-2">
                        Duration *
                      </label>
                      <select
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select duration</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3 p-4 bg-muted dark:bg-white/5 dark:backdrop-blur-sm rounded-lg transition-colors">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <a href="#" className="text-accent hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-accent hover:underline">
                      Privacy Policy
                    </a>
                    . I understand the refund policy and program requirements.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="w-full flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <CreditCard size={20} className="mr-2" />
                  Proceed to Payment
                </button>
              </form>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 p-4 rounded-lg text-center transition-colors">
                <Shield className="text-accent mx-auto mb-2" size={32} />
                <p className="text-sm text-muted-foreground">Secure Payment</p>
              </div>
              <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 p-4 rounded-lg text-center transition-colors">
                <Lock className="text-accent mx-auto mb-2" size={32} />
                <p className="text-sm text-muted-foreground">SSL Encrypted</p>
              </div>
              <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 p-4 rounded-lg text-center transition-colors">
                <CheckCircle className="text-accent mx-auto mb-2" size={32} />
                <p className="text-sm text-muted-foreground">Trusted by 5000+</p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-2xl p-6 shadow-lg sticky top-24 transition-colors">
              <h3 className="text-xl mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Program Fee</span>
                  <span>₹3,000</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">GST (18%)</span>
                  <span>₹540</span>
                </div>
                <div className="flex justify-between text-xl">
                  <span>Total</span>
                  <span className="text-accent">₹3,540</span>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg mb-6">
                <h4 className="font-medium mb-3">What's Included:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete internship program</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real industry projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dedicated mentor support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Weekly evaluations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Official certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Letter of recommendation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted dark:bg-white/5 dark:backdrop-blur-sm p-4 rounded-lg text-sm text-muted-foreground transition-colors">
                <h4 className="font-medium text-foreground mb-2">Refund Policy</h4>
                <p>
                  Full refund available within 7 days of registration if no project work has been started. After project
                  commencement, refunds are subject to evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 bg-white dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-2xl p-8 shadow-lg transition-colors">
          <h3 className="text-xl mb-6">We Accept</h3>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="px-6 py-3 border border-border rounded-lg text-sm">Credit Card</div>
            <div className="px-6 py-3 border border-border rounded-lg text-sm">Debit Card</div>
            <div className="px-6 py-3 border border-border rounded-lg text-sm">UPI</div>
            <div className="px-6 py-3 border border-border rounded-lg text-sm">Net Banking</div>
            <div className="px-6 py-3 border border-border rounded-lg text-sm">Wallets</div>
            <div className="px-6 py-3 border-2 border-accent text-accent rounded-lg text-sm font-medium">
              Powered by Razorpay
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
