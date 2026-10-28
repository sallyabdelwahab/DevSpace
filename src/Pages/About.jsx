

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            ABOUT DEVSPACE
          </span>

          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            A Space to Learn,
            <span className="block text-violet-400">Build & Grow.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            DevSpace is a platform designed to help developers discover useful
            tools, explore learning resources, and grow their technical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            <div className="mb-4 text-3xl">🎯</div>
            <h2 className="mb-3 text-2xl font-bold text-violet-300">
              Our Mission
            </h2>
            <p className="leading-7 text-slate-400">
              To make discovering developer tools and learning resources easier,
              helping developers spend more time building and less time searching.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            <div className="mb-4 text-3xl">🌱</div>
            <h2 className="mb-3 text-2xl font-bold text-violet-300">
              Our Vision
            </h2>
            <p className="leading-7 text-slate-400">
              To create a helpful space where developers can explore new
              technologies, learn continuously, and improve their skills.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6 text-center sm:p-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Keep Learning. Keep Building.
          </h2>
          <p className="mt-3 leading-7 text-slate-400">
            Your next step in development starts here.
          </p>
        </div>
      </section>
    </main>
  )
}
