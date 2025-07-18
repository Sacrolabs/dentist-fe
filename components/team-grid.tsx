import Image from "next/image";
import {
  Heart,
  Microscope,
  Smile,
  Users,
  Award,
  Coffee,
  Star,
  Globe,
  Camera,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export default function TeamGrid() {
  const dentists = [
    {
      id: "lakshay",
      name: "Dr. Lakshay Kumar",
      position: "Founding Dentist & Principal",
      image: "/images/team/lakshay-kumar.jpg",
      bio: "Our founding dentist and passionate dog father. A dynamic person with a rare ability to empathise and understand people from all walks of life. He has a decade of experience and has worked across four New Zealand cities before making Auckland his home.",
      fullBio:
        "After migrating to New Zealand, Lakshay worked in four towns/cities before finally making Auckland his home. He took over Sunnynook Dental clinic 2 years ago and it has become his little work child. Since then, he has constantly made strategic improvements in the look, feel, work-culture and patient experience. He is well educated and continually keeps updating himself, being a recipient of the prestigious Membership of the Royal College of Surgeons, Edinburgh. He's a true techie and gadget freak, currently on a mission to automate every piece of his house. When not at work, he can be seen saving the world on his latest PlayStation game. He's an avid Game of Thrones fan - ask him about the finale ending and you can kiss goodbye to your dental appointment!",
      specialties: [
        { icon: <Microscope className="h-4 w-4" />, name: "Dental Implants" },
        { icon: <Heart className="h-4 w-4" />, name: "Root Canal" },
        { icon: <Award className="h-4 w-4" />, name: "Wisdom Teeth" },
      ],
      credentials:
        "BDS (2009), NZDREX, MFDS Royal College of Surgeons – Edinburgh",
      languages: "English, Hindi, Punjabi",
      readMore: `After migrating to New Zealand he has worked in four towns/cities of New Zealand before finally making Auckland his home. He took over Sunnynook Dental clinic 2 years ago and it has now become his little work child. Since this time Dr Lakshay has constantly made strategic improvements in the look, feel, work-culture and patient experience @Sunnynook Dentist.\n\nHe has carefully and thoughtfully planned and pioneered the growth of Sunnynook Dentist. Since he took over, he has treated hundreds of happy and satisfied patients – The reviews we receive on Google and Facebook are a testimony to the happy clients we have earned during these years. He is on a quest to enlighten the world to floss. Legend has it that The Queen once took lessons from him on flossing and she has managed to retain all her teeth since.\n\nHe is well educated and continually keeps updating himself. He has many professional laurels, some of the most notable being the recipient awardee of the prestigious Membership of the Royal College of Surgeons, Edinburgh and Member of Faculty of General Dental Practice (UK).\n\nHe can be classified as an iPhone type guy – likes non-complicated and minimalistic ideas. He is a blackbelt in taking complex concepts and explaining them in plain English, especially if its to do with your teeth. Although he can do the same in Hindi and Punjabi. Dental surgery comes natural to him and has special interest and immense experience in Dental Implants, Root Canal Treatments and Wisdom teeth extractions.\n\nLakshay is a true techie and gadget freak. He is currently on a mission to automate every last piece of his house (and life). When he is not at work, Lakshay can be seen saving the world on his latest PlayStation game. He is an avid Game of Thrones fan. Ask him how he felt about the Finale ending,\nand you can kiss goodbye to your dental appointment and listen to his Game of Thrones ending theories for the next 30 mins. Don’t tell us we didn’t warn you.`,
    },
    {
      id: "sherin",
      name: "Dr. Sherin Takawi",
      position: "Cosmetic & Invisalign Specialist",
      image: "/images/team/sherin-takawi.jpg",
      bio: "An Otago graduate extraordinarily passionate about all things dentistry, with a clinical focus on Invisalign and cosmetic dentistry. She has an eye for veneers and crowns, combining her knowledge to achieve the best smile possible.",
      fullBio:
        "Dr Sherin has worn many hats over the years. When not at the clinic, she teaches final year Dentistry students at Otago University South Auckland campus, where she's been a staff member for over four years. She's also the Honorary Secretary of the Auckland Dental Association, serving on their Executive Committee for over three years. She's known for being very bubbly and friendly with all patients. Outside the clinic, her passions range from sweating it out at the gym to baking up a storm in the kitchen. Our lunchroom is always well stocked with her cakes, puffs and pastries. She's also a recent puppy aunt and may share Milo's pic of the day with you!",
      specialties: [
        { icon: <Smile className="h-4 w-4" />, name: "Invisalign" },
        { icon: <Award className="h-4 w-4" />, name: "Cosmetic" },
        { icon: <Star className="h-4 w-4" />, name: "Veneers" },
      ],
      credentials:
        "BDS (Otago), GradDipClinDent (Clear Aligners) – University of London (EODO)",
      languages: "English, Arabic",
      readMore: `Dr Sherin has worn many hats over the years. When she is not at the clinic, she can be found teaching the final year Dentistry students at the Otago University South Auckland campus, where she has been a member of staff for over four years. She is also the Honorary Secretary of the Auckland Dental Association, serving on their Executive Committee for over three years.

      She is known for being very bubbly and friendly with all her patients and takes pride in her professional development. Dr Sherin is fluent in both English and Arabic.

      Outside of the clinic, you can find Dr Sherin’s passions range from sweating it out at the gym or baking up a storm in the kitchen. Sherin has recently picked up baking as her passion. Our lunchroom is a testimony to that, always being well stocked with cakes, puffs and pastries. We all love to help ourselves to her baking when she brings it in. Ya Ya we do brush after we have them. If you’re lucky and we haven’t eaten them all, she may even share her baking with you! She is also a recent puppy aunt and on your lucky day she will share Milo’s pic of the day with you.`,
    },
    {
      id: "andre",
      name: "Dr. Andre Xavier",
      position: "General & Restorative Dentist",
      image: "/images/team/andre-xavier.jpg",
      bio: "The latest brilliant dentist to join our team, bringing a confounding personality and rib-tickling humour. Recently moved from England with 7 years of experience in restorative dentistry.",
      fullBio:
        "Dr Andre has recently joined from England (legend has it he left around the same time as Harry and Megan - the Tabloids wouldn't let him live in peace!). He's proven to be extraordinarily passionate and dedicated, with a precise focus on delivering high-quality, comprehensive examinations. His community approach provides care, compassion and knowledge so patients feel comfortable making informed decisions. With 7 years of experience across hospital and private clinic settings, his particular passion centres on restorations like fillings, crowns, and veneers. During his days off, he enjoys exploring New Zealand's beautiful backyard, going to the gym, and attending Salsa classes!",
      specialties: [
        { icon: <Award className="h-4 w-4" />, name: "Restorative" },
        { icon: <Smile className="h-4 w-4" />, name: "Veneers" },
        { icon: <Heart className="h-4 w-4" />, name: "Crowns" },
      ],
      credentials: "BDS (UK)",
      languages: "English",
      readMore: `Since joining Sunnynook Dentist, Dr Andre Xavier has proven to be an extraordinarily passionate, dedicated dental professional. He has a precise focus on delivering high-quality, comprehensive examinations and treatment individualised to each patient’s needs. This stems from his community approach to providing care, compassion and, above all, knowledge to his patients, so they feel comfortable and confident enough to make informed decisions regarding their own dental health. Dr Andre has a good grasp of communicating across all cultures as he has recently joined our fabulous team after having travelled all the way from the UK – he even has that old English charm to greet you with. Don’t be surprised if you are greeted by him with proper English etiquette with a sir or mam. As Dr Andre brings 7 years of experience across various aspects of dentistry, having worked in both busy hospital and private clinic settings, you can have every confidence that he possesses the capabilities to perform any dental treatment precisely and gently. His particular focus and passion is centred on restorations, such as fillings, crowns, and veneers – so he will be more than happy to work with you to give you that stunning smile.
      During his odd days off – he enjoys exploring New Zealand’s beautiful backyard, going to the gym, and attending Salsa classes! Book with Dr Andre today to enjoy a world-class dentistry experience.`,
    },
  ];

  const supportTeam = [
    {
      id: "alphin",
      name: "Alphin Wilson",
      position: "Practice Manager",
      image: "/images/team/alphin-wilson.jpg",
      bio: "Our practice manager and coffee lover. She's the one who keeps a check on all of us and is our brilliant all-rounder. Sunnynook Dentist's longest serving and surviving team member.",
      fullBio:
        "Alphin has immense knowledge and experience in the dental industry and is well versed with all aspects of dentistry. You'll find her as your nurse, a friendly face at reception, or racing around managing background duties. She has an eye for detail and constantly finds ways to make the practice better and more efficient. She has worked through every role at the practice and understands the ins and outs from front desk reception to mastering dental nursing skills. She's involved in onboarding and training new team members, drawing on her vast experience. She loves organising staff parties and activities. In her free time, she's on a quest to make the perfect playlist for everyone to enjoy and loves catching up for coffee with friends, exploring different cafes each weekend.",
      specialties: [
        { icon: <Users className="h-4 w-4" />, name: "Management" },
        { icon: <Coffee className="h-4 w-4" />, name: "Coffee Expert" },
        { icon: <Award className="h-4 w-4" />, name: "Training" },
      ],
      credentials: "Practice Management Specialist",
      readMore: `She has a rare depth of experience in the dental industry and has worked though every role at the practice, she understands the in and outs of the practice from the front desk reception to mastering the skills of a dental nurse, to managing a perfectly smooth-running practice. She is also involved in the onboarding and training of new team members. In this capacity she draws on her vast experience and knowledge of different roles and history at Sunnynook Dentist and at other practices throughout New Zealand. She is our Jack of all trades and mastering each one of those roles royally. She loves organising all the staff parties and activities and the success of these events speaks for why she is our beloved practice manager.

      In her free time, Alphin is currently on a quest to make the perfect playlist for everyone to enjoy. She is extremely social and loves to catch up for a coffee with friends, exploring different cafes each weekend. If not out and about, you may find her cosied up in the library with a good book in hand.`,
    },
    {
      id: "olga",
      name: "Olga",
      position: "Receptionist & Social Media Expert",
      image: "/images/team/olga.jpg",
      bio: "Our smiley face receptionist - Ray of Sunshine and Expert Task Juggler. Our resident Instagram expert and the brainchild behind most of our social media posts.",
      fullBio:
        "She's probably the first person you'll talk to when you call us and the first to greet you with her infectious smile when you walk through our doors. She has a unique ability of connecting with patients in a way no one else can. She's super organised and believes things must be done once and done perfectly. She keeps tabs on everyone in the team - we can be seen sneaking away when we haven't finished our tasks! When away from the clinic, you'll find her outdoors amongst nature with her furry baby Froddo. She loves hiking and has found recent love in Photography and Baking, having done advanced training in both. Olga's caring and kind nature makes it easy for patients to connect and feel at ease.",
      specialties: [
        { icon: <Camera className="h-4 w-4" />, name: "Social Media" },
        { icon: <Smile className="h-4 w-4" />, name: "Patient Care" },
        { icon: <Globe className="h-4 w-4" />, name: "Photography" },
      ],
      credentials: "Reception & Social Media Specialist",
      languages: "English, Russian",
      readMore: `She keeps a tab on everyone in the team and makes sure everyone is well behaved and well organised. We can be seen sneaking away from Olga when we haven’t finished our list of tasks….everyone at work is scared of the “Olga look”. When you see it you can’t miss it.

      When Olga is away from the clinic, you will often find her outdoors amongst nature with her furry baby Froddo. She loves to go hiking and has found recent love in Photography and Baking. She has done advanced training in both and you may see her running her studio or bakery in the future ( although we secretly pray she doesn’t leave us). Olga’s caring and kind nature makes it easy for our patients to connect and feel at ease and this allows everyone who walks through our doors to enjoy a cheerful, comfortable, and successful visit. Olga is fluent in English and Russian.`,
    },
    {
      id: "amy",
      name: "Amy",
      position: "Dental Nurse / Receptionist / Marketing Coordinator",
      image: "/images/team/amy.jpg",
      bio: "Our resident Instagram expert and Super Mom to Harlem, Halo, Harper (the three musketeers). Proud Māori currently learning fluent Te Reo from her younger ones.",
      fullBio:
        "Amy is Sunnynook Dentist's longest serving and surviving team member who recently re-joined after taking time off to prioritise her 3 beautiful children. She exudes cheerful, exuberant energy wherever she goes. Amy is our brilliant all-rounder - you'll find her as your nurse, friendly face at reception, or racing around managing background duties. She's our expert organiser and loves the game of picking up stuff the dentist left out and putting it back where it belongs (she perfected this skill from her 3 kids!). She's adapted a healthy lifestyle and lost 20 kgs in the last year, something we're all proud of. Away from the clinic, she spends time with her partner and children finding secret spots around Auckland that work wonders on her Instagram.",
      specialties: [
        { icon: <Camera className="h-4 w-4" />, name: "Marketing" },
        { icon: <Users className="h-4 w-4" />, name: "Nursing" },
        { icon: <Heart className="h-4 w-4" />, name: "Patient Care" },
      ],
      credentials: "Dental Nursing & Marketing Specialist",
      languages: "English, Te Reo Māori",
      readMore: `She exudes a cheerful, exuberant energy wherever she goes, and we have no idea how we managed without her! Amy is our brilliant allrounder, and you will find her as your nurse, a friendly face at reception or racing around managing our background duties. She is our expert organiser and loves playing the game – lets pickup stuff the dentist left out and put it back to the place it belongs. We believe she perfected that skill from her 3 kids (Dentists are no less than Kids for Nurses). Once you get chatting with her, I doubt you’ll even remember that you’re at a dental clinic. Away from the clinic she will be spending time with her partner and children finding those secret little spots around Auckland that work wonder on her instagram. She has adapted a healthy lifestyle and lost 20 kgs in the last year, something we all are so proud of. So, if you would like some tips, we encourage you to come meet her at your next dental appointment– she will be sure to provide you with a warm welcome, and a smiley greeting every time.`,
    },
  ];

  const nursingTeam = [
    {
      name: "Raquel",
      position: "Dental Nurse",
      bio: "Our smiley, popcorn loving Super Mom to Sam. Recently joined from Dubai and loves the relaxed NZ lifestyle. Expert organiser who works with Dr Sherin.",
      languages: "English, Filipino",
      readMore: `She exudes a cheerful, exuberant energy wherever she goes, and we have no idea how we would managed without her! Racquel is our brilliant allrounder, and you will find her as your nurse, a friendly face at reception or racing around managing our background duties. She is our expert organiser and loves playing the game – let’s pickup stuff the dentist left out and put it back to the place it belongs. We believe she perfected that skill from her two kids (Dentists are no less than Kids for Nurses). Once you get chatting with her, I doubt you’ll even remember that you’re at a dental clinic. Away from the clinic she will be spending time with her Husband and sam finding best icecream spots around Auckland. So, if you would like some tips, we encourage you to come meet her at your next dental appointment– she will be sure to provide you with a warm welcome, and a smiley greeting every time.

      Racquel is fluent in English and Filipino. She works with Dr Sherin and you are in for a comfortable, Calming and entertaining experience with this team.`,
    },
    {
      name: "Isabel (Isa)",
      position: "Dental Nurse",
      bio: "Latest addition to our nursing team with vast experience from Argentina and Australia. Our organisational rockstar managing dental laboratory and sterilisation protocols. Works with Dr Andre.",
      languages: "English, Spanish",
      readMore: `She is our organisational rockstar in the clinic and manages our dental laboratory and sterilisation protocols to perfection. She may come across as timid and shy at first but wait till she gets comfortable with you; she becomes the star of the party and will always greet everyone around her with an infectious smile, and gentle voice.  Before coming to work with us she could be found working in Sydney managing a larhe team at a cooperate dental practice. She is a keen traveller and has traveled most of the world. She often has a trip planned, and by Monday morning has many stories to tell of both the buoyant successes and hilarious failures. She is also a passionate dancer, and exceptional latin chef. She is fluent in English and Spanish.

      Isa primarily works with Dr Andre. They both have an eye for attention to detail. So if you’re keen to get this dream team, don’t hesitate to book today.`,
    },
    {
      name: "Nidhi",
      position: "Dental Nurse & Saturday Specialist",
      bio: "Our Saturday nurse and ace Hummus Maestro. Overseas trained dentist currently converting her degree to NZ standards. Works with Dr Zac on Saturdays.",
      languages: "English, Hindi",
      readMore: `She works with Dr  Zac on Saturdays. If work doesn’t allow you to come to your Dentist on a weekday, then it’s time to change jobs !! But if you plan to stick to this one, then you are in great hands and with this lovely team.

      These days her ‘spare’ time is spent focusing on her full time master’s course and completing her weekly ritual of going on a Sunday Hike when the Auckland weather gods are kind.`,
    },
  ];

  // Reusable ReadMoreModal component
  function ReadMoreModal({
    triggerLabel,
    title,
    children,
  }: {
    triggerLabel: string;
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-primary underline text-xs font-medium hover:text-secondary transition-colors">
            {triggerLabel}
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="mt-2 text-sm text-gray-700 max-h-[60vh] overflow-y-auto">
            {children}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* Dentists Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Our Dentists
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Meet our experienced dental professionals who are passionate about
            providing exceptional care
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dentists.map((dentist) => (
              <div
                key={dentist.id}
                className="team-card rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={dentist.image || "/placeholder.svg"}
                      alt={`${dentist.name} - ${dentist.position}`}
                      width={400}
                      height={400}
                      className="team-photo w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="team-overlay">
                    <div className="meet-text">
                      Meet Dr. {dentist.name.split(" ")[1]}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-1">
                    {dentist.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {dentist.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {dentist.bio}
                  </p>
                  {dentist.readMore && (
                    <div className="mb-4 text-black">
                      <ReadMoreModal
                        triggerLabel="Read more"
                        title={`About ${dentist.name}`}
                      >
                        {dentist.readMore.split("\n").map((p, i) => (
                          <p key={i} className="mb-2">
                            {p}
                          </p>
                        ))}
                      </ReadMoreModal>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {dentist.specialties.map((specialty, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                      >
                        {specialty.icon}
                        <span>{specialty.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-gray-500 space-y-1">
                    <p className="italic">{dentist.credentials}</p>
                    <p>
                      <strong>Languages:</strong> {dentist.languages}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Our Support Team
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            The backbone of our practice - dedicated professionals who ensure
            your visit is comfortable and seamless
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportTeam.map((member) => (
              <div
                key={member.id}
                className="team-card rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.position}`}
                      width={400}
                      height={400}
                      className="team-photo w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="team-overlay">
                    <div className="meet-text">Meet {member.name}</div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  {member.readMore && (
                    <div className="mb-4 text-black">
                      <ReadMoreModal
                        triggerLabel="Read more"
                        title={`About ${member.name}`}
                      >
                        {member.readMore.split("\n").map((p, i) => (
                          <p key={i} className="mb-2">
                            {p}
                          </p>
                        ))}
                      </ReadMoreModal>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specialties.map((specialty, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                      >
                        {specialty.icon}
                        <span>{specialty.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-gray-500 space-y-1">
                    <p className="italic">{member.credentials}</p>
                    {member.languages && (
                      <p>
                        <strong>Languages:</strong> {member.languages}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nursing Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Our Nursing Team
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Skilled dental nurses who provide exceptional chairside support and
            patient care
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nursingTeam.map((nurse, index) => (
              <div
                key={index}
                className="team-card bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {nurse.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {nurse.position}
                </p>
                <p className="text-gray-600 text-sm mb-4">{nurse.bio}</p>
                {nurse.readMore && (
                  <div className="mb-4 text-black">
                    <ReadMoreModal
                      triggerLabel="Read more"
                      title={`About ${nurse.name}`}
                    >
                      {nurse.readMore.split("\n").map((p, i) => (
                        <p key={i} className="mb-2">
                          {p}
                        </p>
                      ))}
                    </ReadMoreModal>
                  </div>
                )}

                <p className="text-xs text-gray-500">
                  <strong>Languages:</strong> {nurse.languages}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Photo Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Our Dental Family
          </h2>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/team/dental-team.jpg"
              alt="Complete dental team at Northcote Family Dentist"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-gray-600 mt-6 text-lg">
              Together, we're committed to providing exceptional dental care
              with a personal touch. Every member of our team is dedicated to
              making your dental experience comfortable, stress-free, and
              positive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
