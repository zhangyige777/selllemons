import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <span className="text-6xl mb-4">🍋</span>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        This page doesn&apos;t exist. Maybe the lemons rolled away?
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 text-sm font-medium"
        >
          Go Home
        </Link>
        <Link
          href="/calculator/"
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 text-sm"
        >
          Calculator
        </Link>
      </div>
    </div>
  )
}
