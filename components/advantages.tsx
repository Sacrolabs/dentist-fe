import Image from "next/image";

const advantages = [
  {
    src: "/images/advantages/Southern_Cross_Insurance_for_dental_care.png.webp",
    alt: "Southern Cross Insurance for dental care"
  },
  {
    src: "/images/advantages/nz-dental-association.png.webp",
    alt: "NZ Dental Association"
  },
  {
    src: "/images/advantages/supergold-card-for-dental-services-nz.jpg.webp",
    alt: "SuperGold Card for dental services NZ"
  },
  {
    src: "/images/advantages/qcard-for-dental-care.jpg.webp",
    alt: "QCard for dental care"
  },
  {
    src: "/images/advantages/free-onsite-parking.png.webp",
    alt: "Free onsite parking"
  }
];

export default function Advantages() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Our Advantages</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {advantages.map((item, idx) => (
            <div
              key={item.src}
              className="rounded flex items-center justify-center transition-transform hover:scale-105"
              style={{ minWidth: 170, minHeight: 100 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={170}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
