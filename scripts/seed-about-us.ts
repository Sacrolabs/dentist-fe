import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import { createClient } from '@sanity/client'

async function run() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const token = process.env.SANITY_API_TOKEN || process.env.SANITY_API_READ_TOKEN
  const apiVersion = process.env.SANITY_API_VERSION || '2025-01-01'

  if (!projectId || !dataset || !token) {
    throw new Error('Missing required env vars')
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false })

  const aboutUsContent = {
    _id: 'aboutUs.main',
    _type: 'aboutUs',
    pageTitle: 'About Us',
    sections: [
      {
        _key: 'our-story',
        sectionTitle: 'Our Story',
        content: [
          {
            _type: 'block',
            _key: 'story1',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'story1-text',
                text: 'Welcome to Northcote Family Dentist — where modern dentistry meets genuine care.',
                marks: [],
              },
            ],
          },
          {
            _type: 'block',
            _key: 'story2',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'story2-text',
                text: "Founded with a vision to make exceptional, ethical dental care accessible to every family in our community, we're here to redefine what people expect from a dental visit.",
                marks: [],
              },
            ],
          },
          {
            _type: 'block',
            _key: 'story3',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'story3-text',
                text: "Our journey began with a simple belief: great dentistry isn't just about teeth — it's about people. Every smile tells a story, and we're here to protect it with honesty, precision, and compassion.",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        _key: 'our-philosophy',
        sectionTitle: 'Our Philosophy',
        content: [
          {
            _type: 'block',
            _key: 'phil1',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'phil1-text',
                text: "We treat every patient the way we'd treat our own family — with respect, empathy, and transparency.",
                marks: [],
              },
            ],
          },
          {
            _type: 'block',
            _key: 'phil2',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'phil2-text',
                text: "From your first visit, you'll notice the difference: we take the time to listen, explain your options clearly, and create a treatment plan that aligns with your goals and comfort.",
                marks: [],
              },
            ],
          },
          {
            _type: 'block',
            _key: 'phil3',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'phil3-text',
                text: "We believe in doing what's right, not what's rushed. That means no shortcuts, no unnecessary upselling — just quality, evidence-based dentistry built on trust and integrity.",
                marks: [],
              },
            ],
          },
          {
            _type: 'block',
            _key: 'phil4',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'phil4-text',
                text: "Our approach is simple: we don't oversell. We always give you options that are clinically necessary, help you understand the benefits of each, and respect your choice — because your care should always be your decision.",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        _key: 'our-care',
        sectionTitle: 'Our Care',
        content: [
          {
            _type: 'block',
            _key: 'care1',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'care1-text',
                text: 'At Northcote Family Dentist, your comfort is our priority.',
                marks: [],
              },
            ],
          },
          {
            _type: 'block',
            _key: 'care2',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'care2-text',
                text: 'Our clinic is designed to feel calm and welcoming, and our team is trained to deliver gentle, precise care using advanced dental technology — including digital scanners, same-day crowns, and low-radiation imaging.',
                marks: [],
              },
            ],
          },
          {
            _type: 'block',
            _key: 'care3',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'care3-text',
                text: "Whether it's a simple filling, a smile makeover, or long-term preventive care, we ensure every treatment is done to the highest standard — with attention to detail that lasts.",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        _key: 'our-vision',
        sectionTitle: 'Our Vision',
        content: [
          {
            _type: 'block',
            _key: 'vision1',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'vision1-text',
                text: "We're building more than a dental clinic — we're building a community of confident smiles.",
                marks: [],
              },
            ],
          },
          {
            _type: 'block',
            _key: 'vision2',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'vision2-text',
                text: 'Our vision is to create a space where patients feel empowered, understood, and valued, not just treated. A place where dentistry feels personal, modern, and full of heart.',
                marks: [],
              },
            ],
          },
          {
            _type: 'block',
            _key: 'vision3',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'vision3-text',
                text: "We thrive on one simple goal — that once you come to our practice, you'll never need to search for another dentist again. We aim to be your lifelong dental home — for you, your family, and the generations to come.",
                marks: [],
              },
            ],
          },
          {
            _type: 'block',
            _key: 'vision4',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'vision4-text',
                text: "Because when you smile freely and confidently, that's when we know we've done our job right.",
                marks: [],
              },
            ],
          },
        ],
      },
    ],
    promiseItems: [
      'To always put your wellbeing first.',
      "To provide honest advice and transparent care — we don't oversell, we only recommend what you truly need, and we always respect your choice.",
      'To invest in the best technology and techniques for your comfort.',
      "To make every visit feel like you're being cared for by family.",
    ],
    ctaText: "✨ Join our dental family today, and let's make this the last dentist you'll ever need.",
    ctaButtonText: 'Book Now',
    ctaButtonUrl: 'https://booking.au.hsone.app/soe/new/Sunnynook%20Dentist?pid=NZSIN01',
  }

  const tx = client.transaction()
  tx.createOrReplace(aboutUsContent as any)
  await tx.commit()

  console.log('✅ Seeded About Us content to Sanity')
}

run().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
