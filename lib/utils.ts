import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * The fixed booking URL for Sunnynook Dentist appointments.
 */
export const BOOK_APPOINTMENT_URL = "https://booking.au.hsone.app/soe/new/Sunnynook%20Dentist?pid=NZSIN01";
