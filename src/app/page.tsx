import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import products from '@/lib/products.json'

export default function Home() {
  const featuredProducts = products.slice(0, 6) // Show first 6 products

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to GadgetStore
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the latest electronic gadgets: smartphones, accessories, laptops, and more.
            Quality products at competitive prices.
          </p>
          <Link
            href="/categories/smartphones"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Smartphones', slug: 'smartphones', icon: '📱' },
              { name: 'Phone Parts', slug: 'phone-parts', icon: '🔧' },
              { name: 'Speakers', slug: 'speakers', icon: '🔊' },
              { name: 'Laptops', slug: 'laptops', icon: '💻' },
              { name: 'Accessories', slug: 'accessories', icon: '🎧' },
            ].map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/categories/smartphones"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}