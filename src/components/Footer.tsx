export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">GadgetStore</h3>
            <p className="text-gray-400">Your one-stop shop for electronic gadgets.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/categories/smartphones" className="text-gray-400 hover:text-white">Smartphones</a></li>
              <li><a href="/categories/phone-parts" className="text-gray-400 hover:text-white">Phone Parts</a></li>
              <li><a href="/categories/speakers" className="text-gray-400 hover:text-white">Speakers</a></li>
              <li><a href="/categories/laptops" className="text-gray-400 hover:text-white">Laptops</a></li>
              <li><a href="/categories/accessories" className="text-gray-400 hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2023 GadgetStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}