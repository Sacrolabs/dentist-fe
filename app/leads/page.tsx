import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "New Patient Registration | Northcote Family Dentist",
  description: "Register your interest and share your details via our secure Airtable form.",
}

export default function LeadsPage() {
  return (
    <main>
      <section className="pt-28 pb-16">{/* account for fixed header */}
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold">Register Your Interest</h1>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Please fill out the form below and our team will get back to you shortly.
            </p>
          </div>
          <div className="w-full">
            <iframe
              className="airtable-embed w-full rounded-md"
              src="https://airtable.com/embed/appDk9smghkPwwwMH/pag2cPy1AZfQDMXOA/form"
              frameBorder={0}
              width="100%"
              height={533}
              style={{ background: "transparent", border: "1px solid #ccc" }}
              title="Leads Capture Form"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
