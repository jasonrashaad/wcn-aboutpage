// File: src/app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-black">
        <div className="w-40 h-40 mb-6">
          <Image
            src="/logo.png" // <- Rename your uploaded logo to logo.png and place it in /public
            alt="What Comes Next Logo"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#dce1de] mb-4">
          We&apos;re Building What Comes Next
        </h1>
        <p className="text-lg md:text-xl text-[#9cc5a1] max-w-2xl">
          Crowdfunded. Trainer-powered. AI-backed. It’s time for personal training to evolve.
        </p>
        <Link
          href="https://www.whatcomesnextllc.us/product/a-dollar/"
          target="_blank"
          className="mt-8 inline-block bg-[#49a078] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#216869] transition"
        >
          Support the Build → $1 at a Time
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-[#121212] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#dce1de] mb-2">Trainer Tools, Reimagined</h2>
            <p className="text-[#9cc5a1]">
              Our platform gives trainers superpowers—scenario planning, adaptive programs, AI-generated insights, and data they actually own.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#dce1de] mb-2">Health Meets Intelligence</h2>
            <p className="text-[#9cc5a1]">
              The Catalyst personalizes the wellness journey. Think Equinox experience, indie soul, and a data-respectful heart.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-[#216869] text-black text-center">
        <h3 className="text-3xl font-bold mb-4">Join the Mission</h3>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          What Comes Next is more than a platform—it’s a movement. The future of fitness belongs to those who build it.
        </p>
        <Link
          href="mailto:hello@whatcomesnextllc.ai"
          className="inline-block border border-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-[#dce1de] transition"
        >
          Connect With Us
        </Link>
      </section>
    </main>
  );
}