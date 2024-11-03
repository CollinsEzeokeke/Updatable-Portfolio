// components/HeaderContent.tsx
"use client"

import WorldGlobe from "@/components/globeComponent/wrapper";
import { useHeaders } from '@/hooks/useHeaders'
import { FlipWords } from "@/components/ui/flip-words";

// Fallback Error Component
const ErrorFallback = ({ error }: { error: Error | unknown }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-2xl px-4 py-8 mx-auto text-center">
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Oops! Something&apos;s Not Right</h2>
        <p className="text-gray-400 mb-6">
          {error instanceof Error ? error.message : 'We encountered an unexpected issue'}
        </p>
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Try refreshing the page or come back later
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
};

// Loading Component
const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-500"></div>
        {/* <p className="mt-4 text-white">Loading content...</p> */}
      </div>
    </div>
  );
};

// Empty State Component
const EmptyState = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-2xl px-4 py-8 mx-auto text-center">
        <svg
          className="w-16 h-16 mx-auto text-gray-400 mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        <h3 className="text-2xl font-bold mb-2">No Content Available</h3>
        <p className="text-gray-400">
          We couldn&apos;t find any header content to display at the moment
        </p>
      </div>
    </div>
  );
};

export default function HeaderContent() {
  const { data: headers, isLoading, error } = useHeaders()

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorFallback error={error} />;
  }

  if (!headers || headers.length === 0) {
    return <EmptyState />;
  }

  const currentHeader = headers[0];
  const words = [
    currentHeader.bottomOne,
    currentHeader.bottomTwo,
    currentHeader.bottomThree
  ].filter(Boolean);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white font-bold">
      <div className="h-96 w-screen flex flex-col justify-start items-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight relative z-10">
          {currentHeader.header}
        </h1>
        <div className="text-xl max-w-2xl text-center leading-relaxed opacity-90 relative z-10 top-14">
          {currentHeader.bottom}
          <FlipWords words={words} className="text-white" />
        </div>
      </div>
      <WorldGlobe width={600} height={600}/>
    </div>
  );
}