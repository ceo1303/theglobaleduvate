-- Countries table
CREATE TABLE countries (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Universities table (belongs to countries)
CREATE TABLE universities (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  country_id INTEGER REFERENCES countries(id),
  description TEXT,
  image_url TEXT,
  website_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Courses table (belongs to universities)
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  university_id INTEGER REFERENCES universities(id),
  description TEXT,
  duration TEXT,
  fees TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,
  image_url TEXT,
  author TEXT,
  published_at TIMESTAMP DEFAULT NOW()
);

-- Leads table
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT,
  country TEXT,
  desired_course TEXT,
  last_qualification TEXT,
  preferred_university TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Sample data (optional, seed via Supabase dashboard or script)
INSERT INTO countries (slug, name, description) VALUES ('usa', 'USA', 'Top universities in the USA.');
INSERT INTO universities (slug, name, country_id) VALUES ('harvard', 'Harvard University', 1);
INSERT INTO courses (slug, name, university_id) VALUES ('cs101', 'Computer Science 101', 1);
INSERT INTO blog_posts (slug, title, content) VALUES ('study-abroad-tips', 'Study Abroad Tips', 'Content here...');