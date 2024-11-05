import { type SchemaTypeDefinition } from 'sanity'
import { Header, FeatureSection, FeatureSectionTwo,AboutImage } from './eventType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Header, FeatureSection, FeatureSectionTwo, AboutImage],
}
