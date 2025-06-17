export default function AboutTimeline() {
  const timelineEvents = [
    {
      year: "2005",
      title: "Clinic Founded",
      description: "Northcote Family Dentist opens its doors to serve the North Shore community",
    },
    {
      year: "2010",
      title: "Technology Upgrade",
      description: "Invested in digital X-ray systems and modern dental equipment",
    },
    {
      year: "2015",
      title: "Team Expansion",
      description: "Added specialist dentists and expanded our range of services",
    },
    {
      year: "2020",
      title: "Same Day Crowns",
      description: "Introduced CEREC technology for same-day crown treatments",
    },
    {
      year: "2023",
      title: "18+ Years Strong",
      description: "Continuing to serve over 1000 families with trusted dental care",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <span className="font-semibold">Serving North Shore Since 2005</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Journey</h2>
            <p className="text-gray-600">18+ years of trusted dental care in the North Shore community</p>
          </div>

          <div className="relative">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-bold text-primary">{event.year}</span>
                    <h3 className="text-xl font-semibold text-secondary">{event.title}</h3>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
