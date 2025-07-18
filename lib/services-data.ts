export type Service = {
  id: string
  title: string
  shortDescription: string
  image: string
  benefits: string[]
  details?: {
    heading: string
    content: string
  }[]
  cta?: string
}

export const services: Service[] = [
  {
    id: "checkups",
    title: "Routine Oral Exams & Check-Ups",
    shortDescription:
      "Regular check-ups to catch small problems early before they turn into serious issues.",
    image: "/images/oral_checkup.webp",
    benefits: [
      "Early Detection & Prevention",
      "Comprehensive Oral Health Monitoring",
      "Professional Cleaning for Healthy Smile",
      "Patient Education",
      "Avoiding Emergencies",
    ],
    details: [
      {
        heading: "Introduction",
        content:
          "Regular dental check-ups are essential for maintaining healthy teeth and gums. At Northcote Family Dentist, we recommend a thorough oral exam and professional cleaning every six months. These routine visits allow our friendly team to catch small problems early – before they turn into more serious issues. By coming in for periodic check-ups, you can prevent tooth decay, gum disease, and painful dental emergencies down the road. We pride ourselves on gentle, family-friendly care, including pain-free dentistry techniques that put even nervous patients at ease.",
      },
      {
        heading: "Procedure Overview",
        content:
          "When you arrive for a routine check-up, our welcoming staff will make you comfortable in the exam room. The visit typically starts with updating your medical history and addressing any concerns or questions you have. Next, our dentist performs a thorough examination of your mouth using a mirror and dental probe. We check each tooth for signs of decay or damage, inspect your gums for any redness or bleeding, and evaluate existing fillings or restorations for integrity. We’ll also assess your bite and jaw joint function, and perform an oral cancer screening by examining your tongue, throat, and other soft tissues. If digital dental X-rays are needed, we take them right in the clinic using modern low-dose systems. After the exam, one of our skilled hygienists will carry out a comfortable professional cleaning (scale and polish) to leave your teeth smooth and bright.",
      },
      {
        heading: "Aftercare Instructions",
        content:
          "You can return to normal activities right away. It’s normal for your teeth to feel ultrasmooth from the polishing – enjoy running your tongue over them! If your gums were a bit inflamed and required a deep clean, they might feel tender afterward; rinsing gently with warm salt water later in the day can help. Keep up great home care by brushing twice daily with fluoride toothpaste and flossing once a day, and follow any personalised tips our team provided.",
      },
    ],
    cta: "Has it been a while since your last dental check-up? Don’t worry – we’re here to help get your oral health back on track. Reach out to Northcote Family Dentist to book your next oral exam and cleaning. Our compassionate, experienced team welcomes patients of all ages. Call us today to schedule a check-up and take the first step toward a healthier, brighter smile!",

  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    shortDescription:
      "Relieve pain and save your natural tooth with modern, comfortable root canal therapy.",
    image: "/images/root-canal-treatment.jpg",
    benefits: [
      "Relieves Tooth Pain",
      "Saves Your Natural Tooth",
      "Stops Infection Spread",
      "Restores Function",
      "Prevents Extraction & More Extensive Work",
    ],
  },
  {
    id: "crowns",
    title: "Dental Crowns",
    shortDescription: "Restore damaged teeth with durable, natural-looking dental crowns.",
    image: "/images/dental-crown-procedure.jpg",
    benefits: [
      "Protects Weak or Damaged Teeth",
      "Restores Function",
      "Natural, Aesthetic Appearance",
      "Long-Lasting Solution",
      "Same-Day Option Available",
    ],
  },
  {
    id: "fillings",
    title: "Tooth-Colored Fillings (White Fillings)",
    shortDescription:
      "Repair cavities with natural-looking composite resin fillings that blend with your teeth.",
    image: "/images/white-fillings.jpg",
    benefits: [
      "Natural Appearance",
      "Mercury-Free & Safe",
      "Conserves Tooth Structure",
      "Strong and Versatile",
      "Reduced Sensitivity",
    ],
  },
  {
    id: "implants",
    title: "Dental Implants",
    shortDescription: "Replace missing teeth with the gold standard in tooth replacement.",
    image: "/images/dental-implants.jpg",
    benefits: [
      "Closest Thing to Natural Teeth",
      "Longevity and Reliability",
      "Preserves Jawbone Health",
      "Protects Adjacent Teeth",
      "Enhanced Comfort and Confidence",
    ],
  },
  {
    id: "invisalign",
    title: "Invisalign",
    shortDescription: "Straighten your teeth discreetly with clear, removable aligners.",
    image: "/images/invisalign-treatment.jpg",
    benefits: [
      "Nearly Invisible Appearance",
      "Removable Convenience",
      "Greater Comfort",
      "Predictable, Effective Results",
      "Fewer Appointments & No Emergencies",
    ],
  },
]
