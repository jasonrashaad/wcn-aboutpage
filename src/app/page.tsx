export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">What Comes Next?</h1>
        <p className="text-xl md:text-2xl max-w-2xl text-zinc-300">
          Equal parts lab, platform, and provocation. We’re building tools for real humans—fitness, tech, and AI done differently.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-zinc-900 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Why We're Building</h2>
          <p className="text-lg text-zinc-300 mb-6">
            We’re tired of half-baked health apps, one-size-fits-none platforms, and trainers forced to choose between personalization and scale.
            The Catalyst is our answer—privacy-first, AI-augmented, human-centered.
          </p>
          <p className="text-lg text-zinc-300">
            Whether you're a trainer looking for better tools, or a human trying to make lasting change, we’re building what comes next—for you.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-950 py-16 px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Want in early?</h3>
          <p className="text-md text-zinc-400 mb-6">
            We're building in public, one rep at a time. Stick around. Ask questions. Join the mission.
          </p>
          <a
            href="mailto:hello@whatcomesnextllc.ai"
            className="inline-block bg-white text-zinc-900 font-semibold px-6 py-3 rounded-full hover:bg-zinc-200 transition"
          >
            Connect with us
          </a>
        </div>
      </section>
    </main>
  );
}