"use client"

import Image from "next/image"
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
} from "lucide-react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

type TeamMember = {
  _id: string
  memberId: string
  name: string
  position: string
  imageUrl?: string
  bio: string
  fullBio?: string
  specialties?: string[]
  credentials?: string
  languages?: string
  readMore?: string
}

// Icon mapping for specialties
const iconMap: Record<string, any> = {
  "Dental Implants": <Microscope className="h-4 w-4" />,
  "Root Canal": <Heart className="h-4 w-4" />,
  "Wisdom Teeth": <Award className="h-4 w-4" />,
  "Invisalign": <Smile className="h-4 w-4" />,
  "Cosmetic": <Award className="h-4 w-4" />,
  "Veneers": <Star className="h-4 w-4" />,
  "Restorative": <Award className="h-4 w-4" />,
  "Crowns": <Heart className="h-4 w-4" />,
  "Management": <Users className="h-4 w-4" />,
  "Coffee Expert": <Coffee className="h-4 w-4" />,
  "Training": <Award className="h-4 w-4" />,
  "Social Media": <Camera className="h-4 w-4" />,
  "Patient Care": <Smile className="h-4 w-4" />,
  "Photography": <Globe className="h-4 w-4" />,
  "Marketing": <Camera className="h-4 w-4" />,
  "Nursing": <Users className="h-4 w-4" />,
}

function ReadMoreModal({
  triggerLabel,
  title,
  children,
}: {
  triggerLabel: string
  title: string
  children: React.ReactNode
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
  )
}

export default function TeamMemberCardOriginal({ 
  member, 
  isDentist 
}: { 
  member: TeamMember
  isDentist: boolean
}) {
  const displayName = isDentist 
    ? `Dr. ${member.name.split(" ").pop()}` 
    : member.name

  const modalText = (member.readMore && member.readMore.trim().length > 0)
    ? member.readMore
    : (member.fullBio && member.fullBio.trim().length > 0)
      ? member.fullBio
      : (member.bio && member.bio.length > 220)
        ? member.bio
        : ''
  const showReadMore = modalText.length > 0

  return (
    <div className="team-card rounded-xl shadow-lg overflow-hidden">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <Image
            src={member.imageUrl || "/placeholder.svg"}
            alt={`${member.name} - ${member.position}`}
            width={400}
            height={400}
            className="team-photo w-full h-full object-cover object-top"
          />
        </div>
        <div className="team-overlay">
          <div className="meet-text">Meet {displayName}</div>
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
        {showReadMore && (
          <div className="mb-4 text-black">
            <ReadMoreModal
              triggerLabel="Read more"
              title={`About ${member.name}`}
            >
              {modalText.split("\n").map((p, i) => (
                <p key={i} className="mb-2">
                  {p}
                </p>
              ))}
            </ReadMoreModal>
          </div>
        )}

        {member.specialties && member.specialties.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {member.specialties.map((specialty, index) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
              >
                {iconMap[specialty] || <Award className="h-4 w-4" />}
                <span>{specialty}</span>
              </div>
            ))}
          </div>
        )}

        <div className="text-xs text-gray-500 space-y-1">
          {member.credentials && (
            <p className="italic">{member.credentials}</p>
          )}
          {member.languages && (
            <p>
              <strong>Languages:</strong> {member.languages}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
