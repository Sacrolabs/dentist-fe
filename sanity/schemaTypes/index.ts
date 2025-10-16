import { type SchemaTypeDefinition } from 'sanity'
import service from './service'
import teamMember from './teamMember'
import testimonial from './testimonial'
import hero from './hero'
import siteSettings from './siteSettings'
import emergency from './emergency'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, teamMember, testimonial, hero, siteSettings, emergency],
}
