
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 text-center">
        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
          YOUR DEVELOPER SPACE
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
          Build Your Future
          <span className="block text-violet-400">
            in Tech.
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          Discover developer tools, explore useful resources,
          and take your coding journey to the next level.
        </p>

        <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            to="/products"
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
          >
            Explore Products →
          </Link>

          <Link
            to="/about"
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:border-violet-400 hover:text-violet-300"
          >
            Learn More
          </Link>
        </div>
      </section>


      <section className="mx-auto mt-24 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Everything You Need to <span className="text-violet-400">Grow</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Explore useful tools and resources to make your development journey easier.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-violet-500">
            <div className="mb-4 text-3xl">💻</div>
            <h3 className="mb-3 text-xl font-bold">Developer Tools</h3>
            <p className="leading-7 text-slate-400">
              Discover tools that help you write better code and work more efficiently.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-violet-500">
            <div className="mb-4 text-3xl">📚</div>
            <h3 className="mb-3 text-xl font-bold">Learning Resources</h3>
            <p className="leading-7 text-slate-400">
              Find helpful resources to learn new technologies and improve your skills.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-violet-500 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 text-3xl">🚀</div>
            <h3 className="mb-3 text-xl font-bold">Discover & Grow</h3>
            <p className="leading-7 text-slate-400">
              Explore new possibilities and take your development journey to the next level.
            </p>
          </div>
        </div>
      </section>




    </main>
  )
}

