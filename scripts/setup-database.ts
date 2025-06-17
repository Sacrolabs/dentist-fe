import { createClient } from "@supabase/supabase-js"

async function setupDatabase() {
  // Replace with your actual Supabase URL and service role key
  const supabaseUrl = process.env.SUPABASE_URL || ""
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Missing environment variables for Supabase")
    return
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  try {
    console.log("Setting up database tables...")

    // Create services table
    const { error: servicesError } = await supabase.query(`
      CREATE TABLE IF NOT EXISTS services (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        short_description TEXT NOT NULL,
        full_description TEXT NOT NULL,
        image_url TEXT,
        benefits JSONB,
        procedure_overview TEXT,
        aftercare_instructions TEXT,
        call_to_action TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
      );
    `)

    if (servicesError) {
      throw servicesError
    }

    // Create testimonials table
    const { error: testimonialsError } = await supabase.query(`
      CREATE TABLE IF NOT EXISTS testimonials (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        avatar_url TEXT,
        text TEXT NOT NULL,
        stars INTEGER NOT NULL CHECK (stars BETWEEN 1 AND 5),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
      );
    `)

    if (testimonialsError) {
      throw testimonialsError
    }

    // Create team members table
    const { error: teamError } = await supabase.query(`
      CREATE TABLE IF NOT EXISTS team_members (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        title TEXT NOT NULL,
        bio TEXT NOT NULL,
        image_url TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
      );
    `)

    if (teamError) {
      throw teamError
    }

    console.log("Database tables created successfully!")

    // You could add seed data here if needed
  } catch (error) {
    console.error("Error setting up database:", error)
  }
}

setupDatabase()
