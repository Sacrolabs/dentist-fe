import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CalendarPlus } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Your Smile, Your Choice, Our Care
          </h2>
          <p className="text-gray-200 mb-8">
            At Northcote Family Dentist, we believe that the best dental care
            starts with a conversation. Come visit us and experience dentistry
            that's modern, compassionate, and truly patient-first.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="hero-cta bg-primary hover:bg-primary/90 btn-texture"
            >
              <Link
                href="https://booking.au.hsone.app/soe/new/Sunnynook%20Dentist?pid=NZSIN01"
                target="_blank"
                className="flex items-center gap-2"
              >
                <CalendarPlus size={18} />
                Book Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/register">Register Your Interest</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
