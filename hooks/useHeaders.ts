// hooks/useHeaders.ts
import { useQuery } from '@tanstack/react-query'
import { getHeaders } from '@/sanity/lib/api'

export function useHeaders() {
  return useQuery({
    queryKey: ['headers'],
    queryFn: getHeaders,
  });
}
