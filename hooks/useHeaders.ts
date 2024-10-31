// hooks/useHeaders.ts
import { useQuery } from '@tanstack/react-query'
import { getHeaders, getHeaderById } from '@/sanity/lib/api'

export function useHeaders() {
  return useQuery({
    queryKey: ['headers'],
    queryFn: getHeaders,
  })
}

export function useHeader(id: string) {
  return useQuery({
    queryKey: ['header', id],
    queryFn: () => getHeaderById(id),
    enabled: !!id,
  })
}