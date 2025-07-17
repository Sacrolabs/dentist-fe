import type React from "react";

import ToothIcon from "./icons-components/ToothIcon";
import ShieldIcon from "./icons-components/ShieldIcon";
import SparkleIcon from "./icons-components/SparkleIcon";

import Link from "next/link";
import { BOOK_APPOINTMENT_URL } from "@/lib/utils";

interface Card {
  title: string;
  subtitle: React.ReactNode;
  bg: string; // Tailwind background color class or custom hex via arbitrary value
  Icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
}

const CARDS: Card[] = [
  {
    title: "$69 Full Exam with X-Ray",
    subtitle: "LIMITED TIME SPECIAL",
    bg: "bg-[#00B0D8]",
    Icon: ToothIcon,
  },
  {
    title: "$999 Single Day Crown",
    subtitle: (<>
      <span className="line-through mr-2 font-bold">$1600</span>
      <span className="font-bold">now only $999</span>
    </>),
    bg: "bg-primary",
    Icon: ShieldIcon,
  },
  {
    title: "$149 Exam & X-Rays + Scale & Polish",
    subtitle: "LIMITED TIME SPECIAL",
    bg: "bg-[#F47F60]",
    Icon: SparkleIcon,
  },
];

export default function PromoCards() {
  return (
    <div className="relative z-20 w-full -mt-8 pointer-events-none">
      <div className="container px-4 pointer-events-auto">
        <div className="grid md:grid-cols-3">
          {CARDS.map(({ title, subtitle, bg, Icon }, idx) => (
            <Link
              key={idx}
              href={BOOK_APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group focus:outline-none"
            >
              <div
                className={`${bg} text-white flex items-center justify-between p-6 md:p-8 transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl focus-visible:-translate-y-2 focus-visible:shadow-2xl group-focus-visible:ring-4 group-focus-visible:ring-primary/40`}
                tabIndex={0}
                role="link"
                aria-label={`Book appointment for promo: ${title}`}
              >
                <div>
                  <h3 className="font-semibold text-lg md:text-sm leading-snug">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs opacity-80 uppercase tracking-wide md:text-xs">
                    {subtitle}
                  </p>
                </div>
                <Icon
                  size={56}
                  strokeWidth={1.4}
                  className="ml-4 hidden md:block flex-shrink-0"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
