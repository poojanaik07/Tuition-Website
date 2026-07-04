import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, RotateCcw, CheckCircle, GraduationCap, Sparkles, Trash2 } from "lucide-react";
import { EnquiryForm as EnquiryFormType } from "../types";

const INITIAL_FORM_STATE: EnquiryFormType = {
  studentName: "",
  parentName: "",
  classLevel: "",
  subject: "",
  mobile: "",
  email: "",
  message: "",
};

export default function Register() {
  const [form, setForm] = useState<EnquiryFormType>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormType, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedEnquiries, setSavedEnquiries] = useState<EnquiryFormType[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load existing local submissions
  useEffect(() => {
    try {
      const existing = localStorage.getItem("tuition_enquiries");
      if (existing) {
        setSavedEnquiries(JSON.parse(existing));
      }
    } catch (e) {
      console.error("Failed to read inquiries from localStorage", e);
    }
  }, []);

  const classOptions = [
    { value: "Class 5", label: "Class 5" },
    { value: "Class 6", label: "Class 6" },
    { value: "Class 7", label: "Class 7" },
    { value: "Class 8", label: "Class 8" },
    { value: "Class 9", label: "Class 9" },
    { value: "Class 10", label: "Class 10" },
  ];

  const subjectOptions = [
    { value: "Mathematics", label: "Mathematics" },
    { value: "Science (Physics, Chemistry, Biology)", label: "Science (Physics, Chem, Bio)" },
    { value: "English Language & Literature", label: "English" },
    { value: "Social Studies", label: "Social Studies" },
    { value: "All Subjects Pack", label: "All Subjects (Full Pack)" },
  ];

  const validate = (): boolean => {
    const tempErrors: Partial<Record<keyof EnquiryFormType, string>> = {};
    let isValid = true;

    if (!form.studentName.trim()) {
      tempErrors.studentName = "Student name is required.";
      isValid = false;
    }
    if (!form.parentName.trim()) {
      tempErrors.parentName = "Parent name is required.";
      isValid = false;
    }
    if (!form.classLevel) {
      tempErrors.classLevel = "Please select a standard.";
      isValid = false;
    }
    if (!form.subject) {
      tempErrors.subject = "Please select a preferred subject.";
      isValid = false;
    }
    
    // Mobile Validation (allow common global format or Indian 10 digits)
    const mobileRegex = /^[+]?[0-9]{8,15}$/;
    if (!form.mobile.trim()) {
      tempErrors.mobile = "Mobile number is required.";
      isValid = false;
    } else if (!mobileRegex.test(form.mobile.replace(/[\s-]/g, ""))) {
      tempErrors.mobile = "Please enter a valid mobile number (8-15 digits).";
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      tempErrors.email = "Email address is required.";
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof EnquiryFormType]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const updatedList = [form, ...savedEnquiries];
      setSavedEnquiries(updatedList);
      try {
        localStorage.setItem("tuition_enquiries", JSON.stringify(updatedList));
      } catch (err) {
        console.error("LocalStorage write error", err);
      }
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setForm(INITIAL_FORM_STATE);
    setErrors({});
  };

  const handleClearHistory = () => {
    setSavedEnquiries([]);
    localStorage.removeItem("tuition_enquiries");
  };

  return (
    <section id="register" className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-widest rounded-md mb-3">
            Admissions Open
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Register an Enquiry
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-sans">
            Fill out this quick form with your tutoring preferences. Our academic coordinator will call you within 24 hours to schedule a free demo session.
          </p>
        </div>

        {/* Success vs Form Container */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                id="enquiry-success-message"
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 sm:p-12 text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">
                  Enquiry Submitted!
                </h3>
                <p className="text-slate-600 text-base max-w-lg mb-8 leading-relaxed font-sans">
                  Thank you! Your enquiry has been submitted successfully. We will contact you soon.
                </p>

                <div className="bg-brand-50 p-5 rounded-2xl border border-brand-100 max-w-md w-full text-left mb-8 space-y-2">
                  <p className="text-xs font-semibold text-brand-700 tracking-wider uppercase">Summary of details</p>
                  <p className="text-sm font-bold text-slate-800"><span className="font-normal text-slate-500">Student:</span> {form.studentName}</p>
                  <p className="text-sm font-bold text-slate-800"><span className="font-normal text-slate-500">Class:</span> {form.classLevel}</p>
                  <p className="text-sm font-bold text-slate-800"><span className="font-normal text-slate-500">Primary Subject:</span> {form.subject}</p>
                  <p className="text-sm font-bold text-slate-800"><span className="font-normal text-slate-500">Contact:</span> {form.mobile}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    id="btn-register-another"
                    onClick={() => {
                      setIsSubmitted(false);
                      handleReset();
                    }}
                    className="px-6 py-3 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                  {savedEnquiries.length > 0 && (
                    <button
                      id="btn-view-history"
                      onClick={() => setShowHistory(true)}
                      className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                    >
                      View Submitted Enquiries
                    </button>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.form
                id="enquiry-form"
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 sm:p-10 space-y-4"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Student Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="studentName" className="text-xs font-bold text-slate-600 block">
                      Student Name *
                    </label>
                    <input
                      id="studentName"
                      type="text"
                      name="studentName"
                      value={form.studentName}
                      onChange={handleInputChange}
                      placeholder="Student Name"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.studentName
                          ? "border-rose-400 focus:ring-rose-100"
                          : "border-slate-200 focus:ring-brand-500"
                      }`}
                    />
                    {errors.studentName && (
                      <p id="error-studentName" className="text-xs text-rose-500 font-medium">
                        {errors.studentName}
                      </p>
                    )}
                  </div>

                  {/* Parent Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="parentName" className="text-xs font-bold text-slate-600 block">
                      Parent / Guardian Name *
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      name="parentName"
                      value={form.parentName}
                      onChange={handleInputChange}
                      placeholder="Parent Name"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.parentName
                          ? "border-rose-400 focus:ring-rose-100"
                          : "border-slate-200 focus:ring-brand-500"
                      }`}
                    />
                    {errors.parentName && (
                      <p id="error-parentName" className="text-xs text-rose-500 font-medium">
                        {errors.parentName}
                      </p>
                    )}
                  </div>

                  {/* Class Standard */}
                  <div className="space-y-1.5">
                    <label htmlFor="classLevel" className="text-xs font-bold text-slate-600 block">
                      Class / Standard *
                    </label>
                    <select
                      id="classLevel"
                      name="classLevel"
                      value={form.classLevel}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 cursor-pointer ${
                        errors.classLevel
                          ? "border-rose-400 focus:ring-rose-100"
                          : "border-slate-200 focus:ring-brand-500 text-slate-600"
                      }`}
                    >
                      <option value="">Select Class</option>
                      {classOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.classLevel && (
                      <p id="error-classLevel" className="text-xs text-rose-500 font-medium">
                        {errors.classLevel}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-600 block">
                      Preferred Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 cursor-pointer ${
                        errors.subject
                          ? "border-rose-400 focus:ring-rose-100"
                          : "border-slate-200 focus:ring-brand-500 text-slate-600"
                      }`}
                    >
                      <option value="">Select Subject</option>
                      {subjectOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p id="error-subject" className="text-xs text-rose-500 font-medium">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="mobile" className="text-xs font-bold text-slate-600 block">
                      Mobile Number *
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleInputChange}
                      placeholder="Mobile Number"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.mobile
                          ? "border-rose-400 focus:ring-rose-100"
                          : "border-slate-200 focus:ring-brand-500"
                      }`}
                    />
                    {errors.mobile && (
                      <p id="error-mobile" className="text-xs text-rose-500 font-medium">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-600 block">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-rose-400 focus:ring-rose-100"
                          : "border-slate-200 focus:ring-brand-500"
                      }`}
                    />
                    {errors.email && (
                      <p id="error-email" className="text-xs text-rose-500 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-600 block">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Form Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  <button
                    id="btn-reset"
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer active:scale-95"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </button>
                  <button
                    id="btn-submit"
                    type="submit"
                    className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 transition-colors cursor-pointer active:scale-95"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Local Enquiries History Inspector */}
        {savedEnquiries.length > 0 && (
          <div className="mt-12 border border-slate-100 bg-slate-50/70 p-6 rounded-2xl">
            <div className="flex justify-between items-center">
              <button
                id="btn-toggle-history"
                onClick={() => setShowHistory(!showHistory)}
                className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-brand-600 transition-colors cursor-pointer"
              >
                <GraduationCap className="h-4.5 w-4.5 text-brand-500" />
                {showHistory ? "Hide Submission Logs" : `View Submission Logs (${savedEnquiries.length})`}
              </button>
              {showHistory && (
                <button
                  id="btn-clear-history"
                  onClick={handleClearHistory}
                  className="inline-flex items-center gap-1.5 text-xs text-rose-500 hover:text-rose-700 font-bold transition-colors cursor-pointer"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear Logs
                </button>
              )}
            </div>

            <AnimatePresence>
              {showHistory && (
                <motion.div
                  id="submission-logs-container"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden mt-6 space-y-4"
                >
                  {savedEnquiries.map((enq, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-sm grid md:grid-cols-3 gap-3">
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase">Student</p>
                        <p className="font-semibold text-slate-800">{enq.studentName}</p>
                        <p className="text-xs text-slate-500">Parent: {enq.parentName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase">Class & Subject</p>
                        <p className="font-semibold text-slate-800">{enq.classLevel}</p>
                        <p className="text-xs text-slate-500">{enq.subject}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase">Contact Details</p>
                        <p className="font-semibold text-slate-800">{enq.mobile}</p>
                        <p className="text-xs text-slate-500 truncate">{enq.email}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}
