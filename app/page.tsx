import Hero from './components/Hero';
import Process from './components/Process';
import PartnerUniversities from './components/PartnerUniversities';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Process />
      <PartnerUniversities />
      <Testimonials />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/${process.env.WHATSAPP_NUMBER}?text=Hi%20TGE%2C%20I%20want%20to%20learn%20more%20about%20studying%20abroad." className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600">Chat on WhatsApp</a>
            <LeadForm triggerText="Apply Now" />
          </div>
        </div>
      </section>
    </main>
  );
}

// components/Hero.tsx
export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Unlock Your Future with The Global Eduvate</h1>
        <p className="text-xl mb-8">Trusted by thousands of international students. Discover premium universities, tailored courses, and seamless study abroad experiences.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#process" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Learn More</a>
          <LeadForm triggerText="Get Started" />
        </div>
      </div>
    </section>
  );
}

// components/Process.tsx
export function Process() {
  return (
    <section id="process" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your 3-Step Journey to Success</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 p-6 rounded-lg mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Explore & Choose</h3>
            <p>Browse countries, universities, and courses tailored to your goals.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-6 rounded-lg mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Apply Seamlessly</h3>
            <p>Submit your application with our expert guidance.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-6 rounded-lg mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Study Abroad</h3>
            <p>Embark on your international education adventure.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/PartnerUniversities.tsx
export function PartnerUniversities() {
  // Fetch from Supabase or hardcode for now
  const universities = ['Harvard', 'Oxford', 'MIT', 'Stanford']; // Replace with dynamic fetch
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partner Universities</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {universities.map((uni) => (
            <div key={uni} className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold">{uni}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// components/Testimonials.tsx
export function Testimonials() {
  const testimonials = [
    { name: 'John Doe', text: 'TGE made my study abroad dream a reality!' },
    { name: 'Jane Smith', text: 'Exceptional support and guidance.' },
  ];
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <p className="mb-4">"{t.text}"</p>
              <p className="font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
