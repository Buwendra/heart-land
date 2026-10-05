"use client";

import { useState } from "react";
import { Facebook, Instagram, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactDetails } from "@/data/contactDetails";

interface FormData {
  fullName: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  inquiryType: "",
  subject: "",
  message: "",
};

export default function ContactGetInTouch() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message:
          data.message || "Thank you! Your message has been sent successfully.",
      });
      setFormData(initialFormData);
    } catch (error: unknown) {
      const errMessage =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setStatus({
        type: "error",
        message: errMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="font-openSans w-full bg-white py-5 px-8 md:px-20 lg:mb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Form / Text */}
          <div className="p-2 lg:ml-20 mt-15">
            <h3 className="text-3xl font-nunito font-bold text-black mb-3 text-center lg:text-left">
              Let&#39;s Get in Touch
            </h3>
            <p className="text-lg text-gray-600 w-auto mb-12 lg:mb-8 leading-8 text-center lg:text-left">
              Our team is always ready to listen, guide, and help you take the
              next step
            </p>

            {/* Status Notification Banner */}
            {status.type && (
              <div
                className={`max-w-md w-full mb-6 p-4 rounded flex items-center gap-3 text-sm transition-all ${
                  status.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            {/* Desktop Form */}
            <div className="hidden lg:block">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-md w-full">
                <div>
                  <label className="block text-base sm:text-lg mt-6 sm:mt-10 text-[#444444] mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder=""
                    className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-300 text-sm sm:text-base text-black"
                  />
                </div>

                <div>
                  <label className="block text-base sm:text-lg text-[#444444] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-300 text-sm sm:text-base text-black"
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg text-[#444444] mb-3">
                    Inquiry Type
                  </label>

                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none 
    focus:border-[#D11417] px-0 py-4 text-sm sm:text-base text-black"
                    required
                  >
                    <option value="" disabled className="text-gray-500">
                      Select inquiry type
                    </option>
                    <option value="retailers">Retailers</option>
                    <option value="products">Product Inquiry</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-base sm:text-lg text-[#444444] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-300 text-sm sm:text-base text-black"
                  />
                </div>

                <div>
                  <label className="block text-base sm:text-lg text-[#444444] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={1}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none
                   focus:border-[#D11417] px-0 py-2 placeholder-gray-300 resize-none text-sm sm:text-base
                    text-black"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-10 sm:h-12 cursor-pointer bg-[#D11417] text-white px-4 sm:px-5 py-2 text-sm sm:text-base shadow-md hover:shadow-[0_15px_30px_rgba(209,20,23,0.4)] transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-3 hover:rotate-1 transform-gpu rounded-tl-2xl rounded-br-xl rounded-tr-sm rounded-bl-sm disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT: pink accent */}
          <div className="relative hidden lg:flex justify-center lg:justify-end mt-8 lg:mt-16">
            {/* pink block (behind) */}
            <div
              aria-hidden
              className="absolute -right-20 sm:-right-32 lg:-right-40 top-0 sm:-top-8 lg:-top-21 w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[470px] lg:h-[800px] bg-[#FBE8E8] z-0"
              style={{ transform: "translateZ(0)" }}
            />

            {/* map card (front) */}
            <div className="w-full h-[300px] sm:h-[400px] lg:w-[500px] lg:h-[650px] rounded-sm overflow-hidden shadow-md z-10 relative lg:-mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57728.74162553496!2d55.3256035!3d25.26902615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f37cdae93%3A0xde756363a1b78491!2sDeira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2slk!4v1765167670932!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Contact Info Section - Independent positioning */}
      <div className="lg:hidden mx-4 mb-6 relative z-20">
        <div className="bg-[#B10003] p-6 text-center">
          <h4 className="text-white text-m font-nunito font-light mb-3 mt-10 tracking-wide">
            Head Office
          </h4>
          <h3 className="text-white text-lg font-nunito font-bold mb-4">
            {contactDetails.corporateAddress.company}
          </h3>
          <p className="text-white text-xs mb-15 leading-relaxed">
            {contactDetails.corporateAddress.line1}
            <br />
            {contactDetails.corporateAddress.line2}
          </p>

          <div className="flex items-center justify-center gap-2 mb-5">
            <a href="" className="text-white text-xs underline">
              View us on google map
            </a>
            <button className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 ease-out">
              <svg
                className="w-3 h-3 text-[#D11417]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="mb-4 rounded overflow-hidden aspect-square">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57728.74162553496!2d55.3256035!3d25.26902615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f37cdae93%3A0xde756363a1b78491!2sDeira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2slk!4v1765167670932!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="space-y-4 mt-6">
            <div>
              <p className="text-white text-xs font-bold">
                <span className="font-bold">Email</span>
              </p>
              <p className="text-white text-xs mt-1">{contactDetails.email}</p>
            </div>

            <div>
              <p className="text-white text-xs font-bold mt-10">
                <span className="font-bold mt-3">Telephone</span>
              </p>
              <p className="text-white text-xs font-light mt-2">
                {contactDetails.officePhone}
              </p>
            </div>

            <div className="pt-2 pb-4 mt-10">
              <p className="text-white text-xs font-bold mb-5">Follow Us</p>
              <div className="flex gap-5 justify-center">
                <a
                  href="https://www.facebook.com/p/Heartland-General-Trading-Co-LLC-61556223026571/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Facebook size={16} className="text-black" />
                </a>
                <a
                  href="https://www.instagram.com/heartlandgeneral/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram size={16} className="text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Blue Background Section - Independent positioning */}
      <div className="lg:hidden w-full bg-[#090B21] relative z-10 -mt-175 pt-175">
        <div className="px-6 py-8">
          <h3 className="text-white text-xl font-nunito font-bold mb-2 text-center">
            Get In Touch
          </h3>
          <p className="text-gray-300 text-xs text-center mb-6 leading-relaxed">
            Our team is always ready to listen, guide, and help you take the
            next step
          </p>

          {/* Mobile Status Notification Banner */}
          {status.type && (
            <div
              className={`max-w-md mx-auto mb-6 p-4 rounded flex items-center gap-3 text-sm transition-all ${
                status.type === "success"
                  ? "bg-green-900/40 text-green-200 border border-green-700"
                  : "bg-red-900/40 text-red-200 border border-red-700"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
            <div>
              <label className="block text-sm text-white mb-2">Full name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder=""
                className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-400 text-sm text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-400 text-sm text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-white mb-2">
                Inquiry Type
              </label>

              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full bg-black border-0 border-b border-[#D11417] focus:outline-none 
    focus:border-[#D11417] px-0 py-2 text-sm text-white"
                required
              >
                <option value="" disabled className="text-gray-400">
                  Select inquiry type
                </option>
                <option value="retailers">Retailers</option>
                <option value="products">Product Inquiry</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-white mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-400 text-sm text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-2">Message</label>
              <textarea
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-400 resize-none text-sm text-white"
              />
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-auto inline-flex items-center justify-center gap-2 h-10 sm:h-12 cursor-pointer bg-[#D11417] text-white px-4 sm:px-5 py-2 text-sm sm:text-base shadow-md hover:shadow-[0_15px_30px_rgba(209,20,23,0.4)] transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-3 hover:rotate-1 transform-gpu rounded-tl-2xl rounded-br-xl rounded-tr-sm rounded-bl-sm disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
