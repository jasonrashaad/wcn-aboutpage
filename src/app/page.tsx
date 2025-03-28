// File: src/app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-black animate-fadeIn">
        <div className="w-40 h-40 mb-6 animate-bounce">
          <Image
            src="/logo.png"
            alt="What Comes Next Logo"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#dce1de] mb-4 animate-pulse">
          Welcome to The Catalyst
        </h1>
        <p className="text-lg md:text-xl text-[#9cc5a1] max-w-2xl">
          Human-first. AI-powered. Trainer-designed. Built in the real world to solve the real problems fitness tech forgot.
        </p>
        <Link
          href="https://www.whatcomesnextllc.us/product/a-dollar/"
          target="_blank"
          className="mt-8 inline-block bg-[#49a078] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#216869] transition-transform transform hover:scale-105 shadow-xl animate-bounce-slow"
        >
          Be a Catalyst — Support the Build →
        </Link>
      </section>

      {/* Story & Problem Section */}
      <section className="bg-[#121212] py-20 px-6 animate-slideIn">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#dce1de] mb-2">Where It Started</h2>
            <p className="text-[#9cc5a1]">
              My name is Jason Rashaad. I’m a 46-year-old developer, trainer, and survivor of a near-death health event. In 2024, I began rebuilding my life by training for the Rogue Fitness 1000 lbs. Club—something Hugh Jackman did at 46. If Wolverine can do it, so can I. What started as a personal transformation quickly became something more.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#dce1de] mb-2">What Comes Next</h2>
            <p className="text-[#9cc5a1]">
              The Catalyst is a new kind of training platform. One that respects your privacy, learns from your behavior, adapts with you in real time, and gives both trainers and trainees a system that grows stronger the more you use it.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-6 bg-black text-center animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#dce1de]">Why The Catalyst Is Different</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-left">
          <div>
            <h3 className="text-xl font-semibold text-[#49a078] mb-2">Locally Hosted. Privacy-First.</h3>
            <p className="text-[#9cc5a1]">
              Your data never leaves your machine. The Catalyst runs locally, not in someone else’s cloud. No sales. No tracking. Total control.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#49a078] mb-2">Built with a Real Use Case</h3>
            <p className="text-[#9cc5a1]">
              I’m using The Catalyst every day to train, log, and evolve. It’s not a pitch—it’s a platform in motion.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#49a078] mb-2">Behavior-Centered, Not Just Data-Centered</h3>
            <p className="text-[#9cc5a1]">
              Track workouts, yes—but also track decisions, momentum, intent. Then respond with intelligent feedback.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#49a078] mb-2">Designed to Scale With Coaches</h3>
            <p className="text-[#9cc5a1]">
              Built for in-person, remote, and hybrid coaching workflows. Flag key moments. Automate follow-up. Elevate your practice.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action + Crowdfunding */}
      <section className="relative bg-gradient-to-br from-[#216869] via-[#49a078] to-[#9cc5a1] text-black py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 animate-pulse opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Funded by the Community</h2>
          <p className="text-lg md:text-xl mb-6">
            No venture capital. No hidden agenda. If you believe in what we’re building, help fund it—one dollar at a time.
          </p>
          <Link
            href="https://www.whatcomesnextllc.us/product/a-dollar/"
            target="_blank"
            className="inline-block bg-black text-[#dce1de] px-10 py-4 text-lg font-bold rounded-full shadow-lg hover:bg-[#121212] transition-transform transform hover:scale-110"
          >
            Back the Build
          </Link>
        </div>
      </section>

      {/* Contact + Connect */}
      <section className="py-20 px-6 bg-black text-center animate-fadeIn">
        <h3 className="text-3xl font-bold mb-4 text-[#dce1de]">Stay Connected</h3>
        <p className="text-lg mb-6 max-w-xl mx-auto text-[#9cc5a1]">
          This is just the beginning. Sign up, show support, or just follow along.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="mailto:hello@whatcomesnextllc.ai"
            className="inline-block border border-[#49a078] text-[#49a078] px-6 py-3 rounded-full font-semibold hover:bg-[#49a078] hover:text-black transition"
          >
            Contact Me
          </Link>
          <Link
            href="https://www.instagram.com/whatcomesnextllc/"
            target="_blank"
            aria-label="Instagram"
            className="inline-flex items-center justify-center w-12 h-12 bg-[#49a078] rounded-full hover:bg-[#216869] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-black"
            >
              <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.5A4.26 4.26 0 0 0 3.5 7.75v8.5A4.26 4.26 0 0 0 7.75 20.5h8.5A4.26 4.26 0 0 0 20.5 16.25v-8.5A4.26 4.26 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}