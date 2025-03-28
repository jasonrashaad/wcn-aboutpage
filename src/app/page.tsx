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
          We&apos;re Building What Comes Next
        </h1>
        <p className="text-lg md:text-xl text-[#9cc5a1] max-w-2xl">
          Crowdfunded. Trainer-powered. AI-backed. It’s time for personal training to evolve.
        </p>
        <Link
          href="https://www.whatcomesnextllc.us/product/a-dollar/"
          target="_blank"
          className="mt-8 inline-block bg-[#49a078] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#216869] transition-transform transform hover:scale-105 shadow-xl animate-bounce-slow"
        >
          Support the Build → $1 at a Time
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-[#121212] py-20 px-6 animate-slideIn">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="animate-fadeInUp delay-100">
            <h2 className="text-2xl font-semibold text-[#dce1de] mb-2">Trainer Tools, Reimagined</h2>
            <p className="text-[#9cc5a1]">
              Our platform gives trainers superpowers—scenario planning, adaptive programs, AI-generated insights, and data they actually own.
            </p>
          </div>
          <div className="animate-fadeInUp delay-300">
            <h2 className="text-2xl font-semibold text-[#dce1de] mb-2">Health Meets Intelligence</h2>
            <p className="text-[#9cc5a1]">
              The Catalyst personalizes the wellness journey. Think Equinox experience, indie soul, and a data-respectful heart.
            </p>
            <Link
              href="https://www.whatcomesnextllc.us/the-catalyst/"
              target="_blank"
              className="inline-block mt-4 text-[#49a078] underline hover:text-[#9cc5a1] transition"
            >
              Learn more about The Catalyst
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Crowdfunding CTA Section */}
      <section className="relative bg-gradient-to-br from-[#216869] via-[#49a078] to-[#9cc5a1] text-black py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 animate-pulse opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Fitness. Tech. Privacy. AI.</h2>
          <p className="text-lg md:text-xl mb-6">
            What Comes Next isn&apos;t another fitness app—it&apos;s your transformation partner. Built with integrity, powered by innovation, and designed to respect your privacy while leveling you up.
          </p>
          <Link
            href="https://www.whatcomesnextllc.us/product/a-dollar/"
            target="_blank"
            className="inline-block bg-black text-[#dce1de] px-10 py-4 text-lg font-bold rounded-full shadow-lg hover:bg-[#121212] transition-transform transform hover:scale-110"
          >
            Be a Catalyst — Back Us for $1
          </Link>
        </div>
      </section>

      {/* Contact + Social CTA */}
      <section className="py-20 px-6 bg-black text-center animate-fadeIn">
        <h3 className="text-3xl font-bold mb-4 text-[#dce1de]">Join the Mission</h3>
        <p className="text-lg mb-6 max-w-xl mx-auto text-[#9cc5a1]">
          What Comes Next is more than a platform—it’s a movement. The future of fitness belongs to those who build it.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="mailto:hello@whatcomesnextllc.ai"
            className="inline-block border border-[#49a078] text-[#49a078] px-6 py-3 rounded-full font-semibold hover:bg-[#49a078] hover:text-black transition"
          >
            Connect With Us
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