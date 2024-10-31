// lib/api.ts
import { client } from './client'
import { HeaderDocument } from '@/types/sanity'

export const getHeaders = async (): Promise<HeaderDocument[]> => {
  const query = `*[_type == "header"] {
    _id,
    _createdAt,
    header,
    bottom,
    bottomOne,
    bottomTwo,
    bottomThree
  } | order(releaseDate desc)`
  
  return client.fetch(query)
}

export const getHeaderById = async (id: string): Promise<HeaderDocument> => {
  const query = `*[_type == "header" && _id == $id][0]`
  return client.fetch(query, { id })
}