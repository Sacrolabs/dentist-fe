"use client"

import Image from "next/image"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"

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

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
          {member.imageUrl && (
            <div className="relative h-64 w-full">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-bold text-secondary mb-2">{member.name}</h3>
            <p className="text-primary font-medium mb-3">{member.position}</p>
            <p className="text-gray-600 text-sm line-clamp-3">{member.bio}</p>
            {member.specialties && member.specialties.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {member.specialties.slice(0, 3).map((specialty, i) => (
                  <span
                    key={i}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{member.name}</DialogTitle>
          <p className="text-primary font-medium">{member.position}</p>
        </DialogHeader>
        <div className="mt-4">
          {member.imageUrl && (
            <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <p className="text-gray-700 mb-4 whitespace-pre-line">
            {member.fullBio || member.bio}
          </p>
          {member.readMore && (
            <p className="text-gray-700 mb-4 whitespace-pre-line">{member.readMore}</p>
          )}
          {member.specialties && member.specialties.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-secondary mb-2">Specialties:</h4>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty, i) => (
                  <span
                    key={i}
                    className="text-sm bg-primary/10 text-primary px-3 py-1 rounded"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}
          {member.credentials && (
            <div className="mb-4">
              <h4 className="font-semibold text-secondary mb-2">Credentials:</h4>
              <p className="text-gray-700">{member.credentials}</p>
            </div>
          )}
          {member.languages && (
            <div>
              <h4 className="font-semibold text-secondary mb-2">Languages:</h4>
              <p className="text-gray-700">{member.languages}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
