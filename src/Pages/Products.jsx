
import { useEffect, useState } from 'react'

export default function Products() {
  const [tools, setTools] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(() => {
    async function getTools() {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(
          'https://devshelf.ritualdev.in/api/v1/tools.json'
        )

        if (!response.ok) {
          throw new Error('Failed to load developer tools.')
        }

        const data = await response.json()

        if (!Array.isArray(data.tools)) {
          throw new Error('The API returned an unexpected data format.')
        }

        setTools(data.tools)
      } catch (err) {
        setError(
          err.message === 'Failed to fetch'
            ? 'Could not connect to the server. Check your internet connection.'
            : err.message
        )
      } finally {
        setLoading(false)
      }
    }

    getTools()
  }, [])

  const categories = [
    'All',
    ...new Set(
      tools.map((tool) => tool.category).filter(Boolean)
    ),
  ]

  const filteredTools = tools.filter((tool) => {
    const searchText = search.trim().toLowerCase()

    const matchesSearch =
      (tool.name || '').toLowerCase().includes(searchText) ||
      (tool.description || '').toLowerCase().includes(searchText)

    const matchesCategory =
      category === 'All' || tool.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            DEVELOPER RESOURCES
          </span>

          <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Explore{' '}
            <span className="text-violet-400">Developer Tools</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Discover useful tools and resources to make your development
            journey easier.
          </p>
        </div>

        {!loading && !error && (
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <input
              type="search"
              placeholder="Search by name or description..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-violet-500"
            />

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-violet-500"
              aria-label="Filter by category"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item === 'All' ? 'All Categories' : item}
                </option>
              ))}
            </select>
          </div>
        )}

        {loading && (
          <div className="py-20 text-center">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-violet-500" />
            <p className="text-violet-300">Loading developer tools...</p>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center">
            <p className="mb-4 text-red-400">{error}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-400">
                Found {filteredTools.length} tools
              </p>

              {(search || category !== 'All') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch('')
                    setCategory('All')
                  }}
                  className="text-sm text-violet-400 transition hover:text-violet-300"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredTools.length === 0 ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">
                <h2 className="mb-2 text-xl font-bold">
                  No tools found
                </h2>
                <p className="text-slate-400">
                  Try another search term or category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTools.map((tool, index) => (
                  <article
                    key={tool.name || index}
                    className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-200 hover:-translate-y-1 hover:border-violet-500"
                  >
                    <div className="mb-4">
                      <span className="inline-block rounded-lg bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                        {tool.category || 'Developer Tool'}
                      </span>
                    </div>

                    <h2 className="mb-3 break-words text-xl font-bold">
                      {tool.name || 'Unnamed Tool'}
                    </h2>

                    <p className="mb-6 flex-1 break-words leading-7 text-slate-400">
                      {tool.description || 'No description available.'}
                    </p>

                    {tool.repo && (
                      <a
                        href={tool.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto rounded-xl bg-violet-600 px-4 py-3 text-center font-semibold transition hover:bg-violet-500"
                      >
                        Visit Tool ↗
                      </a>
                    )}
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  )
}



