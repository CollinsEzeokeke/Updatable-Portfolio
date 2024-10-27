import { type SchemaTypeDefinition } from 'sanity'
import { eventType, typeForm } from './eventType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, typeForm],
}
