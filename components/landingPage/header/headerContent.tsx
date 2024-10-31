// components/HeaderContent.tsx
"use client"

import WorldGlobe from "@/components/globeComponent/wrapper";
import { useHeaders } from '@/hooks/useHeaders'
import { FlipWords } from "@/components/ui/flip-words";

export default function HeaderContent() {
  const { data: headers, isLoading, error } = useHeaders()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 p-4">
        Error: {error instanceof Error ? error.message : 'Something went wrong'}
      </div>
    )
  }

  // Check if headers exist and have data
  if (!headers || headers.length === 0) {
    return (
      <div className="text-yellow-500 p-4">
        No header content available
      </div>
    )
  }

  // Get the first header
  const currentHeader = headers[0]

  console.log(headers[0])

  // Create words array from the header's bottom fields
  const words = [
    currentHeader.bottomOne,
    currentHeader.bottomTwo,
    currentHeader.bottomThree
  ].filter(Boolean) // Remove any undefined or null values

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