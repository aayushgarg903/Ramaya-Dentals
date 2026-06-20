"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronRight, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminDashboard from '@/components/AdminDashboard';

interface TreatmentItem {
  id: string;
  name: string;
  image: string;
  desc: string;
}

const treatmentsData: TreatmentItem[] = [
  { 
    id: "dental-implant",
    name: "Dental Implant", 
    image: "/images/treatments/implant.png",
    desc: "Permanent, natural-looking tooth replacements. Dental implants are a long-term solution for missing teeth, providing the look, feel, and function of natural teeth while preserving jawbone health." 
  },
  { 
    id: "root-canal-treatment-rct",
    name: "Root Canal Treatment RCT", 
    image: "/images/treatments/cosmetic.png",
    desc: "Save infected teeth and relieve pain. Root canal therapy is a highly effective way to treat infected or inflamed dental pulp, preventing tooth loss and restoring oral health." 
  },
  { 
    id: "wisdom-teeth",
    name: "Wisdom Teeth", 
    image: "/images/treatments/implant.png",
    desc: "Safe and painless extraction. We provide gentle wisdom tooth removal to prevent crowding, impaction, and potential infections, ensuring your comfort throughout the procedure." 
  },
  { 
    id: "clear-aligners",
    name: "Clear Aligners", 
    image: "/images/treatments/aligners.png",
    desc: "Invisible orthodontics for a straight smile. Clear aligners offer a discreet, comfortable, and removable alternative to traditional braces for straightening your teeth." 
  },
  { 
    id: "cosmetic-dental-bonding",
    name: "Cosmetic Dental Bonding", 
    image: "/images/treatments/cosmetic.png",
    desc: "Repair chips and cracks seamlessly. Dental bonding uses a tooth-colored resin to easily fix minor imperfections, restoring the natural appearance of your teeth in just one visit." 
  },
  { 
    id: "laser-dentistry",
    name: "Laser Dentistry", 
    image: "/images/treatments/implant.png",
    desc: "Advanced, pain-free dental procedures. Utilizing state-of-the-art laser technology, we offer minimally invasive treatments with faster healing times and reduced discomfort." 
  },
  { 
    id: "kids-dentistry",
    name: "Kids Dentistry", 
    image: "/images/treatments/pediatric.png",
    desc: "Gentle and fun care for little smiles. Our pediatric dentistry focuses on preventative care and creating a positive, stress-free environment for children's early dental experiences." 
  },
  { 
    id: "dental-crowns-and-bridges",
    name: "Dental Crowns And Bridges", 
    image: "/images/treatments/implant.png",
    desc: "Restore tooth shape, size, and strength. Crowns and bridges are custom-made prosthetics designed to repair damaged teeth or bridge the gap left by missing teeth." 
  },
  { 
    id: "gum-disease-treatment",
    name: "Gum Disease Treatment", 
    image: "/images/treatments/cosmetic.png",
    desc: "Comprehensive care for healthy gums. We offer specialized periodontal therapies to treat gum disease, prevent tooth loss, and maintain overall oral health." 
  },
  { 
    id: "dental-filling",
    name: "Dental Filling", 
    image: "/images/treatments/cosmetic.png",
    desc: "Durable composite fillings for cavities. Our tooth-colored composite fillings treat decay while seamlessly blending with the natural shade of your teeth." 
  },
  { 
    id: "dentures",
    name: "Dentures", 
    image: "/images/treatments/cosmetic.png",
    desc: "Custom-fitted complete and partial dentures. Reclaim your smile and ability to chew properly with our comfortable, custom-designed denture solutions." 
  },
  { 
    id: "teeth-whitening",
    name: "Teeth Whitening", 
    image: "/images/treatments/cosmetic.png",
    desc: "Professional brightening for a dazzling smile. Erase years of stains and discoloration with our safe, fast, and highly effective professional teeth whitening treatments." 
  },
  { 
    id: "mouth-ulcers",
    name: "Mouth Ulcers", 
    image: "/images/treatments/cosmetic.png",
    desc: "Effective diagnosis and treatment. We provide expert evaluation and soothing treatments for recurrent mouth ulcers to help you heal quickly and comfortably." 
  },
  { 
    id: "braces",
    name: "Braces", 
    image: "/images/treatments/aligners.png",
    desc: "Traditional orthodontics for all ages. Correct misaligned teeth and bite issues with our comprehensive, effective traditional braces treatments." 
  },
  { 
    id: "smile-makeover",
    name: "Smile Makeover", 
    image: "/images/treatments/cosmetic.png",
    desc: "Complete cosmetic transformation. Combine multiple cosmetic and restorative procedures to achieve the flawless, confident smile you've always dreamed of." 
  },
];

export default function TreatmentsPage() {
  const router = useRouter();
  const [isAdminOpen, setIsAdminOpen] = React.useState<boolean>(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar 
        onBookClick={() => router.push('/booking')} 
        onAdminClick={() => setIsAdminOpen(true)} 
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-forest pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-96 h-96 bg-lime rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
            <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
              Our <span className="text-lime">Treatments</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto">
              Discover our comprehensive range of premium dental services, uniquely tailored to bring out your best and brightest smile.
            </p>
          </div>
        </section>

        {/* Treatments List */}
        <section className="py-20 px-4 max-w-6xl mx-auto space-y-24">
          {treatmentsData.map((treatment, index) => (
            <div 
              key={treatment.id} 
              id={`treatment-${treatment.id}`}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
                <Image 
                  src={treatment.image} 
                  alt={treatment.name} 
                  fill={true}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-forest/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest/5 text-forest font-bold text-xs rounded-full uppercase tracking-wider">
                  <ChevronRight size={14} className="text-lime" />
                  Service
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-forest">{treatment.name}</h2>
                <p className="text-lg text-forest/70 font-medium leading-relaxed">
                  {treatment.desc}
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => router.push('/booking')}
                    className="flex items-center gap-2 bg-forest hover:bg-forest-light text-lime font-bold px-6 py-3.5 rounded-2xl transition shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <Calendar size={18} />
                    <span>Book Consultation</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />

      {isAdminOpen && (
        <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      )}
    </div>
  );
}
