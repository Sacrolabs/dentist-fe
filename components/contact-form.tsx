"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { validateEmail, validatePhone, validateName, validateMessage } from "@/lib/validation"
import { honeypotFieldProps } from "@/lib/bot-protection"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [honeypot, setHoneypot] = useState("")
  const [startTime] = useState(() => Date.now())
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    phone?: string
    message?: string
  }>({})
  const [touched, setTouched] = useState<{
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
  }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Validation handlers
  const handleNameBlur = () => {
    setTouched({ ...touched, name: true })
    const result = validateName(formData.name)
    setErrors({ ...errors, name: result.error })
  }

  const handleEmailBlur = () => {
    setTouched({ ...touched, email: true })
    const result = validateEmail(formData.email)
    setErrors({ ...errors, email: result.error })
  }

  const handlePhoneBlur = () => {
    if (formData.phone.trim()) {
      setTouched({ ...touched, phone: true })
      const result = validatePhone(formData.phone)
      setErrors({ ...errors, phone: result.error })
    } else {
      setErrors({ ...errors, phone: undefined })
    }
  }

  const handleMessageBlur = () => {
    setTouched({ ...touched, message: true })
    const result = validateMessage(formData.message)
    setErrors({ ...errors, message: result.error })
  }

  // Check if form has any validation errors
  const hasErrors = () => {
    const nameValidation = validateName(formData.name)
    const emailValidation = validateEmail(formData.email)
    const phoneValidation = formData.phone.trim() ? validatePhone(formData.phone) : { isValid: true }
    const messageValidation = validateMessage(formData.message)

    return !nameValidation.isValid || !emailValidation.isValid || !phoneValidation.isValid || !messageValidation.isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Run all validations before submitting
    const nameValidation = validateName(formData.name)
    const emailValidation = validateEmail(formData.email)
    const phoneValidation = formData.phone.trim() ? validatePhone(formData.phone) : { isValid: true }
    const messageValidation = validateMessage(formData.message)

    // Update errors state
    setErrors({
      name: nameValidation.error,
      email: emailValidation.error,
      phone: phoneValidation.error,
      message: messageValidation.error,
    })

    // Mark all fields as touched
    setTouched({ name: true, email: true, phone: true, message: true })

    // Stop if there are validation errors
    if (!nameValidation.isValid || !emailValidation.isValid || !phoneValidation.isValid || !messageValidation.isValid) {
      return
    }

    setIsSubmitting(true)
    setIsSubmitted(false)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          honeypot,
          startTime,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }

      // Success case
      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      setHoneypot("")
      setErrors({})
      setTouched({})

    } catch (error) {
      console.error('Error submitting form:', error)
      alert(error instanceof Error ? error.message : 'Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
      // Clear success message after 5 seconds
      if (isSubmitted) {
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    }
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-8">Send Us a Message</h2>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-6 text-center">
                <h3 className="font-semibold mb-2">Thank you for your message!</h3>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users, visible to bots */}
                <input
                  {...honeypotFieldProps}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onBlur={handleNameBlur}
                      required
                      className={`form-input ${touched.name && errors.name ? 'border-red-500' : ''}`}
                    />
                    {touched.name && errors.name && (
                      <p className="text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onBlur={handleEmailBlur}
                      required
                      className={`form-input ${touched.email && errors.email ? 'border-red-500' : ''}`}
                    />
                    {touched.email && errors.email && (
                      <p className="text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+64 27 300 0004"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onBlur={handlePhoneBlur}
                      className={`form-input ${touched.phone && errors.phone ? 'border-red-500' : ''}`}
                    />
                    {touched.phone && errors.phone && (
                      <p className="text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>


                  <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger id="service" className="form-input">
                      <SelectValue placeholder="Select a service (optional)">
                        {formData.service && (
                          <span className="text-foreground">
                            {formData.service.charAt(0).toUpperCase() + formData.service.slice(1).replace(/-/g, ' ')}
                          </span>
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Routine Check-up">Routine Check-up</SelectItem>
                      <SelectItem value="Teeth Cleaning">Teeth Cleaning</SelectItem>
                      <SelectItem value="Teeth Whitening">Teeth Whitening</SelectItem>
                      <SelectItem value="Invisalign">Invisalign</SelectItem>
                      <SelectItem value="Dental Implants">Dental Implants</SelectItem>
                      <SelectItem value="Dental Emergency">Dental Emergency</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>  
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onBlur={handleMessageBlur}
                    required
                    className={`form-input ${touched.message && errors.message ? 'border-red-500' : ''}`}
                  />
                  {touched.message && errors.message && (
                    <p className="text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full btn-primary btn-texture"
                  disabled={isSubmitting || hasErrors()}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-8">Get in Touch</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                  46c Lake Road, Northcote, 
                  <br/>
                  Auckland 0627, New Zealand
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Call Us</h3>
                  <p className="text-gray-600">
                    <a href="tel:+64273000004" className="hover:text-primary transition-colors">
                      +64 27 300 0004
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@northcotefamilydentist.co.nz" className="hover:text-primary transition-colors">
                      info@northcotefamilydentist.co.nz
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Opening Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-gray-200 aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=46c+Lake+Road+Northcote+Auckland+0627+New+Zealand&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Northcote Family Dentist Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
