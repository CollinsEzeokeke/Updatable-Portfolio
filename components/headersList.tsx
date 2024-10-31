// components/HeadersList.tsx
'use client'

import { useHeaders } from '@/hooks/useHeaders'

export default function HeadersList() {
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

  return (
    <div className="space-y-8 p-4 text-white">
      {headers?.map((item) => (
        <div 
          key={item._id}
          className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-bold mb-4">{item.header}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-semibold">Main Bottom Text:</p>
              <p>{item.bottom}</p>
            </div>
            
            <div className="space-y-2">
              <p className="font-semibold">Additional Information:</p>
              <ul className="list-disc pl-5">
                <li>{item.bottomOne}</li>
                <li>{item.bottomTwo}</li>
                <li>{item.bottomThree}</li>
              </ul>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  )
}