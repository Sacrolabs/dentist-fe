'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Phone, ShieldCheck, CalendarPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Label } from '@/components/ui/label';

export default function Hero() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, service }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setName('');
        setPhone('');
        setService('');
      } else {
        alert('Failed to send appointment request. Please try again later.');
      }
    } catch (error) {
      alert('Failed to send appointment request. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-secondary overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dental-clinic-hero.jpg"
          alt="Modern dental clinic with advanced equipment and comfortable patient areas"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary/90"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-24 md:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-primary">Northcote Family Dentist</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Affordable, Ethical, and Accessible Dentistry
            </p>
            <p className="text-lg mb-8 max-w-lg lg:max-w-xl mx-auto lg:mx-0">
              At Northcote Family Dentist, our mission is simple: To make
              high-quality dentistry affordable, ethical, and accessible for
              every family in the Northcote and Northshore community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                asChild
                size="lg"
                className="hero-cta bg-primary hover:bg-primary/90 btn-texture text-white"
              >
                <Link
                  href="https://booking.au.hsone.app/soe/new/Sunnynook%20Dentist?pid=NZSIN01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <CalendarPlus size={18} />
                  Book Appointment
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href="tel:094492006" className="flex items-center gap-2">
                  <Phone size={18} />
                  Call Today
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-secondary text-black"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <ShieldCheck size={18} />
                  Insurance Info
                </Link>
              </Button>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-md mx-auto lg:ml-auto">
            <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
              Book Your Visit
            </h2>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-4 text-center">
                <p>
                  Thank you! We'll contact you shortly to confirm your
                  appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-secondary">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-input border-gray-300 text-secondary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-secondary">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="form-input border-gray-300 text-secondary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-secondary">
                    Service
                  </Label>
                  <Select value={service} onValueChange={setService} required>
                    <SelectTrigger
                      id="service"
                      className="form-input border-gray-300 text-secondary"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="check-up">Routine Check-up</SelectItem>
                      <SelectItem value="cleaning">Teeth Cleaning</SelectItem>
                      <SelectItem value="whitening">Teeth Whitening</SelectItem>
                      <SelectItem value="invisalign">Invisalign</SelectItem>
                      <SelectItem value="implants">Dental Implants</SelectItem>
                      <SelectItem value="emergency">
                        Dental Emergency
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full hero-cta bg-primary hover:bg-primary/90 btn-texture text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  We'll contact you shortly to confirm your appointment details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
