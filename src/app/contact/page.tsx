export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">Contact Us</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Get in Touch</h2>
            <p className="text-gray-600 mt-2">
              Have questions about our products? We're here to help!
            </p>
          </div>
          <div className="space-y-2">
            <a
              href="https://wa.me/263779979366"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white text-center py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
            >
              Contact via WhatsApp
            </a>
            <a
              href="mailto:nyumbucy@gmail.com"
              className="block w-full bg-blue-500 text-white text-center py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}