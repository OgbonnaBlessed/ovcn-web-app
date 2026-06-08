"use client";

import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import { fadeInUp } from "@/helper/motion";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const journeySteps = [
  {
    title: "Believe",
    description: "Receive Christ and begin your walk with God.",
  },
  {
    title: "Belong",
    description: "Become part of a loving spiritual family.",
  },
  {
    title: "Grow",
    description: "Learn the foundations through Believers Guide.",
  },
  {
    title: "Serve",
    description: "Discover your place and serve with purpose.",
  },
];

const guideHighlights = [
  "Foundation of salvation",
  "Prayer and spiritual growth",
  "Understanding the Word",
  "Church life and service",
];

const MembershipPage = () => {
  const [bornAgain, setBornAgain] = useState<"yes" | "no">("yes");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullname: String(formData.get("fullname") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      address: String(formData.get("address") || ""),
      bornAgain,
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setFeedback(data.message || "Something went wrong.");
        return;
      }

      setFeedback(data.message || "Membership request sent successfully.");
      form.reset();
      setBornAgain("yes");
    } catch {
      setFeedback("Failed to send membership request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="w-full overflow-hidden bg-[#070B18] text-white">
        <PageHero
          eyebrow="Membership"
          title="Become Part of the Family"
          description="Begin your journey with Omega Vision Christian Network. Belong, grow, and walk in purpose."
          image="/membership.jpeg"
          imageAlt="Membership"
          glowVariant="membership"
        />

        <section className="relative overflow-hidden bg-[#F4EFE7] px-5 py-20 text-[#081326] sm:px-6 sm:py-24 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_65%)]" />

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={0}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0A2D91]/70 sm:tracking-[0.3em]">
                The Journey
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                A Simple Path Into Family
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#081326]/65 md:text-base md:leading-8">
                Every member begins with faith, grows through discipleship, and
                finds their place within the family of God.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:gap-x-8 xl:grid-cols-4">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeInUp}
                  custom={index}
                  className="group relative mx-auto w-full max-w-sm"
                >
                  <div className="absolute inset-0 -translate-x-3 -translate-y-3 -rotate-[4deg] rounded-[1.75rem] border border-[#0A2D91]/10 bg-[linear-gradient(135deg,rgba(10,45,145,0.08),rgba(255,106,0,0.08))] shadow-[0_20px_50px_rgba(10,45,145,0.08)] transition-all duration-500 sm:-translate-x-4 sm:-translate-y-4 sm:-rotate-[5deg] group-hover:sm:-translate-x-5 group-hover:sm:-translate-y-5 group-hover:sm:-rotate-[7deg]" />

                  <div className="relative rounded-[1.75rem] border border-[#081326]/10 bg-white/85 p-6 shadow-[0_20px_60px_rgba(8,19,38,0.08)] backdrop-blur-xl transition-all duration-500 group-hover:sm:-translate-y-2 group-hover:bg-white sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#081326] text-xs font-bold text-white shadow-sm sm:h-11 sm:w-11">
                        0{index + 1}
                      </span>

                      <div className="h-px w-10 bg-[#081326]/10 sm:w-12" />
                    </div>

                    <h3 className="mt-7 text-2xl font-bold tracking-tight sm:mt-8 sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#081326]/65 sm:mt-4">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-[#F5F1EA] px-6 py-24 text-[#081326] lg:px-20">
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={0}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                First Step
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Are You Born Again?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#081326]/70 md:text-base md:leading-8">
                Membership begins with faith in Jesus Christ. If you have not
                received Him, you can do that now before continuing.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeInUp}
              custom={1}
              className="rounded-[2rem] border border-[#081326]/10 bg-white/70 p-4 shadow-[0_30px_80px_rgba(8,19,38,0.08)] backdrop-blur-xl"
            >
              <div className="relative grid grid-cols-2 rounded-full bg-[#081326]/5 p-1">
                <motion.div
                  layout
                  className={`absolute bottom-1 top-1 w-[calc(50%-4px)] rounded-full bg-[#081326] ${
                    bornAgain === "yes" ? "left-1" : "left-1/2"
                  }`}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                />

                <button
                  type="button"
                  onClick={() => setBornAgain("yes")}
                  className={`relative z-10 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                    bornAgain === "yes" ? "text-white" : "text-[#081326]/65"
                  }`}
                >
                  Yes, I am
                </button>

                <button
                  type="button"
                  onClick={() => setBornAgain("no")}
                  className={`relative z-10 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                    bornAgain === "no" ? "text-white" : "text-[#081326]/65"
                  }`}
                >
                  Not yet
                </button>
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-[#F8F4EE] p-6">
                {bornAgain === "yes" ? (
                  <>
                    <h3 className="text-2xl font-bold">
                      Continue Your Journey
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#081326]/70">
                      Wonderful. You can continue with the membership form and
                      begin your Believers Guide class.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold">Salvation Prayer</h3>
                    <p className="mt-3 text-sm leading-7 text-[#081326]/70">
                      Lord Jesus, I believe You are the Son of God. I believe
                      You died for me and rose again. I receive You today as my
                      Lord and Saviour. Forgive my sins, make me new, and lead
                      me by Your Spirit. Amen.
                    </p>
                  </>
                )}

                <a
                  href="#membership-form"
                  className="mt-7 inline-flex rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold tracking-[0.18em] text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-800"
                >
                  Continue
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative bg-[#070B18] px-6 py-24 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,45,145,0.24),transparent_36%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={0}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC500]">
                Believers Guide
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Built for Spiritual Growth
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
                Believers Guide helps every new member understand faith, prayer,
                the Word, church life, service and spiritual maturity.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {guideHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  custom={index}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur"
                >
                  <p className="text-sm font-semibold text-white">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="membership-form"
          className="relative bg-[#050713] px-6 py-24 lg:px-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,45,145,0.22),transparent_42%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={0}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC500]">
                Membership Form
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                We’d Love to Know You
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
                Fill in your details and our team will reach out with the next
                steps for membership and Believers Guide.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeInUp}
              custom={1}
              className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="fullname"
                  placeholder="Full name"
                  required
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#1447e6]/60"
                />

                <input
                  name="email"
                  placeholder="Email address"
                  type="email"
                  required
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#1447e6]/60"
                />

                <input
                  name="phone"
                  placeholder="Phone number"
                  required
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#1447e6]/60"
                />

                <input
                  name="address"
                  placeholder="Home address"
                  required
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#1447e6]/60"
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell us briefly about yourself"
                rows={5}
                className="mt-5 w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#1447e6]/60"
              />

              {feedback && (
                <p className="mt-5 rounded-2xl bg-white/10 px-5 py-4 text-sm text-white/80">
                  {feedback}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-7 inline-flex rounded-full bg-blue-700 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit Membership"}
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MembershipPage;
