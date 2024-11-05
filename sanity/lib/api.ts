// lib/api.ts
import { client } from './client'
import { HeaderDocument, AboutImageTypes } from '@/types/sanity'

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


export const getAboutImage = async () => {
  const data = await client.fetch<AboutImageTypes>(`*[_type == "Image"][0]`)
  return data
}