import { groq } from 'next-sanity'

export const servicesQuery = groq`*[_type == "service"] | order(title asc) {
  _id,
  serviceId,
  title,
  shortDescription,
  "imageUrl": image.asset->url,
  benefits,
  details[]{ heading, content },
  cta
}`

export const serviceByIdQuery = groq`*[_type == "service" && serviceId == $serviceId][0] {
  _id,
  serviceId,
  title,
  shortDescription,
  "imageUrl": image.asset->url,
  benefits,
  details[]{ heading, content },
  cta
}`

export const teamMembersQuery = groq`*[_type == "teamMember"] | order(order asc) {
  _id,
  memberId,
  name,
  position,
  "imageUrl": image.asset->url,
  bio,
  fullBio,
  specialties,
  credentials,
  languages,
  readMore,
  isDentist,
  order
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc) {
  _id,
  name,
  text,
  stars,
  "avatarUrl": avatar.asset->url,
  order
}`

export const heroQuery = groq`*[_type == "hero"][0] {
  _id,
  title,
  subtitle,
  description,
  "backgroundImageUrl": backgroundImage.asset->url,
  ctaPrimaryText,
  ctaPrimaryUrl,
  ctaSecondaryText,
  ctaSecondaryUrl
}`

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  _id,
  siteName,
  "logoUrl": logo.asset->url,
  phone,
  email,
  address,
  servingAreas,
  hours[]{ day, hours },
  socialFacebook,
  socialInstagram,
  bookingUrl
}`

export const emergencyQuery = groq`*[_type == "emergency"][0] {
  _id,
  heroTitle,
  heroSubtitle,
  heroDescription,
  "heroBackgroundImageUrl": heroBackgroundImage.asset->url,
  hotlineTitle,
  hotlineDescription,
  emergencyPhone,
  emergencyPhoneLabel,
  availabilityText,
  emergencyTypes,
  whenToCallTitle,
  whenToCallItems,
  bannerTitle,
  bannerDescription
}`
