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

  const dentists = [
    {
      id: 'lakshay',
      name: 'Dr. Lakshay Kumar',
      position: 'Founding Dentist & Principal',
      bio: 'Our founding test dentist and passionate dog father. A dynamic person with a rare ability to empathise and understand people from all walks of life. He has a decade of experience and has worked across four New Zealand cities before making Auckland his home.',
      fullBio: 'After migrating to New Zealand, Lakshay worked in four towns/cities before finally making Auckland his home. He took over Sunnynook Dental clinic 2 years ago and it has become his little work child. Since then, he has constantly made strategic improvements in the look, feel, work-culture and patient experience. He is well educated and continually keeps updating himself, being a recipient of the prestigious Membership of the Royal College of Surgeons, Edinburgh. He\'s a true techie and gadget freak, currently on a mission to automate every piece of his house. When not at work, he can be seen saving the world on his latest PlayStation game. He\'s an avid Game of Thrones fan - ask him about the finale ending and you can kiss goodbye to your dental appointment!',
      specialties: ['Dental Implants', 'Root Canal', 'Wisdom Teeth'],
      credentials: 'BDS (2009), NZDREX, MFDS Royal College of Surgeons – Edinburgh',
      languages: 'English, Hindi, Punjabi',
      order: 1,
    },
    {
      id: 'sherin',
      name: 'Dr. Sherin Takawi',
      position: 'Cosmetic & Invisalign Specialist',
      bio: 'An Otago graduate extraordinarily passionate about all things dentistry, with a clinical focus on Invisalign and cosmetic dentistry. She has an eye for veneers and crowns, combining her knowledge to achieve the best smile possible.',
      fullBio: 'Dr Sherin has worn many hats over the years. When not at the clinic, she teaches final year Dentistry students at Otago University South Auckland campus, where she\'s been a staff member for over four years. She\'s also the Honorary Secretary of the Auckland Dental Association, serving on their Executive Committee for over three years. She\'s known for being very bubbly and friendly with all patients. Outside the clinic, her passions range from sweating it out at the gym to baking up a storm in the kitchen. Our lunchroom is always well stocked with her cakes, puffs and pastries. She\'s also a recent puppy aunt and may share Milo\'s pic of the day with you!',
      specialties: ['Invisalign', 'Cosmetic', 'Veneers'],
      credentials: 'BDS (Otago), GradDipClinDent (Clear Aligners) – University of London (EODO)',
      languages: 'English, Arabic',
      order: 2,
    },
    {
      id: 'andre',
      name: 'Dr. Andre Xavier',
      position: 'General & Restorative Dentist',
      bio: 'The latest brilliant dentist to join our team, bringing a confounding personality and rib-tickling humour. Recently moved from England with 7 years of experience in restorative dentistry.',
      fullBio: 'Dr Andre has recently joined from England (legend has it he left around the same time as Harry and Megan - the Tabloids wouldn\'t let him live in peace!). He\'s proven to be extraordinarily passionate and dedicated, with a precise focus on delivering high-quality, comprehensive examinations. His community approach provides care, compassion and knowledge so patients feel comfortable making informed decisions. With 7 years of experience across hospital and private clinic settings, his particular passion centres on restorations like fillings, crowns, and veneers. During his days off, he enjoys exploring New Zealand\'s beautiful backyard, going to the gym, and attending Salsa classes!',
      specialties: ['Restorative', 'Veneers', 'Crowns'],
      credentials: 'BDS (UK)',
      languages: 'English',
      order: 3,
    },
  ]

  const supportTeam = [
    {
      id: 'alphin',
      name: 'Alphin Wilson',
      position: 'Practice Manager',
      bio: 'Our practice manager and coffee lover. She\'s the one who keeps a check on all of us and is our brilliant all-rounder. Sunnynook Dentist\'s longest serving and surviving team member.',
      fullBio: 'Alphin has immense knowledge and experience in the dental industry and is well versed with all aspects of dentistry. You\'ll find her as your nurse, a friendly face at reception, or racing around managing background duties. She has an eye for detail and constantly finds ways to make the practice better and more efficient. She has worked through every role at the practice and understands the ins and outs from front desk reception to mastering dental nursing skills. She\'s involved in onboarding and training new team members, drawing on her vast experience. She loves organising staff parties and activities. In her free time, she\'s on a quest to make the perfect playlist for everyone to enjoy and loves catching up for coffee with friends, exploring different cafes each weekend.',
      specialties: ['Management', 'Coffee Expert', 'Training'],
      credentials: 'Practice Management Specialist',
      order: 4,
    },
  ]

  const allMembers = [
    ...dentists.map((m) => ({ ...m, isDentist: true })),
    ...supportTeam.map((m) => ({ ...m, isDentist: false })),
  ]

  const ops = allMembers.map((m) => ({
    createOrReplace: {
      _id: `teamMember.${m.id}`,
      _type: 'teamMember',
      memberId: m.id,
      name: m.name,
      position: m.position,
      bio: m.bio,
      fullBio: m.fullBio,
      specialties: m.specialties,
      credentials: m.credentials,
      languages: m.languages,
      order: m.order,
      isDentist: m.isDentist,
    },
  }))

  const tx = client.transaction()
  ops.forEach((op) => tx.createOrReplace(op.createOrReplace as any))
  await tx.commit()

  console.log(`Seeded ${ops.length} team members to Sanity`)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
