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
  {
    id: "dental-bridges",
    title: "Dental Bridges",
    shortDescription:
      "Replace one or more missing teeth with natural-looking, comfortable dental bridges.",
    image: "/images/dental-bridges.jpg",
    benefits: [
      "Natural Look and Comfortable Feel",
      "Restores Your Smile and Bite",
      "Prevents Teeth Shifting",
      "Durable and Long-Lasting",
      "Multiple Material Options Available",
    ],
    details: [
      {
        heading: "Introduction",
        content:
          "Dental bridges are an excellent solution for replacing one or more missing teeth. At Northcote Family Dentist, we create custom bridges that blend seamlessly with your natural teeth, providing both aesthetic appeal and functional restoration. A dental bridge literally 'bridges' the gap left by missing teeth, anchoring to adjacent teeth or implants. This proven tooth replacement option helps restore your smile, improves your ability to chew and speak properly, and maintains the natural shape of your face. Our experienced team offers various bridge materials to suit your needs and budget, ensuring you receive a comfortable, natural-looking result.",
      },
      {
        heading: "Procedure Overview",
        content:
          "The bridge procedure typically requires two appointments. During your first visit, we prepare the adjacent teeth (abutment teeth) by carefully reshaping them to accommodate the bridge. We then take precise impressions of your teeth, which are sent to a dental laboratory where skilled technicians craft your custom bridge. A temporary bridge is placed to protect your prepared teeth while your permanent bridge is being made. At your second appointment, usually 2-3 weeks later, we remove the temporary bridge and carefully fit and adjust your new permanent bridge, ensuring proper bite and comfort. Once we're satisfied with the fit and appearance, the bridge is securely cemented in place.",
      },
      {
        heading: "Aftercare Instructions",
        content:
          "Caring for your dental bridge is similar to caring for your natural teeth. Brush twice daily with fluoride toothpaste and floss carefully around the bridge using specialized floss threaders or interdental brushes. Regular dental check-ups every six months are essential to monitor the health of your bridge and surrounding teeth. Avoid chewing hard foods or ice that could damage the bridge. With proper care and maintenance, your dental bridge can last 10-15 years or longer.",
      },
    ],
    cta: "Missing teeth don't have to compromise your smile or confidence. Contact Northcote Family Dentist today to learn more about dental bridges and schedule a consultation. Our caring team will help you choose the best tooth replacement option for your needs.",
  },
  {
    id: "dentures",
    title: "Dentures",
    shortDescription:
      "Affordable, high-quality dentures to restore your smile and confidence.",
    image: "/images/dentures.jpg",
    benefits: [
      "Excellent Value with High Quality",
      "Natural, Low-Cost Solution",
      "Restores Eating and Speaking Ability",
      "Improves Facial Appearance",
      "Custom-Fitted for Comfort",
    ],
    details: [
      {
        heading: "Introduction",
        content:
          "Dentures are a time-tested, affordable solution for replacing multiple missing teeth. At Northcote Family Dentist, we provide excellent value dentures without compromising on quality. Whether you need complete dentures to replace all teeth or partial dentures to fill in gaps, our experienced team will create custom-fitted prosthetics that look natural and feel comfortable. Dentures not only restore your smile's appearance but also improve your ability to eat, speak, and maintain proper facial structure. We understand that losing teeth can be emotionally challenging, and we're committed to providing compassionate care throughout your denture journey.",
      },
      {
        heading: "Procedure Overview",
        content:
          "The denture process begins with a comprehensive examination and impressions of your mouth. If tooth extractions are needed, we'll perform those first and allow time for healing. For complete dentures, we take multiple impressions to ensure an accurate fit, and work with you to select the tooth shade and shape that looks most natural. You'll have try-in appointments where we check the fit, appearance, and bite of your dentures before they're finalized. Partial dentures involve similar steps but are designed to fit around your remaining natural teeth. Once your dentures are ready, we'll make any necessary adjustments to ensure optimal comfort and function. Follow-up visits help us fine-tune the fit as you adjust to wearing them.",
      },
      {
        heading: "Aftercare Instructions",
        content:
          "Remove and rinse your dentures after eating, and brush them daily with a soft-bristled brush and denture cleaner (not regular toothpaste, which can be abrasive). Soak dentures overnight in a denture-cleaning solution to keep them moist and maintain their shape. Handle them carefully over a folded towel or basin of water to prevent breakage if dropped. Continue to brush your gums, tongue, and any remaining natural teeth daily. Visit us regularly for check-ups and professional cleanings, and have your dentures adjusted if they become loose or uncomfortable.",
      },
    ],
    cta: "Don't let missing teeth hold you back from enjoying life. Northcote Family Dentist offers high-quality, affordable dentures tailored to your needs. Contact us today to schedule a consultation and take the first step toward restoring your smile!",
  },
  {
    id: "tooth-extractions",
    title: "Tooth Extractions",
    shortDescription:
      "Safe, gentle tooth extractions including wisdom teeth removal performed by experienced dentists.",
    image: "/images/tooth-extraction.jpg",
    benefits: [
      "Relieves Pain and Discomfort",
      "Prevents Infection Spread",
      "Non-Surgical and Surgical Options",
      "Wisdom Teeth Removal Available",
      "Performed In-House by Qualified Dentists",
    ],
    details: [
      {
        heading: "Introduction",
        content:
          "While we always strive to save your natural teeth, sometimes extraction is the best option for your oral health. At Northcote Family Dentist, we perform both non-surgical and surgical tooth extractions, including wisdom teeth removal, right here in our clinic. Common reasons for extraction include severe tooth decay, advanced gum disease, dental trauma, crowding, or impacted wisdom teeth. Our experienced dentists use modern techniques and gentle care to make the procedure as comfortable as possible. We offer local anesthesia and sedation options to ensure a pain-free experience, and we'll discuss all your options before proceeding with treatment.",
      },
      {
        heading: "Procedure Overview",
        content:
          "For a non-surgical extraction, we begin by numbing the area with local anesthetic. Once you're comfortable, the dentist uses specialized instruments to gently loosen and remove the tooth. Surgical extractions, often needed for impacted or broken teeth, involve making a small incision in the gum tissue to access the tooth. The tooth may be sectioned into smaller pieces for easier removal. Throughout the procedure, you'll feel pressure but no pain. The entire process typically takes 20-40 minutes depending on complexity. Afterward, we place gauze over the extraction site and provide detailed aftercare instructions. Stitches may be used for surgical extractions and will either dissolve on their own or be removed at a follow-up visit.",
      },
      {
        heading: "Aftercare Instructions",
        content:
          "Bite firmly on the gauze for 30-45 minutes to control bleeding. Avoid rinsing, spitting forcefully, or using straws for the first 24 hours to protect the blood clot. Take prescribed pain medication as directed and use ice packs on your face (20 minutes on, 20 minutes off) to reduce swelling. Stick to soft foods for a few days and chew on the opposite side. After 24 hours, gently rinse with warm salt water several times daily. Avoid smoking, alcohol, and strenuous activity for at least 48 hours. If you experience severe pain, excessive bleeding, or signs of infection, contact us immediately.",
      },
    ],
    cta: "Facing a dental emergency or problematic tooth? Northcote Family Dentist is here to help. Our skilled team performs safe, comfortable tooth extractions with your comfort as our top priority. Call us today to schedule an appointment or discuss your concerns.",
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription:
      "Professional teeth whitening treatments to help you achieve a brighter, more confident smile.",
    image: "/images/teeth-whitening.jpg",
    benefits: [
      "Dramatic Results in Short Time",
      "Professional-Grade Whitening",
      "In-Office and Take-Home Options",
      "Safe and Effective Treatment",
      "Boosts Confidence and Self-Esteem",
    ],
    details: [
      {
        heading: "Introduction",
        content:
          "A bright, white smile can significantly boost your confidence and make a great first impression. At Northcote Family Dentist, we offer professional teeth whitening treatments that deliver dramatic results safely and effectively. Whether you prefer the convenience of in-office whitening for immediate results or the flexibility of take-home whitening trays, we have options to suit your lifestyle and goals. Professional whitening is more effective than over-the-counter products because we use higher-concentration bleaching agents and custom-fitted trays for even, predictable results. During your consultation, we'll assess your teeth and discuss which whitening method is best for you.",
      },
      {
        heading: "Procedure Overview",
        content:
          "For in-office whitening, we begin by protecting your gums and lips, then apply a professional-strength whitening gel to your teeth. A special light may be used to activate the gel and accelerate the whitening process. The treatment typically takes 60-90 minutes, and you'll see results immediately – often several shades whiter in just one visit. For take-home whitening, we create custom-fitted trays from impressions of your teeth and provide professional whitening gel. You'll wear the trays for a specified time each day (usually 30 minutes to a few hours) for 1-2 weeks. Both methods are safe and effective, with take-home kits offering more gradual whitening and the flexibility to maintain results over time.",
      },
      {
        heading: "Aftercare Instructions",
        content:
          "After whitening, your teeth may be temporarily sensitive – this is normal and usually subsides within a day or two. Use sensitivity toothpaste if needed. For the first 24-48 hours, avoid foods and drinks that can stain teeth, such as coffee, tea, red wine, berries, and dark sauces. If you smoke, try to refrain for at least 48 hours. Maintain your bright smile with good oral hygiene – brush twice daily, floss regularly, and visit us for routine cleanings. Touch-up treatments every 6-12 months can help maintain your results.",
      },
    ],
    cta: "Ready to flaunt your beautiful smile? Northcote Family Dentist offers professional teeth whitening treatments tailored to your needs. Contact us today to schedule a consultation and discover how we can brighten your smile!",
  },
  {
    id: "porcelain-veneers",
    title: "Porcelain Veneers",
    shortDescription:
      "Transform your smile with custom porcelain veneers for a natural, confident look.",
    image: "/images/porcelain-veneers.jpg",
    benefits: [
      "Natural, Beautiful Appearance",
      "Corrects Multiple Cosmetic Issues",
      "Stain-Resistant Material",
      "Long-Lasting Results",
      "Minimally Invasive Treatment",
    ],
    details: [
      {
        heading: "Introduction",
        content:
          "Porcelain veneers are a popular cosmetic treatment that can transform your smile by correcting a variety of aesthetic concerns. At Northcote Family Dentist, we create custom veneers that look completely natural and help you achieve the perfect, confident smile you've always wanted. Veneers are thin shells of medical-grade porcelain that are bonded to the front surface of your teeth. They can address issues such as discoloration, chips, cracks, gaps between teeth, or teeth that are slightly misaligned or irregularly shaped. Because porcelain closely mimics the light-reflecting properties of natural tooth enamel, veneers blend seamlessly with your existing teeth for a beautiful, natural-looking result.",
      },
      {
        heading: "Procedure Overview",
        content:
          "The veneer process typically requires two to three appointments. During your initial consultation, we discuss your goals and examine your teeth to ensure veneers are the right solution. At the first treatment appointment, we prepare your teeth by removing a very thin layer of enamel (usually less than a millimeter) to make room for the veneers. We then take precise impressions, which are sent to a dental laboratory where skilled ceramists craft your custom veneers. Temporary veneers protect your teeth while the permanent ones are being made. At your final appointment, we carefully bond the veneers to your teeth using a strong dental adhesive, make any necessary adjustments, and polish them to perfection. The result is a stunning, natural-looking smile transformation.",
      },
      {
        heading: "Aftercare Instructions",
        content:
          "Porcelain veneers are durable and stain-resistant, but they still require proper care. Brush twice daily with a non-abrasive toothpaste and floss regularly. Avoid biting hard objects like ice, pens, or fingernails, which can chip the veneers. If you grind your teeth at night, wear a protective mouthguard. Continue regular dental check-ups and professional cleanings every six months. With proper care, porcelain veneers can last 10-15 years or more before needing replacement.",
      },
    ],
    cta: "Dreaming of a Hollywood smile? Northcote Family Dentist can help you achieve it with beautiful, natural-looking porcelain veneers. Schedule a consultation today to discuss your smile makeover!",
  },
  {
    id: "same-day-crowns",
    title: "Same Day Crowns",
    shortDescription:
      "Get a custom crown in just one visit with our advanced same-day crown technology.",
    image: "/images/same-day-crowns.jpg",
    benefits: [
      "Complete in One Visit",
      "No Temporary Crowns Needed",
      "Advanced Digital Technology",
      "Custom-Made, Natural-Looking",
      "Saves Time and Appointments",
    ],
    details: [
      {
        heading: "Introduction",
        content:
          "Traditional crown procedures require multiple appointments and weeks of waiting, but with same-day crown technology at Northcote Family Dentist, you can walk in with a damaged tooth and leave with a beautiful, permanent crown – all in a single visit. Using state-of-the-art digital scanning and milling technology, we design and create your custom crown right here in our office while you wait. This fast, convenient tooth restoration is ideal for busy patients who want quality dental care without the hassle of multiple visits or temporary crowns. Same-day crowns are just as strong, durable, and natural-looking as laboratory-made crowns, but with the added benefit of immediate results.",
      },
      {
        heading: "Procedure Overview",
        content:
          "Your same-day crown appointment begins with preparing your tooth – removing any decay and shaping it to accommodate the crown. Instead of messy impressions, we use a digital scanner to capture 3D images of your tooth and surrounding teeth. This digital impression is instantly sent to our in-office milling machine, where your custom crown is precisely carved from a solid block of high-quality ceramic material. The entire design and milling process takes about 1-2 hours. While your crown is being made, you can relax in our comfortable waiting area. Once the crown is ready, we carefully fit it, make any necessary adjustments, and permanently bond it to your tooth. The result is a perfectly fitted, natural-looking crown completed in just one appointment.",
      },
      {
        heading: "Aftercare Instructions",
        content:
          "Your new crown should function just like a natural tooth. There may be some minor sensitivity for the first few days, which is normal. Avoid chewing extremely hard foods or ice, and maintain good oral hygiene by brushing twice daily and flossing around the crown. If you grind your teeth at night, consider wearing a nightguard to protect your crown. Attend regular dental check-ups so we can monitor your crown and ensure it remains in excellent condition. With proper care, same-day crowns can last 10-15 years or longer.",
      },
    ],
    cta: "Need a crown but don't want the hassle of multiple appointments? Northcote Family Dentist offers convenient same-day crowns using advanced technology. Call us today to schedule your single-visit crown appointment!",
  },
  {
    id: "emergency-dental",
    title: "Emergency Dental Care",
    shortDescription:
      "Same-day emergency appointments for quick relief from dental pain and urgent issues.",
    image: "/images/emergency-dental.jpg",
    benefits: [
      "Same-Day Appointments Available",
      "Quick Relief from Pain",
      "Experienced Emergency Dentists",
      "Comprehensive Urgent Care",
      "Immediate Treatment Options",
    ],
    details: [
      {
        heading: "Introduction",
        content:
          "Dental emergencies can happen at any time and often require immediate attention. At Northcote Family Dentist, we understand that tooth pain, broken teeth, or dental injuries can't always wait for a scheduled appointment. That's why we offer same-day emergency dental care to provide you with quick relief and peace of mind. Common dental emergencies include severe toothaches, knocked-out or broken teeth, lost fillings or crowns, abscesses, and soft tissue injuries. Our experienced emergency dentists are equipped to handle urgent dental issues promptly and effectively, helping you get out of pain and back to your normal routine as quickly as possible.",
      },
      {
        heading: "What to Expect",
        content:
          "When you call with a dental emergency, our team will quickly assess your situation and schedule you for a same-day appointment whenever possible. Upon arrival, we'll take you straight to an exam room where our dentist will evaluate your condition, often with the help of X-rays to diagnose the problem accurately. We'll discuss treatment options and provide immediate care to relieve pain and address the urgent issue. This might include prescribing antibiotics for infection, performing an emergency extraction, re-cementing a crown, or providing a temporary filling. In some cases, we can complete definitive treatment right away; in others, we'll stabilize the situation and schedule a follow-up appointment for comprehensive care. Throughout the process, our priority is your comfort and well-being.",
      },
      {
        heading: "Prevention and Aftercare",
        content:
          "After emergency treatment, follow all aftercare instructions carefully, including taking any prescribed medications as directed. Apply ice to reduce swelling, stick to soft foods, and avoid the affected area when chewing. If pain persists or worsens, contact us immediately. Many dental emergencies can be prevented with good oral hygiene and regular check-ups, which allow us to catch and treat problems before they become urgent. Wear a mouthguard during sports, avoid chewing hard objects, and don't use your teeth to open packages. Keep our emergency contact information handy so you can reach us quickly if an urgent issue arises.",
      },
    ],
    cta: "Experiencing a dental emergency? Don't suffer in pain – Northcote Family Dentist offers same-day emergency appointments to provide quick relief and expert care. Call us immediately, and we'll do our best to see you right away!",
  },
]
