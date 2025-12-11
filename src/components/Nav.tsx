'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Search, Sun, Moon } from 'lucide-react'

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              GadgetStore
            </Link>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search products..."
                className="w-48 md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link href="/cart" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap space-x-4 md:space-x-8 space-y-2 md:space-y-0 py-4">
          <Link href="/categories/smartphones" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Smartphones</Link>
          <Link href="/categories/phone-parts" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Phone Parts</Link>
          <Link href="/categories/speakers" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Speakers</Link>
          <Link href="/categories/laptops" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Laptops</Link>
          <Link href="/categories/accessories" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Accessories</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</Link>
          <Link href="/admin" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Admin</Link>
        </div>
      </div>
    </nav>
  )
}