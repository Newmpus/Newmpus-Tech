import { notFound } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import products from '@/lib/products.json'

const categoryNames: { [key: string]: string } = {
  smartphones: 'Smartphones',
  'phone-parts': 'Phone Parts',
  speakers: 'Speakers',
  laptops: 'Laptops',
  accessories: 'Accessories',
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: PageProps) {
  const { slug } = params

  if (!categoryNames[slug]) {
    notFound()
  }

  const categoryProducts = products.filter(product => product.category === slug)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {categoryNames[slug]}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {categoryProducts.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-12">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(categoryNames).map((slug) => ({
    slug,
  }))
}