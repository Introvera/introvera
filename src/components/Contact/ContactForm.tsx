"use client";

import { Send } from "lucide-react";
import { FormEvent, useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("Sending...");

    const formData = new FormData(formRef.current);
    const data = {
      service_id: "service_6jybba9",
      template_id: "template_yaup53k",
      user_id: "2IuW0Sj0bTx8RGlan",
      template_params: {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("message"),
      },
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        formRef.current.reset();
        setTimeout(() => setStatus(""), 4000);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-white/80 text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your Name"
          className="w-full bg-white/5 border border-white/10 focus:border-[var(--color-accent)] rounded-xl px-5 py-4 text-white text-sm outline-none transition-all placeholder:text-white/30"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-white/80 text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your@gmail.com"
          className="w-full bg-white/5 border border-white/10 focus:border-[var(--color-accent)] rounded-xl px-5 py-4 text-white text-sm outline-none transition-all placeholder:text-white/30"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-white/80 text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full bg-white/5 border border-white/10 focus:border-[var(--color-accent)] rounded-xl px-5 py-4 text-white text-sm outline-none transition-all placeholder:text-white/30 resize-none"
        />
      </div>

      <div className="flex items-center gap-4 mt-2">
        <span className="inline-flex rounded-full p-[6px] border border-white bg-white/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <button
            type="submit"
            disabled={status === "Sending..."}
            className="inline-flex items-center gap-4 px-4 py-2 bg-white text-[var(--color-accent)] text-sm font-medium rounded-full transition-all duration-300 group disabled:opacity-70"
          >
            {status === "Sending..." ? "Sending..." : "Send Message"}
            {status !== "Sending..." && <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
          </button>
        </span>
        {status && status !== "Sending..." && (
          <p className={`text-sm ${status.includes("successfully") ? "text-green-400" : "text-red-400"}`}>{status}</p>
        )}
      </div>
    </form>
  );
}
