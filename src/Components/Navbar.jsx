
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkStyle = ({ isActive }) =>
    `block rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-violet-900 hover:text-violet-300 ${
      isActive
        ? 'font-bold text-violet-300'
        : 'text-white'
    }`

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="relative bg-violet-950 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-wide"
        >
          DevSpace
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/products" className={linkStyle}>
            Products
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="rounded-lg p-2 transition hover:bg-violet-900 md:hidden"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="flex flex-col gap-2 border-t border-violet-800 px-4 py-4 md:hidden">
          <NavLink to="/" end className={linkStyle} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={linkStyle}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/products"
            className={linkStyle}
            onClick={closeMenu}
          >
            Products
          </NavLink>
        </div>
      )}
    </nav>
  )
}
