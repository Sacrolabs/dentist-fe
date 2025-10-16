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

  const testimonials = [
    {
      id: 1,
      name: 'Devank Shah',
      text: 'I recently had a root canal done and was extremely impressed with the entire experience. Dr. Lakshay did an outstanding job—he was precise, professional, and made me feel completely at ease throughout the procedure. The whole team was friendly and efficient, and everything was spot on from start to finish. Highly recommend!',
      stars: 5,
    },
    {
      id: 2,
      name: 'Jenn Sus',
      text: 'Had all 4 wisdom teeth removed in one go. Was surprised I didn\'t need to be put to sleep as that is the feedback I had got from other dentists, but incredibly I didn\'t feel a thing. Recovery was smooth and service was outstanding from Dr. Lakshay and the team. Price was also reasonable compared to multiple quotes I had before. Highly recommend.',
      stars: 5,
    },
    {
      id: 3,
      name: 'Emma Williams',
      text: 'Was feeling extremely nervous to have all 4 wisdom teeth extracted, my mind was quickly put to ease by Dr. Lakshay Kumar.\n Great communication and care, I\'m pleasantly surprised how fast and painless the whole process was.\n Most affordable teeth extraction on the shore.\n Highly recommend',
      stars: 5,
    },
    {
      id: 4,
      name: 'Nailesh Mevada',
      text: 'Lost a tooth due to a crack and was recommend to see Dr. Lakshay by a friend and got a Dental Implant. Honestly, I was a bit nervous, but he made the whole process feel so chill. He explained everything step by step—and kept me in the loop the whole time. He gave me a definitive quotation and stuck to his quote - no surprises.\n What I really liked? He didn\'t try to sell me a bunch of random stuff I didn\'t need. No nonsense here. Just straight-up honest advice and solid work.\n Prices were fair, and the whole vibe was super friendly.\n He is a gem of person and being under his care for 4 months, I\'ve come to trust him with my teeth from now on.\n If you need a dentist who knows what they\'re doing and keeps it real, Dr. Lakshay is your guy. If you are planning to do a Dental Implant, definitely get a consultation here before you make the final call. I found them to be reasonably priced compared to others.\n Highly recommend—my new tooth and I are very happy!',
      stars: 5,
    },
    {
      id: 5,
      name: 'Liana Douglas',
      text: 'Had teeth extracted on Friday morning with Dr lakshay he was great, helped me feel less nervous, and anxious. He talked through the whole ordeal. He very experienced knows what he doing highly recommend. Thank you',
      stars: 5,
    },
    {
      id: 6,
      name: 'Arpit Monga',
      text: 'I was recommended for Dr.Lakshay through a colleague and undoubtedly he is the most calm and professional person that i\'ve ever encountered with. I had a wisdom tooth removal yesterday and they made it super easy with their painless procedure. I even received a follow up call from the clinic this morning to make sure if I was fine.\n Kudos to the team!',
      stars: 5,
    },
    {
      id: 7,
      name: 'Rijak Bakshi',
      text: 'I would say one of the most professional and friendly medical providers I have been to in a while.\n The staff and Dr. Lakshay were very accomodating, friendly and given that it was my first time ever at a dentist they guided and explained the whole checkup very thoroughly.\n Highly recommend choosing them as your go to dentist!',
      stars: 5,
    },
    {
      id: 8,
      name: 'Chantel Jordaan',
      text: 'First time meeting the new owner Dr Lackshay Kumar and all i can say is he is the friendliest guy ever. His assistant is lovely and they make you feel very comfortable. They can even assist you with payment plans that suit your needs, which i greatly appreciated! Thank you for that😊 i have always been afraid of a dentist but sunnynook dentist make you feel very relaxed. Highly recommended and they are affordable😊',
      stars: 5,
    },
    {
      id: 9,
      name: 'Stu J',
      text: 'Fantastic service; Dr Lucky and the team made my visit very comfortable and smooth. Super easy location and tonnes of parking available. The practice itself is super clean and tidy, and I even enjoyed an episode of Mr Bean while I had my teeth looked at!',
      stars: 5,
    },
  ]

  const ops = testimonials.map((t) => ({
    createOrReplace: {
      _id: `testimonial.${t.id}`,
      _type: 'testimonial',
      name: t.name,
      text: t.text,
      stars: t.stars,
      order: t.id,
    },
  }))

  const tx = client.transaction()
  ops.forEach((op) => tx.createOrReplace(op.createOrReplace as any))
  await tx.commit()

  console.log(`Seeded ${ops.length} testimonials to Sanity`)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
