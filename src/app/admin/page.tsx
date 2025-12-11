export default function Admin() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Admin Dashboard</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Product Management</h2>
          <p className="text-gray-600 mb-4">
            This is the admin dashboard for managing your eCommerce products.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">Add New Product</h3>
              <p className="text-blue-600 text-sm">Add new products to your catalog</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">Edit Products</h3>
              <p className="text-green-600 text-sm">Modify existing product details</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800">View Orders</h3>
              <p className="text-yellow-600 text-sm">Check customer orders</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800">Analytics</h3>
              <p className="text-purple-600 text-sm">View site analytics</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Note: This is a basic dashboard. Full functionality requires backend integration.
          </p>
        </div>
      </div>
    </div>
  )
}