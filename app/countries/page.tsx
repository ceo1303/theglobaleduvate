import { notFound } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import LeadForm from '../../components/LeadForm';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { data } = await supabase.from('countries').select('*').eq('slug', params.slug).single();
  if (!data) return {};
  return {
    title: `${data.name} - Study in ${data.name} | The Global Eduvate`,
    description: data.description,
    canonical: `https://theglobaleduvate.com/countries/${params.slug}`,
    openGraph: { title: data.name, description: data.description, url: `https://theglobaleduvate.com/countries/${params.slug}` },
  };
}

export default async function CountryPage({ params }: { params: { slug: string } }) {
  const { data: country } = await supabase.from('countries').select('*').eq('slug', params.slug).single();
  if (!country) notFound();

  const { data: universities } = await supabase.from('universities').select('*').eq('country_id', country.id);
  const { data: courses } = await supabase.from('courses').select('*').in('university_id', universities.map(u => u.id));

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{country.name}</h1>
      <p className="mb-8">{country.description}</p>
      <h2 className="text-2xl font-semibold mb-4">Universities in {country.name}</h2>
      <ul className="mb-8">
        {universities.map((uni) => (
          <li key={uni.id}><a href={`/universities/${uni.slug}`} className="text-blue-600">{uni.name}</a></li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Courses Available</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}><a href={`/courses/${course.slug}`} className="text-blue-600">{course.name}</a></li>
        ))}
      </ul>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What are the top universities in ${country.name}?", "acceptedAnswer": { "@type": "Answer", "text": "See our list above." } },
            ],
          }),
        }} />
        {/* FAQ content */}
